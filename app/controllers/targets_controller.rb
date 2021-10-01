class TargetsController < ApplicationController
  before_action :set_user, only: %i[create index show edit original_update destroy]

  def new
    @apps = App.all
    @appearances = Appearance.all
    @ages = 18..30
    @purposes = Purpose.all
    @jobs = Job.where.not(name: '未選択')
    @heights = 130..180
    @personalities = Personality.where.not(name: '未選択')

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
    @target = Target.create!(target_params)
    redirect_to targets_path
  end

  def index
    @apps = App.all
    @targets = Target.where(user_id: @user.id)
    @targets_pagination = Target.where(user_id: @user.id).page(params[:page]).per(7)
  end

  def show
    @target = Target.find_by(id: params[:id], user_id: @user.id)
    @app = @target.app
    @appearance = @target.appearance
    @job = @target.job
    @personality = @target.personality
    @purpose = @target.purpose
  end

  def edit
    @target = Target.find_by(id: params[:id], user_id: @user.id)
    @apps = App.all
    @appearances = Appearance.all
    @ages = 18..30
    @purposes = Purpose.all
    @jobs = Job.where.not(name: '未選択')
    @heights = 130..180
    @personalities = Personality.where.not(name: '未選択')

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

  def original_update
    @target = Target.find(params[:id])
    update_params_discrimination
    @target.save!
    redirect_to targets_path
  end

  def destroy
    @target = Target.find_by(id: params[:id], user_id: @user.id)
    @target.destroy!
    redirect_to targets_path
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

  def set_user
    @user = User.find(session[:user_id])
  end

  def target_params
    params.permit(:app_id, :appearance_id, :name, :age, :purpose_id, :job_id, :height, :hobby, :prefecture, :city, :personality_id, :single_history, :favorite_food).merge(user_id: @user.id)
  end

  def target_params_update
    params.permit(:name, :hobby, :single_history, :favorite_food).merge(user_id: @user.id)
  end

  def update_params_discrimination
    case "0"
    when params[:app_id]
      @target.app_id = params[:app_id_before_edit]
    when params[:appearance_id]
      @target.appearance_id = params[:appearance_id_before_edit]
    when params[:age]
      @target.age = params[:age_before_edit]
    when params[:purpose_id]
      @target.purpose_id = params[:purpose_id_before_edit]
    when params[:height]
      @target.height = params[:height_before_edit]
    when params[:prefecture]
      @target.prefecture = params[:prefecture_before_edit]
    when params[:city]
      @target.city = params[:city_before_edit]
    end

    unless params[:app_id] == "0"
      @target.app_id = params[:app_id]
    end
    unless params[:appearance_id] == "0"
      @target.appearance_id = params[:appearance_id]
    end
    unless params[:age] == "0"
      @target.age = params[:age]
    end
    unless params[:purpose_id] == "0"
      @target.purpose_id = params[:purpose_id]
    end
    unless params[:height] == "0"
      @target.height = params[:height]
    end
    unless params[:prefecture] == "0"
      @target.prefecture = params[:prefecture]
    end
    unless params[:city] == "0"
      @target.city = params[:city]
    end

    case "1"
    when params[:job_id]
      @target.job_id = params[:job_id_before_edit]
    when params[:personality_id]
      @target.personality_id = params[:personality_id_before_edit]
    end

    unless params[:job_id] == "1"
      @target.job_id = params[:job_id]
    end
    unless params[:personality_id] == "1"
      @target.personality_id = params[:personality_id]
    end

    @target.name = params[:name]
    @target.hobby = params[:hobby]
    @target.single_history = params[:single_history]
    @target.favorite_food = params[:favorite_food]
    @target.user_id = @user.id
  end
end
