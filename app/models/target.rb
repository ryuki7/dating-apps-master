# frozen_string_literal: true

class Target < ApplicationRecord
  belongs_to :app
  belongs_to :appearance
  belongs_to :purpose
  belongs_to :job
  belongs_to :personality
  belongs_to :user

  has_many :date_schedules, dependent: :destroy

  validates :name, presence: true, length: { maximum: 4 }
  validates :favorability_rating, presence: true
  validates :progress_rating, presence: true

  class << Target
    def prefecture_get
      sql_ken_name = 'SELECT DISTINCT ken_name FROM ad_address'
      active_record_ken_name = ActiveRecord::Base.connection.select_all(sql_ken_name)
      active_record_ken_name.to_a
    end

    def ken_and_city_name_hash_array_get
      sql_ken_and_city_name = 'SELECT DISTINCT ken_name,city_name FROM ad_address'
      active_record_ken_and_city_name = ActiveRecord::Base.connection.select_all(sql_ken_and_city_name)
      active_record_ken_and_city_name.to_a
    end

    def prefectures_array_get
      %w[北海道 青森県 岩手県 宮城県 秋田県 山形県 福島県 茨城県 栃木県 群馬県 埼玉県 千葉県 東京都 神奈川県 新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県 三重県 滋賀県 京都府 大阪府 兵庫県 奈良県 和歌山県 鳥取県 島根県 岡山県 広島県 山口県 徳島県 香川県 愛媛県 高知県 福岡県 佐賀県 長崎県 熊本県 大分県 宮崎県 鹿児島県 沖縄県]
    end

    def date_count_calculate_favorability_rating(favorability_rating, date_count_integer, date_schedule_essential_task1, date_schedule_essential_task2)
      case date_count_integer
      when 1
        favorability_rating = 30
        favorability_rating += 15 if date_schedule_essential_task2.success?
        favorability_rating += 5 if date_schedule_essential_task1.success?
      else
        favorability_rating += 10 if date_schedule_essential_task2.success?
      end
      favorability_rating
    end

    def date_count_calculate_progress_rating(date_count_integer)
      case date_count_integer
      when 1
        20
      when 2
        8
      when 3
        2
      when 4
        2
      end
    end
  end

  def create_favorability_rating(date_count_integer, date_task_point_total, date_schedule, essential_task1, essential_task2)
    favorability_rating = 0
    date_schedule_essential_task1 = DateScheduleTask.find_by(date_schedule_id: date_schedule.id, task_id: essential_task1.id)
    date_schedule_essential_task2 = DateScheduleTask.find_by(date_schedule_id: date_schedule.id, task_id: essential_task2.id)

    favorability_rating = Target.date_count_calculate_favorability_rating(favorability_rating, date_count_integer, date_schedule_essential_task1, date_schedule_essential_task2) if date_count_integer < 4
    favorability_rating -= 15 if date_schedule_essential_task1.fail? || date_schedule_essential_task1.not_implement?
    favorability_rating -= 5 if date_schedule_essential_task2.fail? || date_schedule_essential_task2.not_implement?

    favorability_rating += date_task_point_total / 2.5
    self.favorability_rating += favorability_rating

    # 好感度(favorability_rating)は、MAXで100%とする
    self.favorability_rating = 100 if self.favorability_rating >= 100
    save!
  end

  def create_progress_rating(date_count_integer, date_task_point_total)
    progress_rating = 0
    progress_rating = Target.date_count_calculate_progress_rating(date_count_integer) if date_count_integer < 5
    progress_rating += date_task_point_total
    self.progress_rating += progress_rating

    # 進展度(progress_rating)は、MAXで100%とする
    self.progress_rating = 100 if self.progress_rating >= 100
    save!
  end

  def update_params_discrimination(params)
    update_params_column_all = Target.column_names.map(&:to_sym) - %i[id created_at updated_at]
    default_1_column_symbol_array = %i[job_id personality_id]
    default_0_column_symbol_array = update_params_column_all - default_1_column_symbol_array

    # 未選択の値が"0"の項目で未選択の場合、元の情報をそのまま保存されるようにする。(更新しないと元の情報も保存されない為。)
    default_0_column_symbol_array.each do |column_symbol|
      params[column_symbol] = params["#{column_symbol}_before_edit".to_sym] if params[column_symbol] == '0'
    end

    # 未選択の値が"1"の項目で未選択の場合、元の情報をそのまま保存されるようにする。(更新しないと元の情報も保存されない為。)
    default_1_column_symbol_array.each do |column_symbol|
      params[column_symbol] = params["#{column_symbol}_before_edit".to_sym] if params[column_symbol] == '1'
    end

    update!(params.permit(update_params_column_all))
  end
end
