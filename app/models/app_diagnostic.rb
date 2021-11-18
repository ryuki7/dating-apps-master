class AppDiagnostic < ApplicationRecord
  belongs_to :app
  belongs_to :user

  class << AppDiagnostic
    def diagnostic_result_calclate(allocation_all_string, apps, user)
      allocation_count_array_sort(allocation_all_string).each.with_index(1) do |app_count, i|
        case app_count
        when @c_count # tapple
          AppDiagnostic.create!(app_id: apps.find_by(diagnostic_allocation: "c").id, ranking: i, user_id: user.id)
          @c_count = '済み'
        when @b_count # with
          AppDiagnostic.create!(app_id: apps.find_by(diagnostic_allocation: "b").id, ranking: i, user_id: user.id)
          @b_count = '済み'
        when @a_count # Pairs
          AppDiagnostic.create!(app_id: apps.find_by(diagnostic_allocation: "a").id, ranking: i, user_id: user.id)
          @a_count = '済み'
        when @d_count # Tinder
          AppDiagnostic.create!(app_id: apps.find_by(diagnostic_allocation: "d").id, ranking: i, user_id: user.id)
          @d_count = '済み'
        end
      end
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
end
