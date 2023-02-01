class DashboardController < ApplicationController

  def index
    # @This method is empty becasue Rails automatically renders the view with the same name as the method
    #(in this case, index). Since we are showing all the actions (add and get recipes) in the same page
    # (index), we have to render in each method that we use in this page (such as get_recipes) to 'index'.
    # Also, if we declare instance variables in a method (for example in get_recipes we declare @recipes),
    # that method will also be avaiable in index.html
  end


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

    render json: @recipes
  end

  
  def add_sample_recipes
    path = "#{Rails.root}/app/assets/data/sample_recipes.yml"
    file = YAML.load(ERB.new(File.read(path)).result)

    recipes = file[:recipes].values


    # To skip duplicate rows, see ActiveRecord::Persistence#insert_all. 
    # insert_all!: https://apidock.com/rails/v6.0.0/ActiveRecord/Persistence/ClassMethods/insert_all%21
    #insert_all: https://apidock.com/rails/v6.0.0/ActiveRecord/Persistence/ClassMethods/insert_all
    # *check optional attributes for unique records*

    #insert_all does not support automatic created_at & updated_at creation. It needs to
    # explicitly be passed for  each record (How do you do it before Rails 6??) 

    # use insert_all because we can use unique_by (let say name?).THis avoid duplicates. Thrn we can Add to the yml
    #file a yml.erb and pass created_At and upadated_at and parse ruby Time.now


    begin
      # Recipe.insert_all(recipes, unique_by: :name)
      Recipe.insert_all(recipes)
      head :no_content
    rescue
      puts '**Error => sample recipes couldn\'t be added.' 
    end
  end

  def delete_sample_recipes
    begin
      Recipe.where(sample: true).destroy_all
      head :no_content
    rescue
      puts '**Error => sample recipes couldn\'t be deleted.' 
    end

  end


  private

  def recipe_params
    params.permit(%i[name kind time ingredients description])
  end
end
