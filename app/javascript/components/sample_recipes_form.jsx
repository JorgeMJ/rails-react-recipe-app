import React from 'react';
import ReactDOM from 'react-dom';

import CustomButton from './custom_button';


const SampleRecipesForm = ({flashMessageFn}) => {

	return(
		<>
			<CustomButton type="button" action="add" label="Add Sample Recipes" flashMessageFn={flashMessageFn}/>
			<CustomButton type="button" action="delete" label="Delete Sample Recipes"flashMessageFn={flashMessageFn}/>
		</>
	)

}

// $(document).ready(() => {
// 	ReactDOM.render(
// 		<SampleRecipesForm />,
// 		document.getElementById('sample_recipes_form').appendChild(document.createElement('div'))
// 	)
// })

export default SampleRecipesForm;