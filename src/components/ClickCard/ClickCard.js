import React from 'react';
import './ClickCard.css';

function handleClick(props) {
	props.reArrangeCards();
	props.characterChosen(props.id);
}


function ClickCard(props) {
	return (
        <div className="card-img-top" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}




export default ClickCard