class DateResultsController < ApplicationController
  before_action :set_user, only: %i[new create index show delete_unreported_passed]

  def new
    # 未報告の date_schedule を取得。
    @date_schedule_unreported = DateSchedule.find_by(target_id: params[:target_id], user_id: @user.id, report_confirmation: 0)
    @target = @date_schedule_unreported.target

    @date_schedules_all = DateSchedule.where(target_id: @target.id, user_id: @user.id)
    @date_schedules_all.each.with_index(1) do |date_schedule, i|
      if @date_schedule_unreported.id == date_schedule.id
        @date_count = i
      end
    end

    # report_confirmation = 1 のみ。(報告済の date_schedules を取得する。)
    @date_schedules_reported = DateSchedule.where(target_id: params[:target_id], user_id: @user.id, report_confirmation: 1)

    # 最後の report_confirmation = 1 のみ。(報告済の最後の date_schedules を取得する。)
    @fail_tasks_id_array = []
    if @date_schedules_reported.present?
      @date_schedules_reported_last = @date_schedules_reported.last
      @date_schedules_reported_last.date_schedule_tasks.each do |date_schedule_task|
        if date_schedule_task.result == "失敗" || date_schedule_task.result == "未実施"
          @fail_tasks_id_array.push(date_schedule_task.task.id)
        end
      end
    else
      @fail_tasks_id_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    end

    @tasks = Task.all
    @app = @target.app
    @appearance = @target.appearance
    @purpose = @target.purpose
  end

  def create
    @date_schedule = DateSchedule.find(params[:date_schedule_id])
    @target = @date_schedule.target
    unless @date_schedule.report_confirmation == 1
      @fail_tasks_id_array_integer = params[:fail_tasks_id_array_string].split('-').map(&:to_i)

      if !@fail_tasks_id_array_integer.include?(1)
        # 「デート終了後、相手からメッセージが来る or 自分の送ったメッセージに返信が来る」
        DateScheduleTask.create!(task_id: 1, date_schedule_id: @date_schedule.id, result: params[:result_1])
      end

      if !@fail_tasks_id_array_integer.include?(2)
        # 「2回目のデートのお誘いにOKを貰える or 2回目のデートに誘われる」
        DateScheduleTask.create!(task_id: 2, date_schedule_id: @date_schedule.id, result: params[:result_2])
      end

      @fail_tasks_id_array_integer.each do |i|
        symbol = "result_#{i}".to_sym
        DateScheduleTask.create!(task_id: i, date_schedule_id: @date_schedule.id, result: params[symbol])
      end
      @date_schedule.report_confirmation = 1
      @date_schedule.save!

      # n回目のデート(デート回数)
      @date_count_integer = params[:date_count_string].to_i

      # デートタスクのpoint
      @date_schedule_tasks_success_array = DateScheduleTask.where(date_schedule_id: @date_schedule.id, result: "成功")
      @date_task_point_total = 0
      @task_1_success = "失敗or未実施"
      @task_2_success = "失敗or未実施"
      @date_schedule_tasks_success_array.each do |date_schedule_task_success|
        @date_task_point_total = @date_task_point_total + date_schedule_task_success.task.point
        @task_1_success = "成功" if date_schedule_task_success.task.id == 1
        @task_2_success = "成功" if date_schedule_task_success.task.id == 2
      end

      favorability_rating_create(@date_count_integer, @date_task_point_total, @task_1_success, @task_2_success)
      progress_rating_create(@date_count_integer, @date_task_point_total, @task_1_success, @task_2_success)

      @targets = Target.where(user_id: @user.id)
      date_schedules_reported_all = DateSchedule.where(user_id: @user.id, report_confirmation: 1)
      popular_rating_create(@targets, date_schedules_reported_all)
    end
    redirect_to date_results_path
  end

  def index
    @date_schedules_unreported_all = DateSchedule.where(user_id: @user.id, report_confirmation: 0)
    @date_schedules_unreported_passed_array = []
    @date_schedules_unreported_all.each do |date_schedule_unreported|
      date_schedule_unreported_appointment = date_schedule_unreported.appointment_date_class_create
      if date_schedule_unreported_appointment <= Time.zone.today
        @date_schedules_unreported_passed_array.push(date_schedule_unreported)
      end
    end

    if @date_schedules_unreported_passed_array.size > 3
      redirect_to delete_unreported_passed_date_results_path
    end

    @date_schedules_reported_all = DateSchedule.where(user_id: @user.id, report_confirmation: 1)
    @date_schedules_reported_pagination = DateSchedule.where(user_id: @user.id, report_confirmation: 1).order("updated_at DESC").page(params[:page]).per(7)
  end

  def show
    @date_schedule = DateSchedule.find_by(id: params[:id], user_id: @user.id, report_confirmation: 1)
    @target = @date_schedule.target
    @date_schedules_reported_all = DateSchedule.where(target_id: @target.id, user_id: @user.id, report_confirmation: 1)

    @date_schedules_reported_all.each.with_index(1) do |date_schedule_reported, i|
      if @date_schedule.id == date_schedule_reported.id
        @date_count = i
      end
    end

    @last_date_schedule_tasks_success = DateScheduleTask.where(date_schedule_id: @date_schedules_reported_all.last.id, result: "成功")
    @last_success_task_id_array = @last_date_schedule_tasks_success.map {|last_date_schedule_task| last_date_schedule_task.task.id}

    @date_schedule_tasks_success_all = DateScheduleTask.where(date_schedule_id: @date_schedules_reported_all.map(&:id), result: "成功")
    if @date_schedule_tasks_success_all.present?
      @success_task_id_array = @date_schedule_tasks_success_all.map {|date_schedule_task| date_schedule_task.task.id}
    else
      @success_task_id_array = []
    end

    @tasks = Task.all
    @app = @target.app
    @appearance = @target.appearance
    @purpose = @target.purpose
  end

  def delete_unreported_passed
    @date_schedules_unreported_all = DateSchedule.where(user_id: @user.id, report_confirmation: 0)
    @date_schedules_unreported_passed_array = []
    @date_schedules_unreported_all.each do |date_schedule_unreported|
      date_schedule_unreported_appointment = date_schedule_unreported.appointment_date_class_create
      if date_schedule_unreported_appointment <= Time.zone.today
        @date_schedules_unreported_passed_array.push(date_schedule_unreported)
      end
    end

    @date_schedules_unreported_passed_pagination = DateSchedule.where(id: @date_schedules_unreported_passed_array.map(&:id), user_id: @user.id, report_confirmation: 0).page(params[:page]).per(10)
  end

  private

  def popular_rating_create(targets_all, date_schedules_reported_all)
    @targets_all_favorability_rating_and_progress_rating = 0
    targets_all.each do |target|
        @targets_all_favorability_rating_and_progress_rating = @targets_all_favorability_rating_and_progress_rating + target.favorability_rating + target.progress_rating
    end
    @targets_all_favorability_rating_and_progress_rating_3_division = @targets_all_favorability_rating_and_progress_rating / 3

    # デートした「女性の人数」(同じ女性と複数回デートしても、1回としてカウントする)
    date_schedule_reported_target_id_array_duplicate = date_schedules_reported_all.map {|date_schedule_reported| date_schedule_reported.target.id}
    date_schedule_reported_target_id_array_duplicate_none = date_schedule_reported_target_id_array_duplicate.uniq

    popular_rating = @targets_all_favorability_rating_and_progress_rating_3_division / date_schedule_reported_target_id_array_duplicate_none.size + date_schedule_reported_target_id_array_duplicate_none.size
    @user.popular_rating = popular_rating
    @user.save!
  end

  def favorability_rating_create(date_count, date_task_point_total, task_1_success, task_2_success)
    @favorability_rating = 0
    case date_count
    when 1
      @favorability_rating = 30
      @favorability_rating = @favorability_rating + 15 if task_2_success == "成功"
      @favorability_rating = @favorability_rating + 5 if task_1_success == "成功"
    when 2
      @favorability_rating = @favorability_rating + 10 if task_2_success == "成功"
    when 3
      @favorability_rating = @favorability_rating + 10 if task_2_success == "成功"
    end

    @favorability_rating = @favorability_rating - 15 if task_1_success == "失敗or未実施"
    @favorability_rating = @favorability_rating - 5 if task_2_success == "失敗or未実施"

    @favorability_rating = @favorability_rating + date_task_point_total / 2.5
    @target.favorability_rating = @target.favorability_rating + @favorability_rating
    if @target.favorability_rating >= 100 
      @target.favorability_rating = 100
    end
    @target.save!
  end

  def progress_rating_create(date_count, date_task_point_total, task_1_success, task_2_success)
    @progress_rating = 0
    case date_count
    when 1
      @progress_rating = 20
    when 2
      @progress_rating = 8
    when 3
      @progress_rating = 2
    when 4
      @progress_rating = 2
    end

    @progress_rating = @progress_rating + date_task_point_total
    @target.progress_rating = @target.progress_rating + @progress_rating
    if @target.progress_rating >= 100 
      @target.progress_rating = 100
    end
    @target.save!
  end

  def set_user
    @user = User.find(session[:user_id])
  end
end
