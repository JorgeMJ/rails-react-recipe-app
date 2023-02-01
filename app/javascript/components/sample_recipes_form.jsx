import React from 'react';
import ReactDOM from 'react-dom';

import CustomButton from './custom_button';


const SampleRecipesForm = () => {

	return(
		<>
			<CustomButton type="button" action="add" text="Add Sample Recipes"/>
			<CustomButton type="button" action="delete" text="Delete Sample Recipes"/>
		</>
	)

}

$(document).ready(() => {
	ReactDOM.render(
		<SampleRecipesForm />,
		document.getElementById('sample_recipes_form').appendChild(document.createElement('div'))
	)
})

export default SampleRecipesForm;