FactoryBot.define do
  factory :app_purpose do
    app { create(:app) }
    purpose { create(:purpose) }
  end
end
