require 'rails_helper'

RSpec.describe Step, type: :model do
  let(:step) { build(:step) }

  it "name, description, description_point があり、purpose の関連付けが出来ている場合、有効である" do
    expect(step).to be_valid
  end

  it "name がない場合、無効である" do
    step.name = nil
    step.valid?
    expect(step.errors[:name]).to include("を入力してください")
  end

  it "description がない場合、無効である" do
    step.description = nil
    step.valid?
    expect(step.errors[:description]).to include("を入力してください")
  end

  it "description_point がない場合、無効である" do
    step.description_point = nil
    step.valid?
    expect(step.errors[:description_point]).to include("を入力してください")
  end

  it "purpose の関連付けが出来ていない場合、無効である" do
    step.purpose_id = nil
    step.valid?
    expect(step.errors[:purpose]).to include("を入力してください")
  end
end
