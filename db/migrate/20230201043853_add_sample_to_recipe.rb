class AddSampleToRecipe < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :sample, :boolean, :default => false
  end
end
