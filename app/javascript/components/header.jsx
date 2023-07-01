import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

import FlashMessage from './flash_message';
import {FlashMessageContext} from './contexts';




const Header = (props) => {

	// const {flashMessage,...rest} = props;
	const message = useContext(FlashMessageContext);

	const buttonAction = (e) => {
		$.ajax({
			url: '/registration/login',
			method: 'GET',
			dataType: 'JSON',
			contentType: 'applicaiton/json',
		}).then((response) => {
			flashMessageFn(response.message)
		});
	}

	return(
		<div id='header'>
			<h1>Recipe Selector</h1>
			<span className="button_container">
				<a href="/registration/login" >Login</a>
				<a href="/registration/signup" >Signup</a>
			</span>
			
			<FlashMessage msn={message}/>	
			{/*<hr />*/}
		</div>
	)	
}

export default Header;