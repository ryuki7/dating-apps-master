class User < ApplicationRecord
  has_many :app_diagnostics, dependent: :destroy
  has_many :targets, dependent: :destroy
  has_many :date_schedules, dependent: :destroy

  validates :line_id, presence: true, uniqueness: true
  validates :role, presence: true
  validates :popular_rating, presence: true

  def create_popular_rating(targets_all, date_schedules_reported_all)
    targets_all_favorability_rating_and_progress_rating = 0
    targets_all.each do |target|
      targets_all_favorability_rating_and_progress_rating = targets_all_favorability_rating_and_progress_rating + target.favorability_rating + target.progress_rating
    end
    targets_all_favorability_rating_and_progress_rating_3_division = targets_all_favorability_rating_and_progress_rating / 3

    # デートした「女性の人数」(同じ女性と複数回デートしても、1回としてカウントする)
    date_schedule_reported_target_id_array_duplicate = date_schedules_reported_all.map { |date_schedule_reported| date_schedule_reported.target.id }
    date_schedule_reported_target_id_array_duplicate_none = date_schedule_reported_target_id_array_duplicate.uniq

    popular_rating = targets_all_favorability_rating_and_progress_rating_3_division / date_schedule_reported_target_id_array_duplicate_none.size + date_schedule_reported_target_id_array_duplicate_none.size
    self.popular_rating = popular_rating
    save!
  end
end
