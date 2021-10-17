Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'webhook' => 'application#webhook'
  get 'top' => 'top#index'
  get 'before_my_page' => 'application#before_my_page'
  get 'terms' => 'application#terms'
  get 'privacy' => 'application#privacy'
  get 'guide' => 'application#guide'

  resources :app_diagnostics do
    collection do
      post 'original_create'
    end
    collection do
      get 'result'
    end
  end

  resources :users do
    collection do
      get 'my_page'
    end
  end

  resources :app_strategies, only: %i[index show] do
    member do
      get 'step'
    end
    collection do
      get 'date_plan_detail_redirect'
    end
  end

  resources :date_plans, only: %i[index show] do
    member do
      get 'detail'
    end
  end

  resources :targets, only: %i[new create index show edit destroy] do
    member do
      post 'original_update'
    end
  end

  resources :date_results, only: %i[new create index show] do
    collection do
      get 'delete_unreported_passed'
    end
  end

  resources :date_schedules, only: %i[destroy] do
    member do
      post 'original_create'
    end
  end
end
