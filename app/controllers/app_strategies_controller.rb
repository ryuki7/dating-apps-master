class AppStrategiesController < ApplicationController
  before_action :set_app, only: %i[show]

  def index
    @apps = App.all
  end

  def show
    @app_strategy_description_split_array = @app.strategy_description.split('.')
    @app_class_name = pulldown_selection_color(@app.id, 'アプリ名')
    @app_purposes = AppPurpose.where(app_id: params[:id])
    @steps = Step.all.limit(8)
  end

  def step
    @purpose = Purpose.find(params[:id])
    app_purposes = AppPurpose.where(purpose_id: params[:id])
    @apps = []

    app_purposes.each do |app_purpose|
      @apps.push(app_purpose.app)
    end

    @purpose_class_name = pulldown_selection_color(@purpose.id, '目的')
    @steps = Step.where(purpose_id: @purpose.id)
  end

  private

  def set_app
    @app = App.find(params[:id])
  end

  def pulldown_selection_color(value, name)
    if name == 'アプリ名'
      case value
      when 1
        'pairs'
      when 2
        'with'
      when 3
        'tapple'
      when 4
        'tinder'
      end
    elsif name == '目的'
      case value
      when 1
        'make_girlfriend'
      when 2
        'play'
      when 3
        'super_play'
      end
    end
  end
end
