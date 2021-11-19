# frozen_string_literal: true

FactoryBot.define do
  factory :app_diagnostic do
    app { create(:app) }
    user { create(:user) }
  end
end
