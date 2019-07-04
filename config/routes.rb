Rails.application.routes.draw do
  resources :albums
  get 'hello_world', to: 'hello_world#index'
  get 'posts/new'
  get 'posts/index'
  get 'posts/show'
  devise_for :admins

  resources :posts

  root 'pages#index'

  get '/albums', to: 'pages#index'

  # if current_user
  #   get '*path', to: '/albums/new'
  # end
  # Above code routes all paths to home page - this leaves react in charge of routes

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
