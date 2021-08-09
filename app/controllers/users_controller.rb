class UsersController < ApplicationController
  require "net/http"
    
  def idtoken
    idtoken = params[:idtoken]
    params = { id_token: idtoken, client_id: 1656234930 }
    uri = URI.parse("https://api.line.me/oauth2/v2.1/verify")
    response = Net::HTTP.post_form(uri, params)

    puts response.body
  end
end
