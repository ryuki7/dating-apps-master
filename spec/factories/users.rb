FactoryBot.define do
  factory :user do
    sequence(:line_id) { |n| "line_id_#{n}" }
    role { 0 }
    popular_rating { 0 }
  end
end
