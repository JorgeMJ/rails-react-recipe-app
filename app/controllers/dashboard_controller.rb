class DashboardController < ApplicationController

  def index
    # @This method is empty becasue Rails automatically render the view with the same name as the method
    #(in this case, index). Since we are showing all the actions (add and get recipes) in the same page
    # (index), we have to render in each method that we use in this page (such as get_recipes) to 'index'.
    # Also, if we declare instance variables in a method (for example in get_recipes we declare @recipes),
    # that method will also be avaiable in index.html
  end

  # def new
  #   @recipe = Recipe.new()
  # end

  def add_recipe    
    @recipe = Recipe.new(recipe_params)
    @recipe.save

    redirect_back(fallback_location: root_path)
  end
  

  def get_recipes
    options = params.permit(:num_recipes, :kind => [])

    if options["kind"].include?("all")
      @recipes = Recipe.all.sample(options[:num_recipes].to_i)
    else
      @recipes = Recipe.where(kind: options[:kind]).sample(options[:num_recipes].to_i)  
    end

    render 'index'

  end


  private

  def recipe_params
    params.permit(%i[name kind time ingredients description])
  end
end
