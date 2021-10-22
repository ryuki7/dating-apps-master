require 'rails_helper'

RSpec.describe DateScheduleTask, type: :model do
  let(:date_schedule_task) { build(:date_schedule_task) }

  it "result があり、task, date_schedule の関連付けが出来ている場合、有効である" do
    expect(date_schedule_task).to be_valid
  end

  it "result がない場合、無効である" do
    date_schedule_task.result = nil
    date_schedule_task.valid?
    expect(date_schedule_task.errors[:result]).to include("を入力してください")
  end

  it "task の関連付けが出来ていない場合、無効である" do
    date_schedule_task.task_id = nil
    date_schedule_task.valid?
    expect(date_schedule_task.errors[:task]).to include("を入力してください")
  end

  it "date_schedule の関連付けが出来ていない場合、無効である" do
    date_schedule_task.date_schedule_id = nil
    date_schedule_task.valid?
    expect(date_schedule_task.errors[:date_schedule]).to include("を入力してください")
  end
end
