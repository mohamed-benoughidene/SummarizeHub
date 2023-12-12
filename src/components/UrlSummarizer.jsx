import React,{useState} from 'react';
import axios from 'axios';
import Loader from './Loader';
// Refactored function that summarizes an article
export default function UrlSummarizer({ data }) {
  // Destructure the 'data' object
  const { language, length } = data;
  // Set initial state variables using the 'useState' hook
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // Function to summarize the article
  async function summarizeUrl(e) {
    e.preventDefault();
    const requestData = { url, language, length };
    // Update the loading state and clear the summary
    setLoading(true);
    setSummary(null);
    try {
      // Send a POST request to the '/api/article-summarizer' endpoint
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://summarizehub.onrender.com/api/article-summarizer',
        { ...requestData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update the summary state with the response data
      setSummary(response.data.summary);
      setLoading(false);
    } catch (err) {
      // Handle and display any errors
      setError(err.response.data.message);
      setLoading(false);
    }
  }
  // Function to render the appropriate content based on the state
  function render() {
    if (loading && !summary) {
      // Display a loader if loading is true and summary is null
      return <Loader />;
    }
    if (error) {
      // Display an error message if there is an error
      return <p className='err'>{error}</p>;
    } else if (summary) {
      // Display the summary if it exists
      return <p className='summary-text'>{summary}</p>;
    }
  }
  
  return (
    <div className='article-summarizer'>
      <form>
        <input type='text' onChange={e => setUrl(e.target.value)} />
        <button className='btn' type='submit' onClick={e => summarizeUrl(e)}>
          Summarize
        </button>
      </form>
     
      {render()}
    </div>
  );
}