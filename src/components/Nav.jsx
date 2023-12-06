import React, { useRef, useEffect, useState } from 'react';

import {
    BrowserRouter as Router,Link 
  } from "react-router-dom";
  import { TfiMenu } from "react-icons/tfi";
export default function Nav({currentPage}) {
    // setting the menu logs to be responsive
    const navRef = useRef(null);
    const [menuLogoSize, setMenuLogoSize] = useState(50);
    useEffect(() => {
        function handleWindowResize() {
            // getting the nav element width
            const navElementWidth = navRef.current.offsetWidth;
            setMenuLogoSize(()=>{
                // converting the nav with into percentage (6%)
                const width = navElementWidth * 6 / 100;
                if(width > 36){
                 return 36
                }else if (width < 20){
                    return 20
                }else{
                    return width
                }
            })
        } window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
      // nav toggle
      const ulRef = useRef();
      function showAndHideNav() {
        ulRef.current.classList.toggle("toggle-nav-menu");
      }
   // Scroll smoothly to a specified target element on the page
function smoothScrollTo(target) {
  // Find the target element in the document
  const element = document.querySelector(target);

  // If the target element exists
  if (element) {
    // Define the vertical scroll position of the element
    const offset = 50; // Adjust this value to control the scroll stop position
    const elementPosition = element.offsetTop - offset;

    // Scroll the window to the specified element position
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth', // Enable smooth scrolling
      block: 'start', // Scroll to the top of the element
      inline: 'nearest', // Scroll to the nearest edge of the element
    });
  }
}
     // Function to log out the user
function logout() {
  // Remove the token from local storage
  localStorage.removeItem('token');
  // Remove the user email from local storage
  localStorage.removeItem('userEmail');
  // Reload the window
  window.location.reload();
}
     // Function to render navigation links
function render() {
  // Check if currentPage is 'summarizer'
  if (currentPage === 'summarizer') {
    // Return a button element with onClick event listener and className 'btn logout-btn'
    return <button onClick={logout} className='btn logout-btn'>Logout</button>;
  } 
  // Check if currentPage is 'login'
  else if (currentPage === 'login') {
    // Return a Link element with to prop set to '/', className 'go-back', and inner text '<< Go Back'
    return <Link to="/" className='go-back'>{'<<'} Go Back</Link>;
  } 
  // Check if currentPage is 'signup'
  else if (currentPage === 'signup') {
    // Return a Link element with to prop set to '/login', className 'go-back', and inner text '<< Go Back'
    return <Link to="/login" className='go-back'>{'<<'} Go Back</Link>;
  } 
  // If none of the above conditions are met
  else{
    // Return a Fragment element
    return <>
      <button className='hamburger' onClick={showAndHideNav} >
        <TfiMenu size={menuLogoSize}/>
      </button>
      <ul ref={ulRef} onClick={showAndHideNav}>
        <li>
          <Link onClick={() => smoothScrollTo('#hero')} to="/#hero">Home</Link>
        </li>
        <li>
          <Link onClick={() => smoothScrollTo('#about')} to="/#about">About</Link>
        </li>
        <li>
          <Link to="/login">log in</Link>
        </li>
        <li>
          <Link onClick={() => smoothScrollTo('#contact')} to="/#contact">Contact</Link>
        </li>
      </ul>
    </>;
  }
}
  return (
  
<nav ref={navRef}>
<Link to="/" className='logo'>SummarizeHub</Link>

    {render()}
</nav>
 


  )
}
