import React from 'react';
import ReactDOM from 'react-dom/client';

// export const RecipeContext = React.createContext();

const Base = () => {
	return (
		<div></div>
	);
}


$(document).ready(() => {

	const container= document.getElementById('app_container');
	const root = ReactDOM.createRoot(container);

	root.render(
		<Base />
	)
	
});

export default Base;