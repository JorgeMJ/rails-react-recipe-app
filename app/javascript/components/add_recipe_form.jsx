import React from 'react';
import ReactDOM from 'react-dom';

const AddRecipeForm = () => {


	return (
		<form action='/dashboard/add_recipe' method='get'>
			<span>
				<label htmlFor="name"> Name </label>
				<input type="text" id="name" name="name" />
			</span>
				
			<span>
				<label htmlFor="kind"> Type </label>
				<select id="kind" name="kind">
					<option value="soup">Soup</option>
					<option value="salad">Salad</option>
					<option value="meat">Meat</option>
					<option value="fish">Fish</option>
					<option value="legumes">Legumes</option>
					<option value="rice">Rice</option>
					<option value="pasta">Pasta</option>
					<option value="vegetable">Vegetable</option>
					<option value="dessert">Dessert</option>
				</select>
			</span>
			
			<span>
				<label htmlFor="time"> Time </label>
				<input type="text" id="time" name="time" />
			</span>
			
			<span>
				<label htmlFor="ingredients"> Ingredients </label>
				<textarea id="ingredients" name="ingredients" />
			</span>
			
			<span>
				<label htmlFor="description"> Description </label>
				<textarea id="description" name="description" />
			</span>
			
			
			<input type="submit" value="Add Recipe" />			
		</form>
	)
}

// $(document).ready( () => {

// 	ReactDOM.render(
// 	  <AddRecipeForm />,
// 	  document.getElementById('add_recipe_form').appendChild(document.createElement('div')),
// 	)
// })



export default AddRecipeForm;