class AppDiagnosticsController < ApplicationController
  layout 'redirect_application', only: %i[show result]
  before_action :set_question, only: %i[show]
  before_action :set_answer, only: %i[show]

  def index
    @apps = App.all
  end

  def show
    if params[:id] == "1"
      @meta_url = "app_diagnostics/#{params[:id]}"
      @meta_url_count = 0.5
    end
    @question_description_split_array = @question.description.split('.')
  end

  def original_create
    AppDiagnostic.where(user_id: session[:user_id]).destroy_all
    allocation_all_values_array = params.permit(:allocation_1_1, :allocation_1_2, :allocation_2_1, :allocation_2_2, :allocation_2_3, :allocation_2_4, :allocation_3_1, :allocation_3_2, :allocation_3_3, :allocation_3_4, :allocation_3_5).values
    allocation_all_string = allocation_all_values_array.inject(:+)
    allocation_count_array_sort(allocation_all_string).each.with_index(1) do |app_count, i|
      case app_count
      when @c_count # tapple
        AppDiagnostic.create(app_id: 3, ranking: i, user_id: session[:user_id])
        @c_count = '済み'
        next
      when @b_count # with
        AppDiagnostic.create(app_id: 2, ranking: i, user_id: session[:user_id])
        @b_count = '済み'
        next
      when @a_count # Pairs
        AppDiagnostic.create(app_id: 1, ranking: i, user_id: session[:user_id])
        @a_count = '済み'
        next
      when @d_count # Tinder
        AppDiagnostic.create(app_id: 4, ranking: i, user_id: session[:user_id])
        @d_count = '済み'
        next
      end
    end
    redirect_to result_app_diagnostics_path
  end

  def result
    @meta_url = "app_diagnostics/result"
    @meta_url_count = 0
    # idが若い順に取得する。(ランキング(順位)が高い順。)
    @app_diagnostics = AppDiagnostic.where(user_id: session[:user_id])
    redirect_to app_diagnostics_path if @app_diagnostics.blank?
  end

  private

  def set_question
    @question = Question.find(params[:id])
  end

  def set_answer
    @answers = Answer.where(question_id: params[:id])
  end

  # allocationの値(a,b,c,d)をそれぞれカウントして、配列で大きい数字(カウント数)順に並べる。
  def allocation_count_array_sort(allocation_all_string)
    @a_count = allocation_all_string.scan('a').length
    @b_count = allocation_all_string.scan('b').length
    @c_count = allocation_all_string.scan('c').length
    @d_count = allocation_all_string.scan('d').length
    ranking_array = []
    ranking_array.push(@a_count, @b_count, @c_count, @d_count)
    ranking_array.sort.reverse
  end
end
