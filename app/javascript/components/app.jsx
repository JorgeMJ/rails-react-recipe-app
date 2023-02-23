import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Header from './header'
import Body from './body'
import Footer from './footer'

const App = () => {

	const [flashMessage, setFlashMessage] = useState(null);
	const showFlashMessage = (text) => { setFlashMessage(text) };

	return (
		<>
			<Header flashMessage={flashMessage}/>
			<Body flashMessageFn={showFlashMessage}/>
			<Footer />
		</>
	)
}

$(document).ready(() => {
	ReactDOM.render(
		<App />,
		document.getElementById('root').appendChild(document.createElement('div'))
	)
})

// export const FlashMessageContext = createContext('test');