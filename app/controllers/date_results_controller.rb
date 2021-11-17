class DateResultsController < ApplicationController
  before_action :set_user, only: %i[new create index show delete_unreported_passed]
  before_action :set_task_all, only: %i[new show]
  before_action :essential_tasks, only: %i[create show]
  before_action :set_date_schedules_all, only: %i[create index show]

  def new
    @target = Target.find(params[:target_id])
    @date_schedules_all = DateSchedule.where(target_id: @target.id, user_id: @user.id)

    # その女性と何回目のデートなのかをカウントする
    @date_count = DateSchedule.date_count(@date_schedules_all, @date_schedules_all.unreported[0])
    return @fail_tasks_id_array = @date_schedules_all.reported.last.fail_tasks_id_array_get if @date_schedules_all.reported.present?

    @fail_tasks_id_array = @tasks.map(&:id)
  end

  def create
    date_schedule = @date_schedules_all.find(params[:date_schedule_id])
    return redirect_to date_results_path if date_schedule.reported?

    fail_tasks_id_array_integer = params[:fail_tasks_id_array_string].split('-').map(&:to_i)

    ## essential_task_1, essential_task_2 は必ず、作成(DateScheduleTask.create!)される。
    DateScheduleTask.create!(task_id: @essential_task1.id, date_schedule_id: date_schedule.id, result: params[:result_1].to_i) unless fail_tasks_id_array_integer.include?(@essential_task1.id)
    DateScheduleTask.create!(task_id: @essential_task2.id, date_schedule_id: date_schedule.id, result: params[:result_2].to_i) unless fail_tasks_id_array_integer.include?(@essential_task2.id)
    DateScheduleTask.create_fail_tasks(date_schedule, fail_tasks_id_array_integer, params)
    date_schedule.reported!

    # n回目のデート(デート回数)
    date_count_integer = params[:date_count_string].to_i

    # デートタスクのpointを計算
    date_task_point_total = DateScheduleTask.date_task_point_calculate(date_schedule.date_schedule_tasks.success)

    date_schedule.target.create_favorability_rating(date_count_integer, date_task_point_total, date_schedule, @essential_task1, @essential_task2)
    date_schedule.target.create_progress_rating(date_count_integer, date_task_point_total)

    targets = Target.where(user_id: @user.id)
    @user.create_popular_rating(targets, @date_schedules_all.reported)
    redirect_to date_results_path
  end

  def index
    # まだ未報告でデートした日が過去の日(当日含む)の場合の date_schedule を全て取得する。
    @date_schedules_unreported_passed_array = DateSchedule.date_schedules_unreported_passed_array(@date_schedules_all.unreported)
    return redirect_to delete_unreported_passed_date_results_path if @date_schedules_unreported_passed_array.size > 3

    @date_schedules_reported_all = @date_schedules_all.reported
    @date_schedules_reported_pagination = @date_schedules_reported_all.order("updated_at DESC").page(params[:page]).per(7)
  end

  def show
    @date_schedule = @date_schedules_all.find(params[:id])
    @target = @date_schedule.target
    # order("created_at ASC") => 古い順(過去のものから順番に取り出す)
    @date_schedules_reported_all = @target.date_schedules.reported.order("created_at ASC")

    # その女性と何回目のデートなのかをカウントする
    @date_count = DateSchedule.date_count(@date_schedules_reported_all, @date_schedule)

    date_schedule_tasks_success_all = DateScheduleTask.success.where(date_schedule_id: @date_schedules_reported_all.map(&:id))
    last_date_schedule_tasks_success_array = date_schedule_tasks_success_all.where(date_schedule_id: @date_schedules_reported_all.last.id)
    @last_date_schedule_success_task_id_array = last_date_schedule_tasks_success_array.map { |last_date_schedule_task_success| last_date_schedule_task_success.task.id }
    return @success_task_id_array = date_schedule_tasks_success_all.map { |date_schedule_task| date_schedule_task.task.id } if date_schedule_tasks_success_all.present?

    @success_task_id_array = []
  end

  def delete_unreported_passed
    date_schedules_unreported_all = DateSchedule.unreported.where(user_id: @user.id)
    # まだ未報告でデートした日が過去の日(当日含む)の場合の date_schedule を全て取得する。
    @date_schedules_unreported_passed_array = DateSchedule.date_schedules_unreported_passed_array(date_schedules_unreported_all)
    @date_schedules_unreported_passed_pagination = date_schedules_unreported_all.where(id: @date_schedules_unreported_passed_array.map(&:id)).page(params[:page]).per(10)
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end

  def set_task_all
    @tasks = Task.all
  end

  def essential_tasks
    @essential_task1 = Task.find_by(name: "デート終了後、相手からメッセージが来る or 自分の送ったメッセージに返信が来る")
    @essential_task2 = Task.find_by(name: "次のデートのお誘いにOKを貰える or 次のデートに誘われる")
  end

  def set_date_schedules_all
    @date_schedules_all = DateSchedule.where(user_id: @user.id)
  end
end
