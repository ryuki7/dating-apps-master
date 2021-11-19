# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Appearance, type: :model do
  let(:appearance) { build(:appearance) }

  it 'name, image がある場合、有効である' do
    expect(appearance).to be_valid
  end

  it 'name がない場合、無効である' do
    appearance.name = nil
    appearance.valid?
    expect(appearance.errors[:name]).to include('を入力してください')
  end

  it 'image がない場合、無効である' do
    appearance.image = nil
    appearance.valid?
    expect(appearance.errors[:image]).to include('を入力してください')
  end
end
