Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'test' => 'application#test'
  post 'webhook' => 'application#webhook'
  get 'top' => 'top#index'
  resources :app_diagnostics do
    collection do
      post 'original_create'
    end
    collection do
      get 'result'
    end
  end
  resources :users do
    member do
      get 'my_page'
    end
  end
  resources :app_strategies, only: %i[index show]
end
