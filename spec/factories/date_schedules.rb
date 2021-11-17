FactoryBot.define do
  factory :date_schedule do
    appointment { "2021年 10月18日" }
    report_confirmation { 0 }
    date_plan { create(:date_plan) }
    target { create(:target) }
    user { create(:user) }
  end
end
