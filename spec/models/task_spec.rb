# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Task, type: :model do
  let(:task) { build(:task) }

  it 'name、point がある場合、有効である' do
    expect(task).to be_valid
  end

  it 'name がない場合、無効である' do
    task.name = nil
    task.valid?
    expect(task.errors[:name]).to include('を入力してください')
  end

  it '重複した name の場合、無効である' do
    task1 = create(:task)
    task2 = build(:task, name: task1.name)
    task2.valid?
    expect(task2.errors[:name]).to include('はすでに存在します')
  end

  it 'point がない場合、無効である' do
    task.point = nil
    task.valid?
    expect(task.errors[:point]).to include('を入力してください')
  end
end
