require 'rails_helper'

RSpec.describe App, type: :model do
  let(:app) { build(:app) }

  it "name, strategy_description, icon_image, diagnostic_allocation, diagnostic_description がある場合、有効である" do
    expect(app).to be_valid
  end

  it "name がない場合、無効である" do
    app.name = nil
    app.valid?
    expect(app.errors[:name]).to include("を入力してください")
  end

  it "重複した name の場合、無効である" do
    app_1 = create(:app)
    app_2 = build(:app, name: app_1.name)
    app_2.valid?
    expect(app_2.errors[:name]).to include("はすでに存在します")
  end

  it "strategy_description がない場合、無効である" do
    app.strategy_description = nil
    app.valid?
    expect(app.errors[:strategy_description]).to include("を入力してください")
  end

  it "icon_image がない場合、無効である" do
    app.icon_image = nil
    app.valid?
    expect(app.errors[:icon_image]).to include("を入力してください")
  end

  it "diagnostic_allocation がない場合、無効である" do
    app.diagnostic_allocation = nil
    app.valid?
    expect(app.errors[:diagnostic_allocation]).to include("を入力してください")
  end

  it "重複した diagnostic_allocation の場合、無効である" do
    app_1 = create(:app)
    app_2 = build(:app, diagnostic_allocation: app_1.diagnostic_allocation)
    app_2.valid?
    expect(app_2.errors[:diagnostic_allocation]).to include("はすでに存在します")
  end

  it "diagnostic_description がない場合、無効である" do
    app.diagnostic_description = nil
    app.valid?
    expect(app.errors[:diagnostic_description]).to include("を入力してください")
  end
end
