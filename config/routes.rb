Rails.application.routes.draw do
  root 'site#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/holidays', to: 'holidays#index'
  get '/holidays/:id', to: 'holidays#show'
  post '/holidays/', to: 'holidays#create'
  delete '/holidays/:id', to: 'holidays#delete'
  put '/holidays/:id', to: 'holidays#update'
end
