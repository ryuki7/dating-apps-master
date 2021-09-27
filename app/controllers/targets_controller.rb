class TargetsController < ApplicationController
  def new
    @apps = App.all
    @ages = 18..30
    @purposes = Purpose.all
    @jobs = Job.all
    @heights = 130..180
    @personalities = Personalitie.all

    # 都道府県
    sql_ken_name = 'SELECT DISTINCT ken_name FROM ad_address'
    active_record_ken_name = ActiveRecord::Base.connection.select_all(sql_ken_name)
    @ken_name_hash_array = active_record_ken_name.to_a

    # 市町村
    sql_ken_and_city_name = 'SELECT DISTINCT ken_name,city_name FROM ad_address'
    active_record_ken_and_city_name = ActiveRecord::Base.connection.select_all(sql_ken_and_city_name)
    @ken_and_city_name_hash_array = active_record_ken_and_city_name.to_a
    prefectures_array.each.with_index(1) do |prefecture, i|
      array = []
      @ken_and_city_name_hash_array.each.with_index(1) do |ken_and_city_name_hash, count|
        # @prefecture_1 => "北海道"
        # @each_city_name_array_1 => 「北海道」の市町村の配列

        # 都道府県の文字列
        instance_variable_set('@prefecture_' + i.to_s, prefecture)
  
        # 市町村の配列
        array.push(ken_and_city_name_hash["city_name"]) if ken_and_city_name_hash["ken_name"] == prefecture
        if @ken_and_city_name_hash_array.size == count
          instance_variable_set('@each_city_name_array_' + i.to_s, array)
        end
      end
    end
  end

  def create
  end

  def index
  end

  def show
  end

  private

  def prefectures_array
    prefectures = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
        "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
        "新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県",
        "静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県",
        "奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県",
        "徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県",
        "熊本県","大分県","宮崎県","鹿児島県","沖縄県"
        ]
  end
end
