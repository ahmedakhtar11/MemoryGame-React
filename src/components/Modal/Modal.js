import React from 'react';
import './Modal.css';



function Modal() {
	return (
		<div className="instructionsModal">
			<div className="modal-content">
				<h4 className="center">Game Instructions</h4>
				<ol>
					<li>Click on any Burn Notice Character to start the game.</li>
					<li>Every time you click a Character, they all get shuffled.</li>
					<li>If you choose the same Character twice, You Lose!</li>
					<li>Click all 12 Characters only once to Win the Game!</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
				<a className="waves-effect waves-light btn" onClick={() => {
					document.getElementsByClassName('instructionsModal')[0].classList.add('hide');
				}}>Play Memory Game.</a>
			</div>	
		</div>
	)
}





export default Modal;