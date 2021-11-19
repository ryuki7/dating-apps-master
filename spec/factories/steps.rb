# frozen_string_literal: true

FactoryBot.define do
  factory :step do
    name { 'step_name' }
    description { 'step_description' }
    description_point { 'step_description_point' }
    purpose { create(:purpose) }
  end
end
