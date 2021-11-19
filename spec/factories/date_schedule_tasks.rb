# frozen_string_literal: true

FactoryBot.define do
  factory :date_schedule_task do
    result { 0 }
    task { create(:task) }
    date_schedule { create(:date_schedule) }
  end
end
