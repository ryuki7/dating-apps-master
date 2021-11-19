# frozen_string_literal: true

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
    layout_type = {
      'before_my_page' => 'before',
      'terms' => 'terms_and_privacy',
      'privacy' => 'terms_and_privacy',
      'guide' => 'layout_guide',
      'richmenu_guide' => 'layout_guide'
    }

    layout_type[action_name]
  end

  def login_check
    redirect_to before_my_page_path if session[:user_id].nil?
  end
end
