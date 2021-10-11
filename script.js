const axios = require('axios')
const args = require('yargs').argv;

const getWebPage = url => {
    return axios.get(url)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
}

const countWords = (page, words) =>{
    
    let map = {};
    const AllWords = page.split(" ").filter(word => word !== "");
    const wordCount = words.reduce(function(obj, v) { obj[v.toLowerCase()] = 0; return obj; }, {})

    for (let i = 0; i < AllWords.length; i++) {
        const item = AllWords[i]
        if (wordCount[item] !== undefined){
          map[item] = (map[item] + 1) || 1
        }
    }
    return map;
}

const cleanWebContent = (page) =>{
  let alphabet = page.replace(/(<([^>]+)>)/ig," ").replace(/[^A-Za-z']+/g," ").trim()
  return alphabet.toLowerCase()
}


(async ()=>{

    try {
      const url = args.url;
      const words = args.words.split(',');
      
      const content = await getWebPage(url);
      const cleanedContent = cleanWebContent(content);
      const result = countWords(cleanedContent, words);
      console.log(result);

    } catch (error) {
      console.log(error);
    }
})();

