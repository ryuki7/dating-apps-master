class DateSchedulesController < ApplicationController
  before_action :set_user, only: %i[original_create destroy]

  def original_create
    date_schedule = DateSchedule.create!(date_schedule_params)
    # LINEメッセージを送る（line-bot）
    date_schedule.line_message_send(@user)
    redirect_to "/targets/#{params[:id]}#targets_date_schedule_fragment"
  end

  def destroy
    date_schedule = DateSchedule.find_by(id: params[:id], user_id: @user.id)
    date_schedule.destroy!
    case params[:referer]
    when "date_result"
      redirect_to date_results_path
    when "date_result_unreported_passed"
      redirect_to delete_unreported_passed_date_results_path
    else
      redirect_to "/targets/#{date_schedule.target.id}#targets_date_registration_fragment"
    end
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end

  def date_schedule_params
    params.permit(:appointment, :date_plan_id).merge(target_id: params[:id], user_id: @user.id)
  end
end
