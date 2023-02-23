import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Header from './header'
import Body from './body'
import Footer from './footer'
import {FlashMessageContext} from './contexts';
import {FlashMessageContextFn} from './contexts';


const App = () => {

	const [flashMessage, setFlashMessage] = useState(null);
	const flashMessageFn = (text) => { setFlashMessage(text) };
	

	return (
		<FlashMessageContext.Provider value={flashMessage}>
			<FlashMessageContextFn.Provider value={flashMessageFn}>
				<Header />
				<Body />
				<Footer />
			</FlashMessageContextFn.Provider>
		</FlashMessageContext.Provider>
	)
}

$(document).ready(() => {
	ReactDOM.render(
		<App />,
		document.getElementById('root').appendChild(document.createElement('div'))
	)
})

// export const FlashMessageContext = createContext('test');