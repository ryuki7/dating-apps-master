class DatePlansController < ApplicationController

  def index
    @make_girlfriend_purpose = Purpose.find(1)
    @make_girlfriend_app_purposes = AppPurpose.where(purpose_id: 1)

    @play_purpose = Purpose.find(2)
    @play_app_purposes = AppPurpose.where(purpose_id: 2)

    @super_play_purpose = Purpose.find(3)
    @super_play_app = AppPurpose.find_by(purpose_id: 3).app
  end

  def show
    @purpose = Purpose.find(params[:id])
    app_purposes = AppPurpose.where(purpose_id: params[:id])
    @apps = []

    app_purposes.each do |app_purpose|
      @apps.push(app_purpose.app)
    end

    @date_plans = DatePlan.where(purpose_id: @purpose.id)

    @purpose_class_name = pulldown_selection_color(@purpose.id, '目的')
  end

  def detail
    @date_plan = DatePlan.find(params[:id])
    @date_plan_places = DatePlanPlace.where(date_plan_id: @date_plan.id)
    @purpose = Purpose.find(@date_plan.purpose_id)
    app_purposes = AppPurpose.where(purpose_id: @purpose.id)
    @apps = []

    app_purposes.each do |app_purpose|
      @apps.push(app_purpose.app)
    end

    @detail_information_split_array = @date_plan.detail_information.split('.')
    @description_split_array = @date_plan.description.split('.')

    @purpose_class_name = pulldown_selection_color(@purpose.id, '目的')
  end

  private

  def pulldown_selection_color(value, name)
    if name == '目的'
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
