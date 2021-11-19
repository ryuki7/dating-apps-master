# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Job, type: :model do
  let(:job) { build(:job) }

  it 'name がある場合、有効である' do
    expect(job).to be_valid
  end

  it 'name がない場合、無効である' do
    job.name = nil
    job.valid?
    expect(job.errors[:name]).to include('を入力してください')
  end
end
