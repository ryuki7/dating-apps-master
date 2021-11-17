FactoryBot.define do
  factory :app do
    sequence(:name) { |n| "Pairs（ペアーズ）_#{n}" }
    strategy_description { "app_strategy_description" }
    icon_image { "Pairs60R.png" }
    sequence(:diagnostic_allocation) { |n| "app_diagnostic_allocation_#{n}" }
    diagnostic_description { "app_diagnostic_description" }
  end
end
