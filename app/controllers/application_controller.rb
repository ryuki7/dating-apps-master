class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def test;end

  def webhook
    if signature_verify
      render html: '<p>success</p>'.html_safe, status: 200
    else
      render html: '<p>invalid</p>'.html_safe, status: 403
    end
  end

  private

  def signature_verify
    http_request_body = request.raw_post # Request body string
    hash = OpenSSL::HMAC::digest(OpenSSL::Digest::SHA256.new, ENV['CHANNEL_SECRET'], http_request_body)
    signature = Base64.strict_encode64(hash)
    # Compare x-line-signature request header string and the signature
  end
end
