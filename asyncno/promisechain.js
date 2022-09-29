//promise
// function getProcessedData(url){
//     return downloadData(url)
//     .catch((e) =>downloadFallbackData(url))
//     .then((v)=> processDataInWoker(v))
// }


//rewritten
async function getProcessedData(url) {
    let v;
    try{
        v = await downloadData(url)
    }
    catch(e) {
        v = await downloadFallbackData(url)
    }
    return processDataInWorker(v)
}


async function getProcessedData(url){
    const v = await downloadData(url).catch((e) => 
    downloadFallbackData(url))
    return processDataInWorker(v)
}