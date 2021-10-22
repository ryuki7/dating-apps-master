require 'rails_helper'

RSpec.describe AppPurpose, type: :model do
  let(:app_purpose) { build(:app_purpose) }

  it "app, purpose の関連付けが出来ている場合、有効である" do
    expect(app_purpose).to be_valid
  end

  it "app の関連付けが出来ていない場合、無効である" do
    app_purpose.app_id = nil?
    app_purpose.valid?
    expect(app_purpose.errors[:app]).to include("を入力してください")
  end

  it "purpose の関連付けが出来ていない場合、無効である" do
    app_purpose.purpose_id = nil?
    app_purpose.valid?
    expect(app_purpose.errors[:purpose]).to include("を入力してください")
  end
end
