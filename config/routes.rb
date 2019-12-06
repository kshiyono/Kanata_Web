Rails.application.routes.draw do
  root 'home#index'
  get  '/signup',  to: 'home#index'
  get  '/users',  to: 'home#index'
  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :users, only: [:index, :show]
    end
  end
end
