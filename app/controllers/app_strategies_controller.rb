class AppStrategiesController < ApplicationController
  before_action :set_app, only: %i[show]

  def index
    @apps = App.all
  end

  def show; end

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
