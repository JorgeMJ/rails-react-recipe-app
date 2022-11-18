Rails.application.routes.draw do
  get 'dashboard/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'dashboard#index'

  get 'dashboard/add_recipe'
  get 'dashboard/get_recipes'
end