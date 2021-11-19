# frozen_string_literal: true

FactoryBot.define do
  factory :app_purpose do
    app { create(:app) }
    purpose { create(:purpose) }
  end
end
