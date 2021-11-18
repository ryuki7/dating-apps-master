class DatePlansController < ApplicationController
  skip_before_action :login_check
  before_action :set_purpose, only: %i[show]
  before_action :set_date_plan, only: %i[detail]

  def index
    @make_girlfriend_purpose = Purpose.find_by(name: '彼女作り')
    @play_purpose = Purpose.find_by(name: '遊び')
    @super_play_purpose = Purpose.find_by(name: '超遊び')
    # 「超遊び」は、1つのアプリ(ティンダー)しか存在しない。
    @super_play_app_purpose = AppPurpose.find_by(purpose_id: @super_play_purpose.id)
  end

  def show
    app_purposes = AppPurpose.where(purpose_id: @purpose.id)
    @apps = AppPurpose.apps_get(app_purposes)
  end

  def detail
    app_purposes = AppPurpose.where(purpose_id: @date_plan.purpose.id)
    @apps = AppPurpose.apps_get(app_purposes)
    @detail_information_split_array = @date_plan.detail_information.split('.')
    @description_split_array = @date_plan.description.split('.')
  end

  private

  def set_purpose
    @purpose = Purpose.find(params[:id])
  end

  def set_date_plan
    @date_plan = DatePlan.find(params[:id])
  end
end
