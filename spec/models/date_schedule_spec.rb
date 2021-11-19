# frozen_string_literal: true

require 'rails_helper'

RSpec.describe DateSchedule, type: :model do
  let(:date_schedule) { build(:date_schedule) }

  it 'appointment, report_confirmation があり、date_plan, target, user の関連付けが出来ている場合、有効である' do
    expect(date_schedule).to be_valid
  end

  it 'appointment がない場合、無効である' do
    date_schedule.appointment = nil
    date_schedule.valid?
    expect(date_schedule.errors[:appointment]).to include('を入力してください')
  end

  it 'report_confirmation がない場合、無効である' do
    date_schedule.report_confirmation = nil
    date_schedule.valid?
    expect(date_schedule.errors[:report_confirmation]).to include('を入力してください')
  end

  it 'date_plan の関連付けが出来ていない場合、無効である' do
    date_schedule.date_plan_id = nil
    date_schedule.valid?
    expect(date_schedule.errors[:date_plan]).to include('を入力してください')
  end

  it 'target の関連付けが出来ていない場合、無効である' do
    date_schedule.target_id = nil
    date_schedule.valid?
    expect(date_schedule.errors[:target]).to include('を入力してください')
  end

  it 'user の関連付けが出来ていない場合、無効である' do
    date_schedule.user_id = nil
    date_schedule.valid?
    expect(date_schedule.errors[:user]).to include('を入力してください')
  end
end
