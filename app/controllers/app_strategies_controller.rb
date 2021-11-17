class AppStrategiesController < ApplicationController
  before_action :set_app, only: %i[show]
  skip_before_action :login_check

  def index
    @apps = App.all
  end

  def show
    @app_strategy_description_split_array = @app.strategy_description.split('.')
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

    @steps = Step.where(purpose_id: @purpose.id)
    @date_plans = DatePlan.where(purpose_id: @purpose.id)
  end

  def date_plan_detail_redirect
    redirect_to "/date_plans/#{params[:date_plan_id]}/detail#date_plans_detail_action_fragment"
  end

  private

  def set_app
    @app = App.find(params[:id])
  end
end
