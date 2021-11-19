# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Users', type: :system do
  let(:user) { create(:user) }

  describe 'ページ遷移確認(管理者 or ユーザー)' do
    before { login(user) }

    describe 'ユーザー一覧ページへアクセスする' do
      context '管理者' do
        it 'ユーザー一覧ページへ遷移する' do
          user.role = 1
          user.save!
          visit users_path
          expect(page).to have_current_path users_path, ignore_query: true
          expect(page).to have_content 'ユーザー一覧'
        end
      end

      context 'ユーザー' do
        it 'マイページへ遷移する' do
          user.role = 0
          user.save!
          visit users_path
          expect(page).to have_current_path my_page_users_path, ignore_query: true
        end
      end
    end
  end
end
