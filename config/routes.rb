Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'weather', to: "weather#index"
  root 'application#index'
end
