import React from 'react';
import "./Footer.css";


function Footer(props) {
  return (
    <footer className="page-footer">
      
        <div className="row">
          <h5 className="center white-text footer-update">{props.text}</h5>
        </div>

      <div className="footer-copyright">
        <div className="container center">
        Copyight © 2017 Ahmed Akhtar
        </div>
      </div>
    </footer>
  )
}




export default Footer;