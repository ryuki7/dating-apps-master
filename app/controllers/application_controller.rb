class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  require 'date'
  layout :determine_layout
  before_action :login_check
  skip_before_action :login_check, only: %i[before_my_page terms privacy guide richmenu_guide]

  def before_my_page; end

  def terms; end

  def privacy; end

  def guide; end

  def richmenu_guide; end

  private

  def determine_layout
    case action_name
    when 'before_my_page'
      'before'
    when 'terms'
      'terms_and_privacy'
    when 'privacy'
      'terms_and_privacy'
    when 'guide'
      'layout_guide'
    when 'richmenu_guide'
      'layout_guide'
    end
  end

  def login_check
    if session[:user_id] == nil
      redirect_to before_my_page_path
    end
  end
end
