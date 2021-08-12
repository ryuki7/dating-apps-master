class UsersController < ApplicationController
  before_action :set_user, only: %i[my_page]
  require "net/http"
    
  def idtoken
    idtoken = params[:idtoken]
    params = { id_token: idtoken, client_id: 1656234930 }
    uri = URI.parse("https://api.line.me/oauth2/v2.1/verify")
    response_json = Net::HTTP.post_form(uri, params)
    response_ruby = JSON.parse(response_json.body)
    if response_ruby["sub"]     # IDトークンの対象ユーザーID
      @user = User.find_by(line_id: response_ruby["sub"])
      @user = User.create!(line_id: response_ruby["sub"], name: response_ruby["name"], role: 0) if @user.nil?
      session[:id] = @user.id
    end
  end

  def my_page
  end
  
  private

  def set_user
    @user = User.find(params[:id])
  end
  
end
