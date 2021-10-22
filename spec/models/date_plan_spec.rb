require 'rails_helper'

RSpec.describe DatePlan, type: :model do
  let(:date_plan) { build(:date_plan) }

  it "name, period, detail_information, description, date_count_level, popular_rating_level があり、purpose の関連付けが出来ている場合、有効である" do
    expect(date_plan).to be_valid
  end
  
  it "name がない場合、無効である" do
    date_plan.name = nil
    date_plan.valid?
    expect(date_plan.errors[:name]).to include("を入力してください")
  end

  it "period がない場合、無効である" do
    date_plan.period = nil
    date_plan.valid?
    expect(date_plan.errors[:period]).to include("を入力してください")
  end

  it "detail_information がない場合、無効である" do
    date_plan.detail_information = nil
    date_plan.valid?
    expect(date_plan.errors[:detail_information]).to include("を入力してください")
  end

  it "description がない場合、無効である" do
    date_plan.description = nil
    date_plan.valid?
    expect(date_plan.errors[:description]).to include("を入力してください")
  end

  it "date_count_level がない場合、無効である" do
    date_plan.date_count_level = nil
    date_plan.valid?
    expect(date_plan.errors[:date_count_level]).to include("を入力してください")
  end

  it "popular_rating_level がない場合、無効である" do
    date_plan.popular_rating_level = nil
    date_plan.valid?
    expect(date_plan.errors[:popular_rating_level]).to include("を入力してください")
  end

  it "purpose の関連付けが出来ていない場合、無情である" do
    date_plan.purpose_id = nil
    date_plan.valid?
    expect(date_plan.errors[:purpose]).to include("を入力してください")
  end
end
