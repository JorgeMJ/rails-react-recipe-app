import React from 'react';
import ReactDOM from 'react-dom';

import SampleRecipesForm from './sample_recipes_form'
import AddRecipeForm from './add_recipe_form'
import GetRecipesForm from './get_recipes_form'


const Body = () => {

	return(
		<>
			<SampleRecipesForm />
			<div id='forms_container'>
			 	<br /><br />
				<GetRecipesForm />
				<br /><br />
				<AddRecipeForm />				
			</div>	

		</>
	)	
}

export default Body;