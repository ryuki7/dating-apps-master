class DateResultsController < ApplicationController
  before_action :set_user, only: %i[new create index show delete_unreported_passed]

  def new
    # 未報告の date_schedule を取得。
    @date_schedule_unreported = DateSchedule.unreported.find_by(target_id: params[:target_id], user_id: @user.id)
    @target = @date_schedule_unreported.target

    date_schedules_all = DateSchedule.where(target_id: @target.id, user_id: @user.id)
    date_schedules_all.each.with_index(1) do |date_schedule, i|
      @date_count = i if @date_schedule_unreported.id == date_schedule.id
    end

    @tasks = Task.all

    # 報告済の date_schedules を取得する。
    date_schedules_reported = DateSchedule.reported.where(target_id: params[:target_id], user_id: @user.id)

    if date_schedules_reported.present?
      date_schedules_reported_last = date_schedules_reported.last
      @fail_tasks_id_array = date_schedules_reported_last.fail_tasks_id_array_get
    else
      @fail_tasks_id_array = @tasks.map(&:id)
    end
  end

  def create
    date_schedule = DateSchedule.find(params[:date_schedule_id])
    target = date_schedule.target
    if date_schedule.unreported?
      fail_tasks_id_array_integer = params[:fail_tasks_id_array_string].split('-').map(&:to_i)

      essential_task_1 = Task.find_by(name: "デート終了後、相手からメッセージが来る or 自分の送ったメッセージに返信が来る")
      essential_task_2 = Task.find_by(name: "次のデートのお誘いにOKを貰える or 次のデートに誘われる")

      ## essential_task_1, essential_task_2 は必ず、作成(DateScheduleTask.create!)される。
      DateScheduleTask.create!(task_id: essential_task_1.id, date_schedule_id: date_schedule.id, result: params[:result_1].to_i) unless fail_tasks_id_array_integer.include?(essential_task_1.id)
      DateScheduleTask.create!(task_id: essential_task_2.id, date_schedule_id: date_schedule.id, result: params[:result_2].to_i) unless fail_tasks_id_array_integer.include?(essential_task_2.id)
      DateScheduleTask.create_fail_tasks(date_schedule, fail_tasks_id_array_integer, params)
      date_schedule.reported!

      # n回目のデート(デート回数)
      date_count_integer = params[:date_count_string].to_i

      # (デートスケジュール毎の)成功したデートタスクを全て取得する
      date_schedule_tasks_success_array = DateScheduleTask.success.where(date_schedule_id: date_schedule.id)
      # デートタスクのpointを計算
      date_task_point_total = DateScheduleTask.date_task_point_calculate(date_schedule_tasks_success_array)

      target.create_favorability_rating(date_count_integer, date_task_point_total, date_schedule, essential_task_1, essential_task_2)
      target.create_progress_rating(date_count_integer, date_task_point_total)

      targets = Target.where(user_id: @user.id)
      date_schedules_reported_all = DateSchedule.reported.where(user_id: @user.id)
      @user.create_popular_rating(targets, date_schedules_reported_all)
    end
    redirect_to date_results_path
  end

  def index
    date_schedules_unreported_all = DateSchedule.unreported.where(user_id: @user.id)
    @date_schedules_unreported_passed_array = []
    date_schedules_unreported_all.each do |date_schedule_unreported|
      date_schedule_unreported_appointment = date_schedule_unreported.appointment_date_class_create
      # 未報告の date_schedule の日付が「過去の日付 or 今日の日付」の場合は、デート結果未報告として View に表示する為に配列として格納する。
      @date_schedules_unreported_passed_array.push(date_schedule_unreported) if date_schedule_unreported_appointment <= Time.zone.today
    end

    if @date_schedules_unreported_passed_array.size > 3
      redirect_to delete_unreported_passed_date_results_path
    end

    @date_schedules_reported_all = DateSchedule.reported.where(user_id: @user.id)
    @date_schedules_reported_pagination = DateSchedule.reported.where(user_id: @user.id).order("updated_at DESC").page(params[:page]).per(7)
  end

  def show
    @date_schedule = DateSchedule.reported.find_by(id: params[:id], user_id: @user.id)
    @target = @date_schedule.target
    # order("created_at ASC") => 古い順(過去のものから順番に取り出す)
    @date_schedules_reported_all = DateSchedule.reported.where(target_id: @target.id, user_id: @user.id).order("created_at ASC")

    # その女性と何回目のデートなのかをカウントする
    @date_schedules_reported_all.each.with_index(1) do |date_schedule_reported, i|
      @date_count = i if @date_schedule.id == date_schedule_reported.id
    end

    last_date_schedule_tasks_success_array = DateScheduleTask.success.where(date_schedule_id: @date_schedules_reported_all.last.id)
    @last_date_schedule_success_task_id_array = last_date_schedule_tasks_success_array.map {|last_date_schedule_task_success| last_date_schedule_task_success.task.id}

    date_schedule_tasks_success_all = DateScheduleTask.success.where(date_schedule_id: @date_schedules_reported_all.map(&:id))
    if date_schedule_tasks_success_all.present?
      @success_task_id_array = date_schedule_tasks_success_all.map {|date_schedule_task| date_schedule_task.task.id}
    else
      @success_task_id_array = []
    end

    @tasks = Task.all
    @essential_task_1 = Task.find_by(name: "デート終了後、相手からメッセージが来る or 自分の送ったメッセージに返信が来る")
    @essential_task_2 = Task.find_by(name: "次のデートのお誘いにOKを貰える or 次のデートに誘われる")
  end

  def delete_unreported_passed
    date_schedules_unreported_all = DateSchedule.unreported.where(user_id: @user.id)
    @date_schedules_unreported_passed_array = []
    date_schedules_unreported_all.each do |date_schedule_unreported|
      date_schedule_unreported_appointment = date_schedule_unreported.appointment_date_class_create
      # デートした日が過去の日(当日含む)の場合の date_schedule を全て取得する。
      if date_schedule_unreported_appointment <= Time.zone.today
        @date_schedules_unreported_passed_array.push(date_schedule_unreported)
      end
    end

    @date_schedules_unreported_passed_pagination = DateSchedule.unreported.where(id: @date_schedules_unreported_passed_array.map(&:id), user_id: @user.id).page(params[:page]).per(10)
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end
end
