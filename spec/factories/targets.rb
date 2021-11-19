# frozen_string_literal: true

FactoryBot.define do
  factory :target do
    sequence(:name) { |n| "target_name_#{n}" }
    favorability_rating { 0 }
    progress_rating { 0 }
    app { create(:app) }
    appearance { create(:appearance) }
    purpose { create(:purpose) }
    job { create(:job) }
    personality { create(:personality) }
    user { create(:user) }
  end
end
