require 'rails_helper'

RSpec.describe Personality, type: :model do
  let(:personality) { build(:personality) }

  it "name がある場合、有効である" do
    expect(personality).to be_valid
  end

  it "name がない場合、無効である" do
    personality.name = nil
    personality.valid?
    expect(personality.errors[:name]).to include("を入力してください")
  end
end
