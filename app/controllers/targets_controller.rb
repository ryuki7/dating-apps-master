# frozen_string_literal: true

class TargetsController < ApplicationController
  layout 'redirect_application', only: %i[new show]
  before_action :set_user, only: %i[create index show edit original_update destroy]
  before_action :set_target, only: %i[show edit original_update destroy]
  before_action :set_apps, only: %i[new index edit]
  before_action :setup_target_select_item, only: %i[new edit]
  before_action :meta_url, only: %i[new show]
  before_action :essential_tasks, only: %i[show]
  before_action :select_prefecture_city_get, only: %i[new edit]

  def new; end

  def create
    Target.create!(target_params)
    redirect_to targets_path
  end

  def index
    @targets = Target.where(user_id: @user.id)
    @targets_pagination = @targets.order('updated_at DESC').page(params[:page]).per(7)
  end

  def show
    @date_schedules_reported_all = @target.date_schedules.reported
    @date_schedules_reported_last_except = @date_schedules_reported_all.first(@date_schedules_reported_all.size - 1)
    @all_task_id_array = Task.all.map(&:id)
    if @date_schedules_reported_all.last.present?
      last_date_schedule_tasks_success = @date_schedules_reported_all.last.date_schedule_tasks.success
      @last_success_task_id_array = last_date_schedule_tasks_success.map { |last_date_schedule_task| last_date_schedule_task.task.id }
      # おすすめのデート予定日を配列で取得する。(1個目が最初の日、2個目が最後の日。)
      @recommend_date_appointment_array = DateSchedule.recommend_date_appointment_array(@date_schedules_reported_all.last)
    end
    # おすすめのデートプランを取得する。
    @date_plan_recommend = DateSchedule.recommend_date_plan(@date_schedules_reported_all, @user, @target)

    @date_schedule_unreported = @target.date_schedules.unreported[0]
    # Dateクラスのフォーマットに変換する。
    @date_schedule_unreported_appointment = @date_schedule_unreported.appointment_date_class_create if @date_schedule_unreported

    date_schedule_tasks_success_all = DateScheduleTask.success.where(date_schedule_id: @date_schedules_reported_all.map(&:id))
    return @success_task_id_array = date_schedule_tasks_success_all.map { |date_schedule_task| date_schedule_task.task.id } if date_schedule_tasks_success_all.present?

    @success_task_id_array = []
  end

  def edit; end

  def original_update
    @target.update_params_discrimination(params)
    redirect_to target_path(@target.id)
  end

  def destroy
    @target.destroy!
    redirect_to targets_path
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end

  def set_target
    @target = Target.find(params[:id])
  end

  def set_apps
    @apps = App.all
  end

  def setup_target_select_item
    @appearances = Appearance.all
    @purposes = Purpose.all
    @jobs = Job.where.not(name: '未選択')
    @personalities = Personality.where.not(name: '未選択')
    @ages = 18..30
    @heights = 130..180
  end

  def target_params
    params.permit(:app_id, :appearance_id, :name, :age, :purpose_id, :job_id, :height, :hobby, :prefecture, :city, :personality_id, :single_history, :favorite_food).merge(user_id: @user.id)
  end

  def meta_url
    case params[:action]
    when 'new'
      @meta_url = 'targets/new'
      @meta_url_count = 0
    when 'show'
      @meta_url = "targets/#{params[:id]}"
      @meta_url_count = 0.7
    end
  end

  def essential_tasks
    @essential_task1 = Task.find_by(name: 'デート終了後、相手からメッセージが来る or 自分の送ったメッセージに返信が来る')
    @essential_task2 = Task.find_by(name: '次のデートのお誘いにOKを貰える or 次のデートに誘われる')
  end

  def select_prefecture_city_get
    # 都道府県を取得
    @ken_name_hash_array = Target.prefecture_get

    # 都道府県毎の市町村を取得
    ken_and_city_name_hash_array = Target.ken_and_city_name_hash_array_get
    prefectures_array = Target.prefectures_array_get
    prefectures_array.each.with_index(1) do |prefecture, i|
      city_name_array = []
      ken_and_city_name_hash_array.each.with_index(1) do |ken_and_city_name_hash, count|
        # @prefecture_1 => "北海道"
        # @each_city_name_array_1 => 「北海道」の市町村の配列

        # 都道府県の文字列
        instance_variable_set("@prefecture_#{i}", prefecture)

        # 市町村の配列
        city_name_array.push(ken_and_city_name_hash['city_name']) if ken_and_city_name_hash['ken_name'] == prefecture
        instance_variable_set("@each_city_name_array_#{i}", city_name_array) if ken_and_city_name_hash_array.size == count
      end
    end
  end
end
