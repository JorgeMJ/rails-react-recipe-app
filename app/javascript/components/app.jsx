import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

import Header from './header'
import Body from './body'
import Footer from './footer'
import {FlashMessageContext} from './contexts';
import {FlashMessageContextFn} from './contexts';

import './stylesheet/App.css'
// import headerStyle from './stylesheet/Header.module.css';
import './stylesheet/Header.module.css';


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
	// ReactDOM.render(
	// 	<App />,
	// 	document.getElementById('root').appendChild(document.createElement('div'))
	// )

	const rootElement = document.getElementById('root').appendChild(document.createElement('div'));
	const root = createRoot(rootElement);

	root.render(
		<App />
	)
})

// export const FlashMessageContext = createContext('test');