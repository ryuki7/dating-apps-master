# frozen_string_literal: true

class AppStrategiesController < ApplicationController
  before_action :set_app, only: %i[show]
  before_action :set_purpose, only: %i[step]
  skip_before_action :login_check

  def index
    @apps = App.all
  end

  def show
    @app_strategy_description_split_array = @app.strategy_description.split('.')
    @app_purposes = AppPurpose.where(app_id: params[:id])
    # 項目1〜8までの、項目名(step のnameカラム)を取得したい。(目的は不問。)
    @steps = Step.all.order('created_at ASC').limit(8)
  end

  def step
    app_purposes = AppPurpose.where(purpose_id: @purpose.id)
    @apps = AppPurpose.apps_get(app_purposes)
  end

  def date_plan_detail_redirect
    redirect_to "/date_plans/#{params[:date_plan_id]}/detail#date_plans_detail_action_fragment"
  end

  private

  def set_app
    @app = App.find(params[:id])
  end

  def set_purpose
    @purpose = Purpose.find(params[:id])
  end
end
