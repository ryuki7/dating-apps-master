class DateResultsController < ApplicationController
  before_action :set_user, only: %i[new create index show]

  def new
    @date_schedule = DateSchedule.find_by(target_id: params[:target_id], user_id: @user.id, report_confirmation: 0)
    @target = @date_schedule.target
    @app = @target.app
    @appearance = @target.appearance
    @purpose = @target.purpose
    @tasks = Task.all
  end

  def create
    @date_schedule = DateSchedule.find(params[:date_schedule_id])
    unless @date_schedule.report_confirmation == 1
      @task_number_array = 1..11
      @task_number_array.each do |i|
        symbol = "result_#{i}".to_sym
        DateScheduleTask.create!(task_id: i, date_schedule_id: @date_schedule.id, result: params[symbol])
      end
      @date_schedule.report_confirmation = 1
      @date_schedule.save!
    end
    redirect_to date_results_path
  end

  def index
    @date_schedules_unreported_pagination = DateSchedule.where(user_id: @user.id, report_confirmation: 0).page(params[:page]).per(7)
    @date_schedules_unreported_passed_array = []
    @date_schedules_unreported_pagination.each do |date_schedule_unreported|
      date_schedule_unreported_appointment = appointment_date_class_create(date_schedule_unreported.appointment)
      if date_schedule_unreported_appointment <= Date.today
        @date_schedules_unreported_passed_array.push(date_schedule_unreported)
      end
    end

    @date_schedules_reported_all = DateSchedule.where(user_id: @user.id, report_confirmation: 1)
    @date_schedules_reported_pagination = DateSchedule.where(user_id: @user.id, report_confirmation: 1).page(params[:page]).per(7)
  end

  def show
  end

  private

  def appointment_date_class_create(date)
    split_blank_array = date.split
    split_month_and_day = split_blank_array[1].split("月")
    appointment_str = "#{split_blank_array[0].gsub(/[^\d]/, "")}-#{split_month_and_day[0]}-#{split_month_and_day[1].gsub(/[^\d]/, "")}"
    Date.parse(appointment_str)
  end

  def set_user
    @user = User.find(session[:user_id])
  end
end
