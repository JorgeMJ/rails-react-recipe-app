class DashboardController < ApplicationController

  def index

  end


  def add_recipe    
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      flash.notice = 'saved'
    else
      flash.alert = 'not saved'
    end

    redirect_back(fallback_location: root_path)
  end
  

  def get_recipes
    options = params.permit(:num_recipes, :kind => [])
    begin    
      if options["kind"].include?("all")
        @recipes = Recipe.all.sample(options[:num_recipes].to_i)
      else
        @recipes = Recipe.where(kind: options[:kind]).sample(options[:num_recipes].to_i)  
      end
    rescue NoMethodError => e
      puts e

      @recipes = {error: 'Error'}
    ensure
      puts '@recipes', @recipes
      render json: @recipes
    end
  end

  
  def add_sample_recipes
    path = "#{Rails.root}/app/assets/data/sample_recipes.yml"
    file = YAML.load(ERB.new(File.read(path)).result)

    recipes = file[:recipes].values


    ##### ADD TOTAL COUNT OF RECIPES. THIS CAN BE A GOOD CASE TO USE React 'REDUX' ######
    # becasue we are sending a prop modification from a child component to the top
    # to modify instantly the total number of recipes in the database
    begin
      #Recipe.insert_all(recipes).valid?
      Recipe.create!(recipes)
      message = "Success. Sample Recipes added."
    rescue ActiveRecord::RecordInvalid
      message = 'Sample Recipes have already been added.'
    end

    render json: {message: message}
  end

  def delete_sample_recipes
    begin
      Recipe.where(sample: true).destroy_all
      message = 'Success. Sample Recipes deleted.'
    rescue
      message = '**Error => sample recipes couldn\'t be deleted.' 
    end
    render json: {message: message}
  end


  private

  def recipe_params
    params.permit(%i[name kind time ingredients description])
  end
end
