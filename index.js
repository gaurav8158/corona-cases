const cheerio = require('cheerio');
const request = require('request');
console.log("before")
request('https://www.worldometers.info/coronavirus/', cb);
console.log("after") 
function cb(error,responce,html) {
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }
  else{
  handlehtml(html);
  }
} 
function handlehtml(html){
    let selTool = cheerio.load(html);
    // let h1s = selTool("h1");
    // console.log(h1s.length);
    let contentArr = selTool("#maincounter-wrap span");
    // [i] -> wrap selTool
    for(let i=0;i<contentArr.length;i++){
        let data = selTool(contentArr[i]).text();
        console.log("data",data);
    }
    // let total = selTool(contentArr[0]).text(); 
    // let death = selTool(contentArr[1]).text(); 
    // let recover = selTool(contentArr[2]).text(); 
     
    // console.log(chalk.gray("total Cases:"+total));
    // console.log(chalk.red("total Deaths:"+death));
    // console.log(chalk.green("total Recovers:"+recover));
}
