import React from 'react'
import '../pages/error-page.css';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const Navigate = useNavigate();
  return (
    <div className="error-container">
      <h2>Oops! Page Not Found</h2>
      <button type="button" className="btn" onClick={() => {
        Navigate("/")
      }}>BACK TO HOMEPAGE</button>
    </div>
  )
}

export default ErrorPage