Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'webhook' => 'application#webhook'
  get 'top' => 'top#index'
  get 'before_my_page' => 'application#before_my_page'
  get 'terms' => 'application#terms'
  get 'privacy' => 'application#privacy'
  get 'guide' => 'application#guide'
  get 'richmenu_guide' => 'application#richmenu_guide'

  resources :app_diagnostics do
    post 'original_create', on: :collection
    get 'result', on: :collection
  end

  resources :users do
    get 'my_page', on: :collection
    get 'system_spec_login', on: :member
  end

  resources :app_strategies, only: %i[index show] do
    get 'step', on: :member
    get 'date_plan_detail_redirect', on: :collection
  end

  resources :date_plans, only: %i[index show] do
    get 'detail', on: :member
  end

  resources :targets, only: %i[new create index show edit destroy] do
    post 'original_update', on: :member
  end

  resources :date_results, only: %i[new create index show] do
    get 'delete_unreported_passed', on: :collection
  end

  resources :date_schedules, only: %i[destroy] do
    post 'original_create', on: :member
  end
end
