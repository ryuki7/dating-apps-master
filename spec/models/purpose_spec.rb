# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Purpose, type: :model do
  let(:purpose) { build(:purpose) }

  it 'name がある場合、有効である' do
    expect(purpose).to be_valid
  end

  it 'name がない場合、無効である' do
    purpose.name = nil
    purpose.valid?
    expect(purpose.errors[:name]).to include('を入力してください')
  end
end
