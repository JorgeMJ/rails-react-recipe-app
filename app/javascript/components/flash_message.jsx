import React, {useContext, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import {FlashMessageContext} from './contexts';


const FlashMessage = ({msn}) => {
	const [flashMessage, setFlashMessage] = useState(null);
	const [padding, setPadding] = useState(0)

	
	useEffect(() => {
		setFlashMessage(msn);

		if(!msn) {
			setPadding(0);
		} else {
			setPadding(10)
		}

		const timer = setTimeout(function(){
			setFlashMessage(null);
			setPadding(0);
		}, 4000)

		return () => clearTimeout(timer);
	},[msn])

	return(
	  <p id="flash_message" style={{padding: padding + 'px'}}>{flashMessage}</p>
	)	
}

// $(document).ready(() => {
// 	ReactDOM.render(
// 		<FlashMessage />,
// 		document.getElementById('flash_message').appendChild(document.createElement('div'))
// 	)
// })


export default FlashMessage;