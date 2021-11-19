# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Place, type: :model do
  let(:place) { build(:place) }

  it 'name がある場合、有効である' do
    expect(place).to be_valid
  end

  it 'name がない場合、無効である' do
    place.name = nil
    place.valid?
    expect(place.errors[:name]).to include('を入力してください')
  end
end
