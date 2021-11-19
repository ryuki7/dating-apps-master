# frozen_string_literal: true

require 'rails_helper'

RSpec.describe DatePlanPlace, type: :model do
  let(:date_plan_place) { build(:date_plan_place) }

  it 'date_plan, place の関連付けが出来ている場合、有効である' do
    expect(date_plan_place).to be_valid
  end

  it 'date_plan の関連付けが出来ていない場合、無効である' do
    date_plan_place.date_plan_id = nil
    date_plan_place.valid?
    expect(date_plan_place.errors[:date_plan]).to include('を入力してください')
  end

  it 'place の関連付けが出来ていない場合、無効である' do
    date_plan_place.place_id = nil
    date_plan_place.valid?
    expect(date_plan_place.errors[:place]).to include('を入力してください')
  end
end
