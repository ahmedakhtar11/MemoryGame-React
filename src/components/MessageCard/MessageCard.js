import React from 'react';
import './MessageCard.css';


function MessageCard(props) {
	return (
        <footer className="page-footer">

            <div className="row">
                <h5 className="center white-text footer-update">{props.text}</h5>
            </div>
        </footer>
    )
}



export default MessageCard