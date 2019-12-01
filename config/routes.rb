Rails.application.routes.draw do
  root 'home#index'
  get  '/signup',  to: 'users#new'
  get  '/users/new'
  resources :users
end
