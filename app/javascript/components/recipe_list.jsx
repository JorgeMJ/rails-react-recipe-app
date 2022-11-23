import React from 'react';
import ReactDOM from 'react-dom';

const RecipeList = () => {
	
	// const recipes = React.useContext(RecipeContext);

	const myrecipeList = (recipes) => {
		recipes?.map((recipe, idx) => {
			return <div key={idx}>
				<p>Name: {recipe.name}</p>
				<p>Kind: {recipe.kind}</p>
				<p>Time:{recipe.time}</p>
				<p>Ingredients: {recipe.ingredients}</p>
				<p>Description: {recipe.description}</p>
				<hr></hr>
			</div>
		})
	}
	

	// console.log('recipeList', recipeList)

	return(
		// <RecipeContext.Consumer>
			<>
				<h4>Recipe list</h4>
				{/*{value => myrecipeList(recipeList) || 'No recipes'}*/}
				{/*{myrecipeList || 'No recipes'}*/}
			</>
		// </RecipeContext.Consumer>
	)
}

$(document).ready(() => {

	const node = $('#recipe_list_container');
	const data = JSON.parse(node.attr('data'));

	ReactDOM.render(
		<RecipeList recipes={data}/>,
		document.getElementById('recipe_list').appendChild(document.createElement('div')),	
	)
})

export default RecipeList;