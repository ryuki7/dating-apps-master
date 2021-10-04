class DateSchedulesController < ApplicationController
  before_action :set_user, only: %i[original_create destroy]

  def original_create
    DateSchedule.create!(date_schedule_params)
    redirect_to "/targets/#{params[:id]}#targets_date_schedule_fragment"
  end

  def destroy
    @date_schedule = DateSchedule.find_by(id: params[:id], user_id: @user.id)
    @target = @date_schedule.target
    @date_schedule.destroy!
    redirect_to "/targets/#{@target.id}#targets_date_registration_fragment"
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end

  def date_schedule_params
    params.permit(:appointment, :date_plan_id).merge(target_id: params[:id], user_id: @user.id)
  end
end
