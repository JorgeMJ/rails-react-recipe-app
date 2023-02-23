import React from 'react';
import ReactDOM from 'react-dom';

import SampleRecipesForm from './sample_recipes_form'
import AddRecipeForm from './add_recipe_form'
import GetRecipesForm from './get_recipes_form'


const Body = ({flashMessageFn}) => {

	return(
		<>
			<SampleRecipesForm flashMessageFn={flashMessageFn}/>
			<br /><br />
			<AddRecipeForm />
			<br /><br />
			<GetRecipesForm />
		</>
	)	
}

export default Body;