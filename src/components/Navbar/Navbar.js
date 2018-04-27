import React from 'react';


function Navbar(props) {
	return(
        <nav className="navbar navbar-default" id="navbar">
            <div className="expand navbar-expand" id="navbarSupportedContent">
				<a href="/" className='brand-logo center'>Memory Game</a>
                <ul className="navbar-nav mr-auto">
					<li style={{paddingRight: "20px"}}>Score: {props.score}</li>
					<li style={{paddingLeft: "20px"}}>Top Score: {props.topScore}</li>
                </ul>
                </div>
		</nav>
	)
}



export default Navbar;








