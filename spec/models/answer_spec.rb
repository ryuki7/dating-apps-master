# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Answer, type: :model do
  let(:answer) { build(:answer) }

  it 'description, allocation があり、question の関連付けが出来ている場合、有効である' do
    expect(answer).to be_valid
  end

  it 'description がない場合、無効である' do
    answer.description = nil
    answer.valid?
    expect(answer.errors[:description]).to include('を入力してください')
  end

  it 'allocation がない場合、無効である' do
    answer.allocation = nil
    answer.valid?
    expect(answer.errors[:allocation]).to include('を入力してください')
  end

  it 'question の関連付けが出来ていない場合、無効である' do
    answer.question_id = nil
    answer.valid?
    expect(answer.errors[:question]).to include('を入力してください')
  end
end
