# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Target, type: :model do
  let(:target) { build(:target) }

  it 'name, favorability_rating, progress_rating があり、app, appearance, purpose, job, personality, user の関連付けが出来ている場合、有効である' do
    expect(target).to be_valid
  end

  it 'name がない場合、無効である' do
    target.name = nil
    target.valid?
    expect(target.errors[:name]).to include('を入力してください')
  end

  it 'favorability_rating がない場合、無効である' do
    target.favorability_rating = nil
    target.valid?
    expect(target.errors[:favorability_rating]).to include('を入力してください')
  end

  it 'progress_rating がない場合、無効である' do
    target.progress_rating = nil
    target.valid?
    expect(target.errors[:progress_rating]).to include('を入力してください')
  end

  it 'app の関連付けが出来ていない場合、無効である' do
    target.app_id = nil
    target.valid?
    expect(target.errors[:app]).to include('を入力してください')
  end

  it 'appearance の関連付けが出来ていない場合、無効である' do
    target.appearance_id = nil
    target.valid?
    expect(target.errors[:appearance]).to include('を入力してください')
  end

  it 'purpose の関連付けが出来ていない場合、無効である' do
    target.purpose_id = nil
    target.valid?
    expect(target.errors[:purpose]).to include('を入力してください')
  end

  it 'job の関連付けが出来ていない場合、無効である' do
    target.job_id = nil
    target.valid?
    expect(target.errors[:job]).to include('を入力してください')
  end

  it 'personality の関連付けが出来ていない場合、無効である' do
    target.personality_id = nil
    target.valid?
    expect(target.errors[:personality]).to include('を入力してください')
  end

  it 'user の関連付けが出来ていない場合、無効である' do
    target.user_id = nil
    target.valid?
    expect(target.errors[:user]).to include('を入力してください')
  end
end
