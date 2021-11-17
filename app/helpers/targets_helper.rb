module TargetsHelper
  def app_color(value)
    app_type = {
      'a' => 'pairs',
      'b' => 'with',
      'c' => 'tapple',
      'd' => 'tinder'
    }

    app_type[value]
  end

  def purpose_color(value)
    purpose_type = {
      '彼女作り' => 'make_girlfriend',
      '遊び' => 'play',
      '超遊び' => 'super_play'
    }

    purpose_type[value]
  end

  def date_schedule_appointment_string_operation(string)
    split_blank_array = string.split
    split_month_and_day = split_blank_array[1].split("月")
    "#{split_month_and_day[0]}/#{split_month_and_day[1].gsub(/[^\d]/, '')}"
  end

  def head_0_remove_date_appointment(date_appointment, format)
    return if date_appointment.nil?

    month_and_day_string_disconnect_array = date_appointment.split("/")
    month_revised = month_and_day_string_disconnect_array[0]
    day_revised = month_and_day_string_disconnect_array[1]
    head_0_monthes = ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
    month_revised = month_and_day_string_disconnect_array[0].delete("0") if head_0_monthes.include?(month_and_day_string_disconnect_array[0])
    day_revised = month_and_day_string_disconnect_array[1].delete("0") if head_0_monthes.include?(month_and_day_string_disconnect_array[1])

    return "#{month_revised}/#{day_revised}" if format == "/"
    return "#{month_revised}月#{day_revised}日" if format == "月日"
  end
end
