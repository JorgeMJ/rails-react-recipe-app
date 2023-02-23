import React from 'react';
import ReactDOM from 'react-dom';


const FlashMessage = ({flashMessage}) => {

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