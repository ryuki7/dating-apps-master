class AppStrategiesController < ApplicationController
  before_action :set_app, only: %i[show]

  def index
    @apps = App.all
  end

  def show
    app_strategies_page_transition_count = session[:app_strategies_page_transition_count]
    if app_strategies_page_transition_count
      session[:app_strategies_page_transition_count] = session[:app_strategies_page_transition_count] + 1
    else
      session[:app_strategies_page_transition_count] = 1
    end
  
    if app_strategies_page_transition_count == 3
      session[:app_strategies_page_transition_count] = nil
      app_strategies_page_transition_count = nil
      redirect_to load_app_strategy_path(params[:id])
    end
  end

  def make_girlfriend; end

  def play; end

  def super_play; end

  def load
    redirect_to app_strategy_path(params[:id])
  end

  private

  def set_app
    @app = App.find(params[:id])
  end
end
