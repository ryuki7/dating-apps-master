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
end
