class DateSchedule < ApplicationRecord
  has_many :date_schedule_tasks, dependent: :destroy

  belongs_to :date_plan
  belongs_to :target
  belongs_to :user

  validates :appointment, presence: true
  validates :report_confirmation, presence: true

  enum report_confirmation: { unreported: 0, reported: 1 }

  class << DateSchedule
    def date_count(date_schedules_all, date_schedule_specific)
      date_schedules_all.each.with_index(1) do |date_schedule, i|
        return i if date_schedule.id == date_schedule_specific.id
      end
    end

    def date_schedules_unreported_passed_array(date_schedules_unreported_all)
      date_schedules_unreported_passed_array = []
      date_schedules_unreported_all.each do |date_schedule_unreported|
        date_schedule_unreported_appointment = date_schedule_unreported.appointment_date_class_create
        date_schedules_unreported_passed_array.push(date_schedule_unreported) if date_schedule_unreported_appointment <= Time.zone.today
      end
      date_schedules_unreported_passed_array
    end

    def recommend_date_appointment_array(date_schedules_reported_last)
      # Dateクラスのフォーマットに変換
      date_schedule_reported_last_appointment = date_schedules_reported_last.appointment_date_class_create
      # 5日後
      recommend_5days_since = date_schedule_reported_last_appointment.days_since(5).strftime("%m/%d")
      # 14日後
      recommend_14days_since = date_schedule_reported_last_appointment.days_since(14).strftime("%m/%d")
      [recommend_5days_since, recommend_14days_since]
    end

    def recommend_date_plan(date_schedules_reported_all, user, target)
      date_count = date_schedules_reported_all.size + 1
      # 条件に当てはまりそうな date_plan を複数取得する。
      date_plans_recommend_before_revise = DatePlan.where("date_count_level <= ? and popular_rating_level <= ? and purpose_id = ?", date_count, user.popular_rating, target.purpose.id)
      # 計算した値の絶対値が一番小さい場合の date_plan を1つ取得する。
      date_plans_recommend_before_revise.min_by { |date_plan| (user.popular_rating - date_plan.popular_rating_level).abs } if date_plans_recommend_before_revise.present?
    end
  end

  def appointment_date_class_create
    split_blank_array = appointment.split
    split_month_and_day = split_blank_array[1].split("月")
    appointment_str = "#{split_blank_array[0].gsub(/[^\d]/, '')}-#{split_month_and_day[0]}-#{split_month_and_day[1].gsub(/[^\d]/, '')}"
    Date.parse(appointment_str)
  end

  def fail_tasks_id_array_get
    fail_tasks_id_array = []
    date_schedule_tasks.each do |date_schedule_task|
      fail_tasks_id_array.push(date_schedule_task.task.id) if date_schedule_task.fail? || date_schedule_task.not_implement?
    end
    fail_tasks_id_array
  end
end
