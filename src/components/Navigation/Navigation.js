import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {
  const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "20px"
  }

  if(isSignedIn) {
    return (
      <nav style={navStyle}>
        <h1 onClick={() => onRouteChange('signout')} className="f3 link underline pa3 pointer">Sign Out</h1>
      </nav>
    );
  } else {
    return (
      <nav style={navStyle}>
        <h1 onClick={() => onRouteChange('signin')} className="f3 link underline pa3 pointer">Sign In</h1>
        <h1 onClick={() => onRouteChange('register')} className="f3 link underline pa3 pointer">Register</h1>
      </nav>
    )
  }
}


export default Navigation