// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import MyComponent from '../components/my_component'
import AddRecipeForm from '../components/add_recipe_form'
import GetRecipesForm from '../components/get_recipes_form'
import RecipeList from '../components/recipe_list'

/*It is necessary to import in this file all the componenets that I am going to use in my app regadless of if they are
* are children of Hello components, becasue packs are the entry point for React. The packs components are the
* only ones that can have javascript_pack_tag
* The components
* can have their own ReactDom.render call adn we can append it whereever we want. So the idea
* is to create a basci html strcture in the erb with divs and stuff amd in thos elements we append teh react componenets
* telling what element we are appending it to.
*/

