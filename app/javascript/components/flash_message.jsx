import React, {useState, createContext, useContext} from 'react';
import ReactDOM from 'react-dom';




const FlashMessage = () => {
	
	const msn = useContext(FlashContext)
	return(
	  <p>'THIS IS ThE MESSAGE:  {msn}'</p>
	)	
}

$(document).ready(() => {
	ReactDOM.render(
		<FlashMessage />,
		document.getElementById('flash_message').appendChild(document.createElement('div'))
	)
})


export default FlashMessage;