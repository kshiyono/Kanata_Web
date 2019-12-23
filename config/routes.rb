Rails.application.routes.draw do
  root   'home#index'
  get    '/signup',  to: 'home#index'#zantei
  get    '/users',  to: 'home#index'#zantei
  get    '/users/1',  to: 'home#index'#zantei
  get    '/login',   to: 'home#index'
  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :users, only: [:index, :show, :create]
      post   '/login',   to: 'sessions#create'
      delete '/logout',  to: 'sessions#destroy'
    end
  end
end
