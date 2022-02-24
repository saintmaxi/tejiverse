/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const tejiAddress = "";
// const tejiAbi = () => {
//     return ``;
// };

// const etherscanBase = `https://etherscan.io/tx/`;
// const correctChain = 1;
// const MAX_MINT = 1;
// const MAX_SUPPLY = 1000;
// const openseaLink = "";
// const looksrareLink = "";

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

const tejiAddress = "0xAC12e7B63b58555E16bDa948817193E3b53a4621";
const tejiAbi = () => {
    return `[ "constructor(string,address)", "event Approval(address indexed,address indexed,uint256 indexed)", "event ApprovalForAll(address indexed,address indexed,bool)", "event OwnershipTransferred(address indexed,address indexed)", "event Transfer(address indexed,address indexed,uint256 indexed)", "function TEJI_MAX() view returns (uint256)", "function approve(address,uint256)", "function balanceOf(address) view returns (uint256)", "function baseURI() view returns (string)", "function claim()", "function claimWhitelist(bytes)", "function getApproved(uint256) view returns (address)", "function isApprovedForAll(address,address) view returns (bool)", "function looksrare() view returns (address)", "function marketplacesApproved() view returns (bool)", "function name() view returns (string)", "function opensea() view returns (address)", "function owner() view returns (address)", "function ownerOf(uint256) view returns (address)", "function renounceOwnership()", "function safeTransferFrom(address,address,uint256)", "function safeTransferFrom(address,address,uint256,bytes)", "function saleState() view returns (uint256)", "function setApprovalForAll(address,bool)", "function setBaseURI(string)", "function setMarketplaces(address,address)", "function setSaleState(uint256)", "function setSigner(address)", "function setUnrevealedURI(string)", "function signer() view returns (address)", "function supportsInterface(bytes4) view returns (bool)", "function symbol() view returns (string)", "function toggleMarketplacesApproved()", "function tokenByIndex(uint256) view returns (uint256)", "function tokenOfOwnerByIndex(address,uint256) view returns (uint256)", "function tokenURI(uint256) view returns (string)", "function totalSupply() view returns (uint256)", "function transferFrom(address,address,uint256)", "function transferOwnership(address)", "function unrevealedURI() view returns (string)", "function walletOfOwner(address) view returns (uint256[])" ]`;
};

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
const correctChain = 4;
const MAX_MINT = 1;
const MAX_SUPPLY = 1000;
const openseaLink = "";
const looksrareLink = "";

/*********************************END CONFIG************************************/

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const tejis = new ethers.Contract(tejiAddress, tejiAbi(), signer);

var whitelistIsLive;
var publicIsLive;

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

const getSignature = async(account) => {
    const response = await fetch(`https://tejiverse.xyz/.netlify/functions/sign?addr=${account}`);
    const text = await response.text();
    return text;
  }

const isWhitelistOnly = async() => {
    let whitelistLive = (Number(await tejis.saleState()) == 1);
    whitelistIsLive = whitelistLive;
    return whitelistLive;
}

const isPublic = async() => {
    let publicLive = (Number(await tejis.saleState()) == 2);
    publicIsLive = publicLive;
    return publicLive;
}

const checkMintingLive = async() => {
    const whitelistLive = await isWhitelistOnly();
    const publicLive = await isPublic();
    if (!whitelistLive && !publicLive) {
        $("#mint-buttons").addClass("hidden");
        $("#mint-closed").removeClass("hidden");
    }
    else {
        if (publicLive && whitelistLive) {
            $("#whitelisted").html('');
        }
        $("#mint-buttons").removeClass("hidden");
        $("#mint-closed").addClass("hidden");
    }
}

const checkWhitelistStatus = async() => {
    const whitelistLive = await isWhitelistOnly();

    if (whitelistLive) {
        const addr = await getAddress();
        const signature = await getSignature(addr); //how check WL, just load list as set and see if contains?
        let _isWhitelisted;
        if (signature.includes("Not in whitelist")) {
            _isWhitelisted = false;
        }
        else {
            _isWhitelisted = true;
        }
        if (!publicIsLive) {
            $("#whitelisted").html(_isWhitelisted ? "Congrats, you made the whitelist!" : "Sorry, you are not whitelisted. Please wait for our public sale.");
        }
        return _isWhitelisted;
    }
};

const mint = async() => {
    const whitelistLive = await isWhitelistOnly();
    const publicLive = await isPublic();

    try {
        if (publicLive) {

            const gasLimit = await tejis.estimateGas.claim();
            const newGasLimit = parseInt((gasLimit * 1.2)).toString();
        
            await tejis.claim({gasLimit: newGasLimit}).then( async(tx_) => {
                await waitForTransaction(tx_);
            });   
        }
        else if (whitelistLive) {
            const whitelisted = checkWhitelistStatus();
            if (!whitelisted){
                await displayErrorMessage("You are not whitelisted!");
            }
            else {
                const signature = await getSignature(await getAddress());

                if (signature.includes("Invalid") || signature.includes("Not in whitelist")) {
                    await displayErrorMessage(`Error: Invalid API response: ${signature}`);
                }
                else {
                    const gasLimit = await tejis.estimateGas.claimWhitelist(signature);
                    const newGasLimit = parseInt((gasLimit * 1.2)).toString();
                    
                    await tejis.claimWhitelist(signature, {gasLimit: newGasLimit}).then( async(tx_) => {
                        await waitForTransaction(tx_);
                    });
                }
            }
        }
        else {
            await displayErrorMessage("Minting not yet live!")
        }
    }
    catch (error) {
        if ((error.message).includes("Tejiverse: invalid signature")) {
            await displayErrorMessage(`Error: You are not whitelisted!`)
        }
        else if ((error.message).includes("Tejiverse: max supply exceeded")) {
            await displayErrorMessage(`Error: Mint would exceed max supply!`)
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }

};

const updateMintInfo = async() => {
    let minted = Number(await tejis.totalSupply());
    $("#num-minted").text(minted);
    if (minted == MAX_SUPPLY) {
        $("#sold-out").html(`SOLD OUT. <br><br>AVAILABLE ON <a href="${openseaLink}" target="_blank" class="w-inline-block" style="text-decoration:none;color:blue;">OPENSEA⬈</a> & <a href="${looksrareLink}" target="_blank" class="w-inline-block" style="text-decoration:none;color:green;">LOOKSRARE⬈</a>`);
        $("#mint-button").remove();
        $("#mint-n-stake-button").remove();
        $("#quantity-controls").remove();
    }
}

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

provider.on("network", async(newNetwork, oldNetwork) => {
        if (oldNetwork) {
            $("#refresh-notification").remove();
            await updateCurrentChain();
            await updateMintInfo();
        }
    });

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("TejiversePendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("TejiversePendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("TejiversePendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
    displayLoading();
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    $("#loading-popup").remove();
    $("#block-screen-loading").remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateMintInfo();
    }
}

setInterval(async()=>{
    await updateInfo();
    await updateMintInfo();
    await checkMintingLive();
}, 5000)

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    $("#mobile-account").text(`${userAddress.substr(0,9)}..`);
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    await checkMintingLive();
    await updateMintInfo();
    await checkWhitelistStatus();
};

window.onunload = async()=>{
    cachePendingTransactions();
}