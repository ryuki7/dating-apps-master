class DateSchedulesController < ApplicationController
  before_action :set_user, only: %i[original_create destroy]

  def original_create
    date_schedule = DateSchedule.create!(date_schedule_params)
    line_message_text = "デートの予定を登録したよ$ LINE emoji $ \n\n#{date_schedule.target.name}ちゃん \n#{date_schedule.appointment} \n#{date_schedule.date_plan.name}(#{date_schedule.date_plan.purpose.name}) \nhttps://dating-apps-master.com/date_plans/#{date_schedule.date_plan.id}/detail?openExternalBrowser=1"
    message = {
      type: "text",
      text: line_message_text.gsub(/(\\r\\n|\\r|\\n)/, "\n"),
      emojis: [
      {
        index: 12,
        productId: "5ac1bfd5040ab15980c9b435",
        emojiId: "001"
      },
      {
        index: 25,
        productId: "5ac1bfd5040ab15980c9b435",
        emojiId: "002"
      }
    ]
    }
    client = Line::Bot::Client.new { |config|
        config.channel_secret = "cd3b244b56648c6ae54b3552238c41a3"
        config.channel_token = "1bqLcX1ZfBHVuIvl2IS7MnzJd35bokjepCTUaqiOBHz+00S/xR/yh9Ys3DU77rgG4AmeSuFTxuPh+lC99e7Z/T2B3o/yIrmqcDUt58ov57XLMY271NLzVFbfs96aZlONsrO7VPDX4N2pStJiC6u0zwdB04t89/1O/w1cDnyilFU="
    }
    response = client.push_message(@user.line_id, message)
    redirect_to "/targets/#{params[:id]}#targets_date_schedule_fragment"
  end

  def destroy
    @date_schedule = DateSchedule.find_by(id: params[:id], user_id: @user.id)
    @target = @date_schedule.target
    @date_schedule.destroy!
    if params[:referer] == "date_result"
      redirect_to date_results_path
    elsif params[:referer] == "date_result_unreported_passed"
      redirect_to delete_unreported_passed_date_results_path
    else
      redirect_to "/targets/#{@target.id}#targets_date_registration_fragment"
    end
  end

  private

  def set_user
    @user = User.find(session[:user_id])
  end

  def date_schedule_params
    params.permit(:appointment, :date_plan_id).merge(target_id: params[:id], user_id: @user.id)
  end
end
