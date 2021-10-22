FactoryBot.define do
  factory :date_plan do
    name {"date_plan_name"}
    period {"昼デート"}
    detail_information {"date_plan_detail_information"}
    description {"date_plan_description"}
    date_count_level {0}
    popular_rating_level {0}
    purpose { create(:purpose) }
  end
end
