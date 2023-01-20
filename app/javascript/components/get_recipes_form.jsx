import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import RecipeList from './recipe_list';


const GetRecipesForm = () => {

	const [recipeList, setRecipeList] = useState();
	const [numRecipesValue, setNumRecipesValue]  = useState(1);
	const [recipeKind, setRecipeKind] = useState([])

	const handleNumRecipes = (event) => {
		setNumRecipesValue(event.target.value);
	}

	const handleRecipeKind = (event) => {	
		if(event.target.checked) {
			setRecipeKind( recipeKind => recipeKind.concat(event.target.value))	
		} else {
			const idx = recipeKind.indexOf(event.target.value)
			recipeKind.splice(idx, 1)

			setRecipeKind(recipeKind)
		}		
	}


	const formSubmitted = (event) => { //wrap this ina useCallback hook?
		event.preventDefault();

		$.ajax({
			url: '/dashboard/get_recipes',
			method: 'GET',
			dataType: 'JSON',
			contentType: 'applicaiton/json',
			data: {
				num_recipes: numRecipesValue,
				kind: recipeKind
			}
		}).done((response) => {
			setRecipeList(response);
		});
	}


	return(
		<>
			<form onSubmit={formSubmitted}>
				<fieldset>
					<legend> Choose Type</legend>
					<label htmlFor="all" checked='checked'>All</label>
					<input type="checkbox"  name="kind[]" value="all" onChange={handleRecipeKind} />
					<label htmlFor="soup">Soup</label>
					<input type="checkbox"  name="kind[]" value="soup" onChange={handleRecipeKind} />
					<label htmlFor="salad">Salad</label>
					<input type="checkbox"  name="kind[]" value="salad" onChange={handleRecipeKind} />
					<label htmlFor="meat">Meat</label>
					<input type="checkbox"  name="kind[]" value="meat" onChange={handleRecipeKind} />
					<label htmlFor="fish">Fish</label>
					<input type="checkbox"  name="kind[]" value="fish" onChange={handleRecipeKind} />
					<label htmlFor="legumes">Legumes</label>
					<input type="checkbox"  name="kind[]" value="legumes" onChange={handleRecipeKind} />
					<label htmlFor="rice">Rice</label>
					<input type="checkbox"  name="kind[]" value="rice" onChange={handleRecipeKind} />
					<label htmlFor="pasta">Pasta</label>
					<input type="checkbox" name="kind[]" value="pasta" onChange={handleRecipeKind} />
					<label htmlFor="vegetables">Vegetables</label>
					<input type="checkbox"  name="kind[]" value="vegetables" onChange={handleRecipeKind} />
					<label htmlFor="dessert">Dessert</label>
					<input type="checkbox"  name="kind[]" value="dessert" onChange={handleRecipeKind} />
				</fieldset>
				<span>
					<label htmlFor="num_recipes"> Number of Recipes </label>
					<input type="number" id="num_recipes" name="num_recipes" min="1" max="7"
					 value={numRecipesValue} onChange={handleNumRecipes}/>
				</span>
				
				<button type="submit">Get Recipes</button>
			</form>

			<RecipeList recipes={recipeList}/>
		</>
	)
}

$(document).ready(() => {
	ReactDOM.render(
		<GetRecipesForm />,
		document.getElementById('get_recipes_form').appendChild(document.createElement('div'))
	)
})

export default GetRecipesForm;