# frozen_string_literal: true

FactoryBot.define do
  factory :date_plan_place do
    date_plan { create(:date_plan) }
    place { create(:place) }
  end
end
