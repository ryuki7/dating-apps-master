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
end
