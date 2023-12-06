import React,{useState} from 'react';
import Nav from './Nav';
import ArticleSummarizer from './ArticleSummarizer';
import TextSummarizer from './TextSummarizer'
export default function Summarizer () {
  const [language, setLanguage] = useState('en');
  const [Summarize, setSummarize] = useState('online article');
  const [length, setLength] = useState(3);
  const languages = [
    { lang: 'English', code: 'en' },
    { lang: 'Chinese', code: 'zh' },
    { lang: 'Spanish', code: 'es' },
    { lang: 'Hindi', code: 'hi' },
    { lang: 'Arabic', code: 'ar' },
    { lang: 'Portuguese', code: 'pt' },
    { lang: 'Bengali', code: 'bn' },
    { lang: 'Russian', code: 'ru' },
    { lang: 'Japanese', code: 'ja' },
    { lang: 'Punjabi', code: 'pa' },
    { lang: 'German', code: 'de' },
    { lang: 'Javanese', code: 'jv' },
    { lang: 'Indonesian', code: 'id' },
    { lang: 'Telugu', code: 'te' },
    { lang: 'Vietnamese', code: 'vi' },
    { lang: 'Korean', code: 'ko' },
    { lang: 'French', code: 'fr' },
    { lang: 'Marathi', code: 'mr' },
    { lang: 'Tamil', code: 'ta' },
    { lang: 'Turkish', code: 'tr' },
    { lang: 'Italian', code: 'it' },
    { lang: 'Persian', code: 'fa' },
    { lang: 'Urdu', code: 'ur' },
    { lang: 'Ukrainian', code: 'uk' },
    { lang: 'Gujarati', code: 'gu' },
    { lang: 'Polish', code: 'pl' },
    { lang: 'Romanian', code: 'ro' },
    { lang: 'Dutch', code: 'nl' },
    { lang: 'Greek', code: 'el' },
    { lang: 'Swedish', code: 'sv' },
    { lang: 'Hungarian', code: 'hu' },
    { lang: 'Finnish', code: 'fi' },
    { lang: 'Burmese', code: 'my' },
    { lang: 'Thai', code: 'th' },
    { lang: 'Catalan', code: 'ca' },
    { lang: 'Hebrew', code: 'he' },
    { lang: 'Amharic', code: 'am' },
    { lang: 'Slovak', code: 'sk' }
  ];
 


// Refactored code block to meet the given requirements

function renderSummarizer() {
  // Check if the value of Summarize is 'online article'
  if (Summarize === 'online article') {
    // If true, return the component <ArticleSummarizer> with the data prop containing the values of language and length
    return <ArticleSummarizer data={{language, length}}/>;
  } else if(Summarize === 'text') {
    // If the value of Summarize is 'text', return the component <TextSummarizer> with the data prop containing the values of language and length
    return <TextSummarizer data={{language, length}}/>;
  }
}
  return (
    <>
<Nav currentPage="summarizer"/>
<div className='container'>
  <div className="summarizer">
   
    <div className="questions">
    <div className="question">
      <p>summarize</p>
      <select onChange={(e) => setSummarize(e.target.value)}>
      <option value="online article">Online article</option>
      <option value="text">Text</option>
      </select>
    </div>
   <div className='question'>
  <p> translate summary into</p> <select onChange={(e) => setLanguage(e.target.value)}>
    {languages.map((lang, index) => (
      <option key={index} value={lang.code}>
        {lang.lang}
      </option>
    ))}
  </select>
   </div>
   <div className="question">
    <p>let the Length in paragraphs be a</p>
    <select onChange={(e) => setLength(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
   </div>
    </div>
  {renderSummarizer()}
  </div>
</div>
    </>
  )
}
