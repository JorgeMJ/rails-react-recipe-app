import React from 'react';
import ReactDOM from 'react-dom';


const RecipeList = ({recipes}) => {

	const recipeList = recipes?.map((recipe, idx) => {
		return <div key={idx}>
			<p>Name: {recipe.name}</p>
			<p>Kind: {recipe.kind}</p>
			<p>Time:{recipe.time}</p>
			<p>Ingredients: {recipe.ingredients}</p>
			<p>Description: {recipe.description}</p>
			<hr></hr>
		</div>
	})
	

	return(
		<>
			<h4>Recipe list</h4>
			{recipeList || 'No recipes'}
		</>
	)
}

export default RecipeList;