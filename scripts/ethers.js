/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const tejiAddress = "";
const tejiAbi = () => {
    return ``;
};

const etherscanBase = `https://etherscan.io/tx/`;
const correctChain = 1;
const MAX_MINT = 5;
const MAX_SUPPLY = 1000;
const openseaLink = "";
const looksrareLink = "";

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const tejiAddress = "";
// const tejiAbi = () => {
//     return ``;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
// const correctChain = 4;
// const MAX_MINT = 5;
// const MAX_SUPPLY = 1000;
// const openseaLink = "";
// const looksrareLink = "";

/*********************************END CONFIG************************************/

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const teji = new ethers.Contract(tejiAddress, tejiAbi(), signer);
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
        const userAddress = await getAddress();
        const minted = Number(await teji.totalSupply());

        if (minted == 3333) {
            await displayErrorMessage("Sorry, no Tejis remaining!")
        }
        else {
            const numberToMint = Number($("#number-to-mint").text());

            if (numberToMint > MAX_MINT) {
                await displayErrorMessage(`Max ${MAX_MINT} Tejis per transaction!`)
            }
            else if (numberToMint + minted > MAX_SUPPLY) {
                await displayErrorMessage("Mint amount would exceed max supply!")
            }
            else {
                const gasLimit = await teji.estimateGas.mint(numberToMint)
                const newGasLimit = parseInt((gasLimit * 1.2)).toString();
            
                await teji.mint(numberToMint, {gasLimit: newGasLimit}).then( async(tx_) => {
                    await waitForTransaction(tx_);
                });
            }
        }
    }
    catch (error) {
        await displayErrorMessage("An error occurred. See console output or window alert...")
        console.log(error);
        window.alert(error);
    }
};

const updateMintInfo = async() => {
    let minted = Number(await teji.totalSupply());
    $("#num-minted").text(minted);
}

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
    let minted = await teji.totalSupply();
    if (minted == MAX_SUPPLY && !soldOutFlag) {
        soldOutFlag = true
        $("#cost-div").remove();
        $("#amount-controller").remove();
        $("#mint-button").remove();
        $("#mint-tools").append(`<p style="text-align:center">No Tejis remaining!<br>Buy on <a class="link" target="_blank" href="${openseaLink}">OpenSea⬈</a> or <a class="link" target="_blank" href="${looksrareLink}">LooksRare⬈</a></p>`);
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