const axios = require('axios');

async function articleSummarizer (req, res) {
        // Destructuring properties from the request body
    const {articleUrl, language,length} = req.body;
   
        // Setting up the options object for the API request
    const options = {
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
          url: articleUrl,
          length: length,
          lang: language,
         
        },
        headers: {
          'X-RapidAPI-Key': '2e041d8497msh91ff2511610ba5cp1ad93ejsn082cd3c6525c',
          'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
      };
    try{
                // Making the API request using axios
    const response = await axios(options);
    
            // Sending the API response back as JSON
    res.status(200).json(response.data);
    }catch(err){
                // Sending an error response if the API request fails
        res.status(400).json({msg:err.message});
    }
}

async function textSummarizer(req,res){
      // Destructuring request body
 const {text, language,length} = req.body;
   // Setting up options for API request
 const option =  {
    method: 'POST',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '2e041d8497msh91ff2511610ba5cp1ad93ejsn082cd3c6525c',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    },
    data: {
      lang: language,
      length: length,
      text: text
    }
  };
 try{
        // Making API request using axios
  const response = await axios(option);
      // Sending successful response
  res.status(200).json(response.data);
 }catch(err){
        // Sending error response
    res.status(400).json({msg:err.message});
 }
}

module.exports = {articleSummarizer, textSummarizer};