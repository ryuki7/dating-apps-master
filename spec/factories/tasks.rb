FactoryBot.define do
  factory :task do
    sequence(:name) { |n| "task_name_#{n}" }
    point { 0 }
  end
end
