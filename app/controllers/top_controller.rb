# frozen_string_literal: true

class TopController < ApplicationController
  layout 'top'
  skip_before_action :login_check

  def index; end
end
