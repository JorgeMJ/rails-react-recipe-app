import React, {useRef} from 'react';
import ReactDOM from 'react-dom';


const RecipeList = ({recipes}) => {



	const toggleDescription = (e, idx) => {
		e.preventDefault();

		const bottomPanel = $("#recipe_"+idx+" .recipe_bottom")
		console.log('bottomPanel',bottomPanel)
		bottomPanel.toggle()
	}

	const recipeList = recipes?.map((recipe, idx) => {
		return <div key={idx} id={`recipe_${idx}`}>
			<div className="recipe_top" >
				<p className="recipe_name" onClick={(e)=> toggleDescription(e, idx)}> {recipe.name}</p>
				<p> {recipe.kind}</p>
				<p> {recipe.time} mins</p>	
			</div>
			<div className="recipe_bottom">
				<p>Ingredients: {recipe.ingredients}</p>
				<p>Description: {recipe.description}</p>
			</div>
						
			<hr></hr>
		</div>
	})
	

	return(
		<>
			<h4 id="recipe_list_header">Recipe list</h4>
			<div id="recipe_list">{recipeList || 'No recipes'}</div>
		</>
	)
}

export default RecipeList;