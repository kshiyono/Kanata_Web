Rails.application.routes.draw do
  root 'home#index'
  get  '/signup',  to: 'home#index'
  get  '/users',  to: 'home#index'#zantei
  get  '/users/1',  to: 'home#index'#zantei
  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :users, only: [:index, :show, :create]
    end
  end
end
