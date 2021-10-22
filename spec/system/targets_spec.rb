require 'rails_helper'

RSpec.describe "Targets", type: :system do
  let(:user) { create(:user) }

  before { login(user) }

  describe "女性一覧" do
    it "女性登録したら、女性一覧が増える(登録した女性が、女性一覧に表示される)" do
      # 女性一覧ページに遷移する
      visit targets_path
      # 登録予定の女性が表示されていないことを確認
      expect(page).to_not have_content "system_test_target"
      # 女性登録をする
      create(:target, name: "system_test_target", user_id: user.id)
      # 女性一覧ページに遷移する
      visit targets_path
      expect(page).to have_content '女性一覧'
      # 登録した女性が表示されていることを確認
      expect(page).to have_content "system_test_target"
    end
  end
end
