class AppStrategiesController < ApplicationController
  before_action :set_app, only: %i[show]

  def index
    @apps = App.all
  end

  def show
    @app_strategy_description_split_array = @app.strategy_description.split('。')
    case @app.id
    when 1
      @app_class_name = 'pairs'
    when 2
      @app_class_name = 'with'
    when 3
      @app_class_name = 'tapple'
    when 4
      @app_class_name = 'tinder'
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
