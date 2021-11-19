# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { build(:user) }

  it 'line_id、role、popular_rating がある場合、有効である' do
    expect(user).to be_valid
  end

  it 'line_id がない場合、無効である' do
    user.line_id = nil
    user.valid?
    expect(user.errors[:line_id]).to include('を入力してください')
  end

  it '重複した line_id の場合、無効である' do
    user1 = create(:user)
    user2 = build(:user, line_id: user1.line_id)
    user2.valid?
    expect(user2.errors[:line_id]).to include('はすでに存在します')
  end

  it 'role がない場合、無効である' do
    user.role = nil
    user.valid?
    expect(user.errors[:role]).to include('を入力してください')
  end

  it 'popular_rating がない場合、無効である' do
    user.popular_rating = nil
    user.valid?
    expect(user.errors[:popular_rating]).to include('を入力してください')
  end
end
