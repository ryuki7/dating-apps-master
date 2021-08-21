class AppStrategiesController < ApplicationController
  before_action :set_apps_index, only: %i[index]
  before_action :set_app, only: %i[show]

  def index; end

  def show; end

  private

  def set_apps_index
    @apps = App.all
    @pairs = @apps[0]
    @with = @apps[1]
    @tapple = @apps[2]
    @tinder = @apps[3]
  end

  def set_app
    @app = App.find(params[:id])
  end
end
