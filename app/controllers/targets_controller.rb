class TargetsController < ApplicationController
  def new
    @apps = App.all
    @ages = 18..30
    @purposes = Purpose.all
    # @jobs = Job.all
    @heights = 135..175
    sql = File.read('db/zenkoku 2.sql')#文字列としてファイル内容を読み込む
    ActiveRecord::Base.connection.execute(sql)
  end

  def create
  end

  def index
  end

  def show
  end
end
