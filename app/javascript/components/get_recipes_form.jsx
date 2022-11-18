import React from 'react';
import ReactDOM from 'react-dom';

const GetRecipesForm = () => {
	return(
		<form action='/dashboard/get_recipes' method='get'>
				
			<fieldset>
				<legend> Choose Type</legend>
				<label htmlFor="all">All</label>
				<input type="checkbox"  name="kind[]" value="all" />
				<label htmlFor="soup">Soup</label>
				<input type="checkbox"  name="kind[]" value="soup" />
				<label htmlFor="salad">Salad</label>
				<input type="checkbox"  name="kind[]" value="salad" />
				<label htmlFor="meat">Meat</label>
				<input type="checkbox"  name="kind[]" value="meat" />
				<label htmlFor="fish">Fish</label>
				<input type="checkbox"  name="kind[]" value="fish" />
				<label htmlFor="legumes">Legumes</label>
				<input type="checkbox"  name="kind[]" value="legumes" />
				<label htmlFor="rice">Rice</label>
				<input type="checkbox"  name="kind[]" value="rice" />
				<label htmlFor="pasta">Pasta</label>
				<input type="checkbox" name="kind[]" value="pasta" />
				<label htmlFor="vegetables">Vegetables</label>
				<input type="checkbox"  name="kind[]" value="vegetables" />
				<label htmlFor="dessert">Dessert</label>
				<input type="checkbox"  name="kind[]" value="dessert" />
			</fieldset>
			<span>
				<label htmlFor="num_recipes"> Number of Recipes </label>
				<input type="number" id="num_recipes" name="num_recipes" min="1" max="7" />
			</span>
			
			<input type="submit" value="Get Recipes" />
			
		</form>
	)
}

$(document).ready(() => {
	ReactDOM.render(
		<GetRecipesForm />,
		document.getElementById('get_recipes_form').appendChild(document.createElement('div'))
	)
})

export default GetRecipesForm;