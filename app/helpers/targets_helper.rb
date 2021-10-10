module TargetsHelper

  def purpose_color(value)
      case value
      when 1
        'make_girlfriend'
      when 2
        'play'
      when 3
        'super_play'
      end
  end

  def app_color(value)
    case value
    when 1
      'pairs'
    when 2
      'with'
    when 3
      'tapple'
    when 4
      'tinder'
    end
  end

  def date_schedule_appointment_string_operation(string)
    split_blank_array = string.split
    split_month_and_day = split_blank_array[1].split("月")
    appointment_return_value = "#{split_month_and_day[0]}/#{split_month_and_day[1].gsub(/[^\d]/, "")}"
  end

  def head_0_remove_date_appointment(date_appointment)
    if date_appointment == nil
      return
    end

    month_and_day_string_disconnect_array = date_appointment.split("/")
    month_revised = month_and_day_string_disconnect_array[0]
    day_revised = month_and_day_string_disconnect_array[1]

    if ["01", "02", "03", "04", "05", "06", "07", "08", "09"].include?(month_and_day_string_disconnect_array[0])
      month_revised = month_and_day_string_disconnect_array[0].delete("0")
    end

    if ["01", "02", "03", "04", "05", "06", "07", "08", "09"].include?(month_and_day_string_disconnect_array[1])
      day_revised = month_and_day_string_disconnect_array[1].delete("0")
    end
    appointment_return_value = "#{month_revised}/#{day_revised}"
  end
end
