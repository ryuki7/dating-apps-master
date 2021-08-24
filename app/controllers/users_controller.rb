class UsersController < ApplicationController
  before_action :set_user, only: %i[my_page]
  require "net/http"

  def create
    # ユーザーを作成・ログインする
    idToken = params[:idToken]
    channelId = ENV['CHANNEL_ID']
    params = { id_token: idToken, client_id: channelId }
    uri = URI.parse("https://api.line.me/oauth2/v2.1/verify")
    response_json = Net::HTTP.post_form(uri, params)
    line_id = JSON.parse(response_json.body)["sub"]
    line_name = JSON.parse(response_json.body)["name"]
    if line_id    # IDトークンの対象ユーザーID
      @user = User.find_by(line_id: line_id)
      @user = User.create!(line_id: line_id, name: line_name, role: 0) if @user.nil?
      session[:user_id] = @user.id
    else 
      render status: 500
    end
  end

  def my_page; end
  
  private

  def set_user
    @user = User.find(params[:id])
  end

end
