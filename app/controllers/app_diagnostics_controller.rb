# frozen_string_literal: true

class AppDiagnosticsController < ApplicationController
  layout 'redirect_application', only: %i[show result]
  before_action :set_user, only: %i[original_create result]
  before_action :set_apps, only: %i[index original_create]
  before_action :set_question, only: %i[show]
  before_action :set_answer, only: %i[show]
  before_action :meta_url, only: %i[show result]

  def index; end

  def show
    @question_description_split_array = @question.description.split('.')
  end

  def original_create
    AppDiagnostic.where(user_id: @user.id).destroy_all
    allocation_all_values_array = params.permit(:allocation_1_1, :allocation_1_2, :allocation_2_1, :allocation_2_2, :allocation_2_3, :allocation_2_4, :allocation_3_1, :allocation_3_2, :allocation_3_3, :allocation_3_4, :allocation_3_5).values
    # 一つの文字列として連結する
    allocation_all_string = allocation_all_values_array.inject(:+)
    AppDiagnostic.diagnostic_result_calclate(allocation_all_string, @apps, @user)
    redirect_to result_app_diagnostics_path
  end

  def result
    # ランキングが高い(若い)順に AppDiagnostic を取得する。
    @app_diagnostics = AppDiagnostic.where(user_id: @user.id).order('ranking ASC')
    # まだ診断をしていない場合は、診断ページに遷移する。
    redirect_to app_diagnostics_path if @app_diagnostics.blank?
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end

  def set_apps
    @apps = App.all
  end

  def set_question
    @question = Question.find(params[:id])
  end

  def set_answer
    @answers = Answer.where(question_id: params[:id])
  end

  def meta_url
    if params[:action] == 'show' && params[:id] == '1'
      @meta_url = "app_diagnostics/#{params[:id]}"
      @meta_url_count = 0.5
    elsif params[:action] == 'result'
      @meta_url = 'app_diagnostics/result'
      @meta_url_count = 0
    end
  end
end
