import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

import {FlashMessageContext} from './contexts';


const FlashMessage = () => {

	const flashMessage = useContext(FlashMessageContext);

	return(
	  <p>{flashMessage}</p>
	)	
}

// $(document).ready(() => {
// 	ReactDOM.render(
// 		<FlashMessage />,
// 		document.getElementById('flash_message').appendChild(document.createElement('div'))
// 	)
// })


export default FlashMessage;