import React from 'react';
import ReactDOM from 'react-dom';

import FlashMessage from './flash_message';


const Header = (props) => {

	// const {flashMessage,...rest} = props;


	return(
		<>
			<h1>Recipe Selector</h1>
			<FlashMessage />	
			<hr />
		</>
	)	
}

export default Header;