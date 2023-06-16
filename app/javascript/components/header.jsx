import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

import FlashMessage from './flash_message';
import {FlashMessageContext} from './contexts';




const Header = (props) => {

	// const {flashMessage,...rest} = props;
	const message = useContext(FlashMessageContext);

	return(
		<div id='header'>
			<h1>Recipe Selector</h1>
			<FlashMessage msn={message}/>	
			{/*<hr />*/}
		</div>
	)	
}

export default Header;