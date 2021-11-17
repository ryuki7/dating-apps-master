FactoryBot.define do
  factory :date_schedule_task do
    result { "date_schedule_task_result" }
    task { create(:task) }
    date_schedule { create(:date_schedule) }
  end
end
