Rails.application.routes.draw do

  resources :stocks
  devise_for :users
  get 'about' => 'home#about'
  get 'api/stock/:id' => 'home#getStock'
  get 'stocksuser' => 'home#userStocks'
  get 'api/users' => 'home#getUsers'
  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
