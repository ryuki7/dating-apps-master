class AppDiagnosticsController < ApplicationController

  def index; end

  def show; end

  def original_create
    AppDiagnostic.where(user_id: session[:user_id]).destroy_all
    allocation_all_values_array = params.permit(:allocation_1_1, :allocation_1_2, :allocation_2_1, :allocation_2_2, :allocation_2_3, :allocation_2_4, :allocation_3_1, :allocation_3_2, :allocation_3_3, :allocation_3_4, :allocation_3_5).values
    allocation_all_string = allocation_all_values_array.inject(:+)
    allocation_count_array_sort(allocation_all_string).each.with_index(1) do |a,i|
      case a
      when @c_count # tapple
        AppDiagnostic.create(app_id: 3, ranking: i, user_id: session[:user_id])
        @c_count = '済み'
        next
      when @b_count # with
        AppDiagnostic.create(app_id: 2, ranking: i, user_id: session[:user_id])
        @b_count = '済み'
        next
      when @d_count # Tinder
        AppDiagnostic.create(app_id: 4, ranking: i, user_id: session[:user_id])
        @d_count = '済み'
        next
      when @a_count # Pairs
        AppDiagnostic.create(app_id: 1, ranking: i, user_id: session[:user_id])
        @a_count = '済み'
        next
      end
    end
    redirect_to result_app_diagnostics_path
  end

  def result
    # idが若い順に取得する。(ランキング(順位)が高い順。)
    @app_diagnostics = AppDiagnostic.where(user_id: session[:user_id])
  end

  private

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
