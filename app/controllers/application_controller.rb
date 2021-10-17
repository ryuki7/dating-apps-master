class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  require 'date'
  layout :determine_layout
  before_action :login_check
  skip_before_action :login_check, only: %i[before_my_page terms privacy guide]

  def webhook
    if signature_verify
      render html: '<p>success</p>'.html_safe, status: 200
    else
      render html: '<p>invalid</p>'.html_safe, status: 403
    end
  end

  def before_my_page
    @meta_url = "users/my_page"
  end

  def terms; end

  def privacy; end

  def guide; end

  private

  def determine_layout
    case action_name
    when 'before_my_page' 
      'before'
    when 'terms'
      'terms_and_privacy'
    when 'privacy'
      'terms_and_privacy'
    when 'guide'
      'layout_guide'
    end
  end

  def login_check
    if session[:user_id] == nil
        redirect_to before_my_page_path
    end
  end

  def signature_verify
    http_request_body = request.raw_post # Request body string
    hash = OpenSSL::HMAC::digest(OpenSSL::Digest::SHA256.new, ENV['CHANNEL_SECRET'], http_request_body)
    signature = Base64.strict_encode64(hash)
    # Compare x-line-signature request header string and the signature
  end
end
