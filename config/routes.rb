Rails.application.routes.draw do
  root   'home#index'
  get    '/signup',  to: 'home#index'#zantei
  get    '/users',  to: 'home#index'#zantei
  get    '/users/1',  to: 'home#index'#zantei
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :users, only: [:index, :show, :create]
    end
  end
end
