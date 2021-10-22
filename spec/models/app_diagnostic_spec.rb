require 'rails_helper'

RSpec.describe AppDiagnostic, type: :model do
  let(:app_diagnostic) { build(:app_diagnostic) }

  it "app, user の関連付けが出来ている場合、有効である" do
    expect(app_diagnostic).to be_valid
  end

  it "app の関連付けが出来ていない場合、無効である" do
    app_diagnostic.app_id = nil
    app_diagnostic.valid?
    expect(app_diagnostic.errors[:app]).to include("を入力してください")
  end

  it "user の関連付けが出来ていない場合、無効である" do
    app_diagnostic.user_id = nil
    app_diagnostic.valid?
    expect(app_diagnostic.errors[:user]).to include("を入力してください")
  end
end
