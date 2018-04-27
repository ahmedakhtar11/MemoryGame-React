import React from 'react';
import './MessageCard.css';


function MessageCard(props) {
	return (
        <footer className="page-footer text-center" id ="footer2">

            <div className="message">
                <h5 className="center white-text footer-update">{props.text}</h5>
            </div>
        </footer>
    )
}



export default MessageCard