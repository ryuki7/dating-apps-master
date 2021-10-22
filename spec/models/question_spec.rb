require 'rails_helper'

RSpec.describe Question, type: :model do
  let(:question) { build(:question) }

  it "description がある場合、有効である" do
    expect(question).to be_valid
  end

  it "description がない場合、無効である" do
    question.description = nil
    question.valid?
    expect(question.errors[:description]).to include("を入力してください")
  end
end
