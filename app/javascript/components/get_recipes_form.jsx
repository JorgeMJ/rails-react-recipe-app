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
		<div id='get_recipes_form'>
			<form onSubmit={formSubmitted}>
				<legend><h3>Get Gecipes</h3></legend>
				<fieldset>
					<div>
						<label htmlFor="all" checked='checked'>All</label>
						<input type="checkbox"  name="kind[]" value="all" onChange={handleRecipeKind} />
						<label htmlFor="soup">&nbsp;Soup</label>
						<input type="checkbox"  name="kind[]" value="soup" onChange={handleRecipeKind} />
						<label htmlFor="salad">&nbsp;Salad</label>
						<input type="checkbox"  name="kind[]" value="salad" onChange={handleRecipeKind} />
						<label htmlFor="meat">&nbsp;Meat</label>
						<input type="checkbox"  name="kind[]" value="meat" onChange={handleRecipeKind} />
						<label htmlFor="fish">&nbsp;Fish</label>
						<input type="checkbox"  name="kind[]" value="fish" onChange={handleRecipeKind} />
						<label htmlFor="legumes">&nbsp;Legumes</label>
						<input type="checkbox"  name="kind[]" value="legumes" onChange={handleRecipeKind} />
						<label htmlFor="rice">&nbsp;Rice</label>
						<input type="checkbox"  name="kind[]" value="rice" onChange={handleRecipeKind} />
						<label htmlFor="pasta">&nbsp;Pasta</label>
						<input type="checkbox" name="kind[]" value="pasta" onChange={handleRecipeKind} />
						<label htmlFor="vegetables">&nbsp;Vegetables</label>
						<input type="checkbox"  name="kind[]" value="vegetables" onChange={handleRecipeKind} />
						<label htmlFor="dessert">&nbsp;Dessert</label>
						<input type="checkbox"  name="kind[]" value="dessert" onChange={handleRecipeKind} />
				{/*</fieldset>*/}
				{/*<fieldset>*/}
					<div>
					</div>
						<label htmlFor="num_recipes"> Number of Recipes </label>
						<input type="number" id="num_recipes" name="num_recipes" min="1" max="7"
						 value={numRecipesValue} onChange={handleNumRecipes}/>
					</div>
				{/*</fieldset>*/}
				
					<button type="submit">Get Recipes</button>
				</fieldset>
			</form>

			<RecipeList recipes={recipeList}/>
		</div>
	)
}

// $(document).ready(() => {
// 	ReactDOM.render(
// 		<GetRecipesForm />,
// 		document.getElementById('get_recipes_form').appendChild(document.createElement('div'))
// 	)
// })

export default GetRecipesForm;