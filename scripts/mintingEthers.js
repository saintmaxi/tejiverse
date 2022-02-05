/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const warriorsAddress = "0xC0c7Eb8E88e7244F7C3569E483ad891F5a508a60";
// const warriorsAbi = () => {
    // return ``;
// };

// const etherscanBase = `https://etherscan.io/tx/`;

// const correctChain = 1;

// const MAX_MINT = 10;

// const MAX_SUPPLY = 10000;

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

const warriorsAddress = "0xD86f6F5dA54Ed67F336E5dd161aB273529e7BD34";
const warriorsAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"EtherWarriorsRenderer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"WLMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"addRaid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_entropyEpochSeed","type":"bytes32"}],"name":"advanceEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint16","name":"topId","type":"uint16"},{"internalType":"bytes32","name":"epochEntropySeed","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"entropySeedForTokenId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochs","outputs":[{"internalType":"uint16","name":"topId","type":"uint16"},{"internalType":"bytes32","name":"epochEntropySeed","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isRaidAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintWithRaid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raidCostPerWarrior","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"removeRaid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setEtherWarriorsRendererAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAdmin","type":"address"}],"name":"setRAIDAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userToRaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;

const correctChain = 4;

const MAX_MINT = 5;

const MAX_SUPPLY = 10000;

/*********************************END CONFIG************************************/

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const warriors = new ethers.Contract(warriorsAddress, warriorsAbi(), signer);
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

const mint = async () => {
    try {
        const minted = Number(await warriors.totalSupply());

        if (minted == MAX_SUPPLY) {
            await displayErrorMessage("Sorry, no Ether Warriors remaining!")
        }
        else {
            const numberToMint = Number($("#number-to-mint").text());

            if (numberToMint > MAX_MINT) {
                await displayErrorMessage(`Max ${MAX_MINT} Warriors per transaction!`);
            }
            else if (numberToMint + minted > MAX_SUPPLY) {
                await displayErrorMessage("Mint amount would exceed max supply!")
            }
            else {            
                const gasLimit = await warriors.estimateGas.WLMint(numberToMint);
                const newGasLimit = parseInt((gasLimit * 1.2)).toString();
            
                await warriors.WLMint(numberToMint, {gasLimit: newGasLimit}).then( async(tx_) => {
                    await waitForTransaction(tx_);
                });
            }
        }
    }
    // try {
    //     const userAddress = await getAddress();
    //     const minted = Number(await warriors.totalSupply());

    //     if (minted == MAX_SUPPLY) {
    //         await displayErrorMessage("Sorry, no eggs remaining!")
    //     }
    //     else {
    //         const numberToMint = Number($("#number-to-mint").text());

    //         if (numberToMint > MAX_MINT) {
    //             await displayErrorMessage("Max 10 0xDragons per transaction!")
    //         }
    //         else if (numberToMint + minted > MAX_SUPPLY) {
    //             await displayErrorMessage("Mint amount would exceed max supply!")
    //         }
    //         else {
    //             let cost;
    //             if (minted >= 200) {
    //                 cost = ethers.BigNumber.from("30000000000000000").mul(numberToMint);
    //             }
    //             else {
    //                 cost = 0;
    //             }
            
    //             const gasLimit = await warriors.estimateGas.mint(userAddress, numberToMint, {value: cost})
    //             const newGasLimit = parseInt((gasLimit * 1.2)).toString();
            
    //             await warriors.mint(userAddress, numberToMint, { value: cost, gasLimit: newGasLimit}).then( async(tx_) => {
    //                 await waitForTransaction(tx_);
    //             });
    //         }
    //     }
    // }
    catch (error) {
        if ((error.message).includes("quantity to mint too high")) {
            await displayErrorMessage("Error: Mint quantity too high!")
        }
        else {
            await displayErrorMessage("An error occurred. See console output or window alert...")
            console.log(error);
            window.alert(error);
        }
    }
};

const updateMintInfo = async() => {
    let minted = Number(await warriors.totalSupply());
    $("#num-minted").text(minted);
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
            // await updateClaimingInfo();
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
var pendingTransactions = localStorage.getItem("EtherWarriorsPendingTxs");

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
    localStorage.removeItem("EtherWarriorsPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("EtherWarriorsPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
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
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateMintInfo();
    }
}

const checkConnectedStatus = async() => {
    try {
        await getAddress();
        $("#connect-section").addClass('hidden');
        $("#mint-tools").removeClass('hidden');
    }
    catch {
        $(".connect-section").removeClass('hidden');
        $("#mint-tools").addClass('hidden');
    }
}

var soldOutFlag = false;

const checkSoldOut = async() => {
    let minted = await warriors.totalSupply();
    if (minted == MAX_SUPPLY && !soldOutFlag) {
        soldOutFlag = true
        $("#cost-div").remove();
        $("#amount-controller").remove();
        $("#mint-button").remove();
        $("#mint-tools").append(`<p style="text-align:center">No eggs remaining!<br>Buy on <a class="link" target="_blank" href="https://opensea.io/collection/0xdragoncult">OpenSea⬈</a> or <a class="link" target="_blank" href="https://looksrare.org/collections/0xC0c7Eb8E88e7244F7C3569E483ad891F5a508a60">LooksRare⬈</a></p>`);
    }
}

setInterval(async()=>{
    await updateInfo();
    await updateMintInfo();
    await checkSoldOut();
}, 5000)

function decrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    if (currentClaim > 1) {
        let newClaim = currentClaim - 1;
        $("#number-to-mint").text(newClaim);
    }
}

function incrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    if (currentClaim != MAX_MINT) {
        let newClaim = currentClaim + 1;
        $("#number-to-mint").text(newClaim);
    }
}

const setMaxMint = async() => {
    $("#number-to-mint").text(MAX_MINT);
}

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    $("#mobile-account").text(`${userAddress.substr(0,9)}...`);
    await checkConnectedStatus();
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    await updateMintInfo();
    await checkSoldOut();
};

window.onunload = async()=>{
    cachePendingTransactions();
}