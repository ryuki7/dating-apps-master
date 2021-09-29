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
end
