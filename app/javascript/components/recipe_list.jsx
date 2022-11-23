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
	

	// console.log('recipeList', recipeList)

	return(
		<>
			<h4>Recipe list</h4>
			{recipeList || 'No recipes'}
		</>
	)
}

// $(document).ready(() => {

// 	const node = $('#recipe_list_container');
// 	const data = JSON.parse(node.attr('data'));

// 	ReactDOM.render(
// 		<RecipeList recipes={data}/>,
// 		document.getElementById('recipe_list').appendChild(document.createElement('div')),	
// 	)
// })

export default RecipeList;