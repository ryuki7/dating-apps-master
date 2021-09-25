class TargetsController < ApplicationController
  def new
    @apps = App.all
    @ages = 18..30
    @purposes = Purpose.all
    # @jobs = Job.all
    @heights = 130..180

    # 都道府県
    sql_ken_name = 'SELECT DISTINCT ken_name FROM ad_address'
    active_record_ken_name = ActiveRecord::Base.connection.select_all(sql_ken_name)
    @ken_name_hash_array = active_record_ken_name.to_a

    # 市町村
    sql_ken_and_city_name = 'SELECT DISTINCT ken_name,city_name FROM ad_address'
    active_record_ken_and_city_name = ActiveRecord::Base.connection.select_all(sql_ken_and_city_name)
    @ken_and_city_name_hash_array = active_record_ken_and_city_name.to_a
    prefectures_array.each do |prefecture|
      @ken_and_city_name_hash_array.each.with_index(1) do |ken_and_city_name_hash, i|
        @ if ken_and_city_name_hash["ken_name"] == prefecture
      end
    end
  end

  def create
  end

  def index
  end

  def show
  end
end
