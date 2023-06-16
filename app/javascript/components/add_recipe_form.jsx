import React from 'react';
import ReactDOM from 'react-dom';

const AddRecipeForm = () => {

	return (
		<div id='add_recipe_form'>		
			<form action='/dashboard/add_recipe' method='get'>
				<legend><h3>Add Recipe</h3></legend>
				<div>
					<label htmlFor="name"> Name </label>
					<input type="text" id="name" name="name" />
				</div>
					
				<div>
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
				</div>
				
				<div>
					<label htmlFor="time"> Time </label>
					<input type="text" id="time" name="time" />
				</div>
				
				<div>
					<label htmlFor="ingredients"> Ingredients </label>
					<textarea id="ingredients" name="ingredients" />
				</div>
				
				<div>
					<label htmlFor="description"> Description </label>
					<textarea id="description" name="description" />
				</div>
				
				
				<input type="submit" value="Add Your Recipe" />			
			</form>	
		</div>
	)
}

// $(document).ready( () => {

// 	ReactDOM.render(
// 	  <AddRecipeForm />,
// 	  document.getElementById('add_recipe_form').appendChild(document.createElement('div')),
// 	)
// })



export default AddRecipeForm;