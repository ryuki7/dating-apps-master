FactoryBot.define do
  factory :answer do
    description {"answer_description"}
    allocation {"answer_allocation"}
    question { create(:question) }
  end
end
