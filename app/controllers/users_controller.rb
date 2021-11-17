class UsersController < ApplicationController
  require "net/http"
  layout 'layout_my_page', only: %i[my_page]
  before_action :set_user, only: %i[index destroy my_page]
  before_action :admin_check, only: %i[index destroy]
  skip_before_action :login_check, only: %i[create]

  def create
    # ユーザーの作成・ログイン
    idToken = params[:idToken]
    channelId = ENV['CHANNEL_ID']
    params = { id_token: idToken, client_id: channelId }
    uri = URI.parse("https://api.line.me/oauth2/v2.1/verify")
    response_json = Net::HTTP.post_form(uri, params)
    line_id = JSON.parse(response_json.body)["sub"]
    line_name = JSON.parse(response_json.body)["name"]
    if line_id # IDトークンの対象ユーザーID
      @user = User.find_by(line_id: line_id)
      @user = User.create!(line_id: line_id, name: line_name, role: 0) if @user.nil?
      session[:user_id] = @user.id
    else
      # render しなくてもステータスコードを返す
      render status: :internal_server_error
    end
  end

  def index
    @users_all = User.all
    @users_all_pagination = User.all.page(params[:page]).per(7)
  end

  def destroy
    @user.destroy!
  end

  def my_page
    @date_count_all = DateSchedule.reported.where(user_id: @user.id)
    @task_kiss = Task.find_by(name: "キスをする")
    @date_schedules = DateSchedule.reported.where(user_id: @user.id)
    @date_schedule_tasks_kiss = []
    @date_schedule_tasks_kiss = DateScheduleTask.success.where(task_id: @task_kiss.id, date_schedule_id: @date_schedules.map(&:id)) if @date_schedules.present?
  end

  # skip_before_action :login_check, only: %i[create system_spec_login] にする。(system_spec_login を追加する。)
  # def system_spec_login
    # @user = User.find(params[:id])
    # session[:user_id] = @user.id
  # end

  private

  def set_user
    @user = User.find(session[:user_id])
  end

  def admin_check
    redirect_to my_page_users_path if @user.role == 0
  end
end
