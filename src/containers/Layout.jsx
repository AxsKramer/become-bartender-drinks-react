import React from 'react'

const Layout = (props) => (
  <div className="container mt-5">
    <div className="row">
      {props.children}
    </div>
  </div>
);
 
export default Layout;