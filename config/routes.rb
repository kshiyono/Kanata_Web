Rails.application.routes.draw do
  get 'home/index'
  root 'static_pages#home'

end
