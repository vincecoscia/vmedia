Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'posts/new'
  get 'posts/index'
  get 'posts/show'
  devise_for :admins

  resources :posts

  root 'pages#index'

  get 'about', to: 'pages#about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
