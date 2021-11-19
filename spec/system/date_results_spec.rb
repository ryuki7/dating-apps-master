# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'DateResults', type: :system do
  let(:user) { create(:user) }

  before { login(user) }

  describe 'デート結果報告履歴一覧' do
    it 'デート結果報告したら、デート結果履歴が増える(登録したデート結果が、デート結果報告履歴一覧に表示される)' do
      # デート結果一覧ページに遷移する
      visit date_results_path
      # 報告予定のデート結果が表示されていないことを確認
      expect(page).not_to have_content '12/09'
      # デート結果を報告する(report_confirmation = 1)
      create(:date_schedule, appointment: '2020年 12月09日', report_confirmation: 1, user_id: user.id)
      # デート結果一覧ページに遷移する
      visit date_results_path
      expect(page).to have_content 'デート結果履歴一覧'
      # 報告したデート結果が表示されていることを確認
      expect(page).to have_content '12/09'
    end
  end
end
