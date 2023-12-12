import React,{useState} from 'react';
import axios from 'axios';
import Loader from './Loader';
export default function ArticleSummarizer({data}) {
    const {language,length} = data;
    const [text, setText] = useState('');
const [Summary, setSummary] = useState(null);    
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

   async function summarizeText(e){
    e.preventDefault();
   const requestData = {text,language,length};
   setLoading(true);
   setSummary(null);
   try{
    const token = localStorage.getItem('token');
     const response = await axios.post('https://summarizehub.onrender.com/api/text-summarizer', {...requestData},{
      headers: {
        Authorization: `Bearer ${token}`,
      },
     });
     setSummary(response.data.summary);
     setLoading(false);
   }catch(err){
    setError( err.response.data.mes);
    setLoading(false);
   }
   }
   function render(){
    if(loading && !Summary){
      return <Loader/>
    }
    if(error){
      return <p className='err'>{error}</p>
    }else if(Summary){
      return <p className='summary-text'>{Summary}</p>
    }
   }
  return (
    <div className='text-summarizer'>
        <form >
            <textarea type="text" onChange={e => setText(e.target.value)}/>
             <button className='btn' type='submit' onClick={e => summarizeText(e)}>Summarize</button>
        </form>
        
        {render()}
    </div>
  )
}
