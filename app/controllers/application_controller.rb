class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def test;end

  def webhook
    CHANNEL_SECRET = '{
      "alg": "RS256",
      "d": "YdD_SXQF3PgRN1vw7pXVwuJ1h1tXFOeBGTHkK5DRYmkRm-qxRgU1VHPYypeGwl58uNsYyVbufWO6gRk3sOYZ6JXkl_nor1vRn6NRkeUjearee1Gah6NnJwM25_ZqnZoJi4bHFnUDTwb-gxTIRt0ldQo3SK2-YpT_WGxSIOJhuFApS8xju-e8cs0yGqE26ILK1cbxnw40d0KErhoDiWmy3PJQffXN5i8vn2DYNaTfGNLeCS0NnWHX37QHllGBtFlILa7XWcLtl8LZ_ocGHOIxtRjnAZHAqO5demqgKm2YwZAwdFUBwoiI26e2a1tLaXTzrravESiuBGQsWzutt3CO-Q",
      "dp": "Vg7VN4waMNwmAonEo0vivtXNmr8uqWpAXxR9AyvLAJeMaQEWwzReUgAEOPcvQ94L0WeFrMCttKx9uYAtXJIiKuX_OFKXhgcZwZwReWPJO9jdQo9t3HKy4v_gaV2yFkrk0QeoxBcK3A9l0_ya3I8qI4iUjvBDnckp5HqmGOxNlZE",
      "dq": "gTsKXQkYQqy8YWJNUwzjbDjAxY4Bg69jfPycftorHGfgZvUUa2DD_AKFyiOvTdUBiddhZnO54CSTswpvw_6bvNEgn-_0zEUicTbCxy2bwp6WmXUhtfDAMNISArXyyYwANu8KVK_kW7KOvon1R0Ppa1br0TEllnLUefmoN7oRi_c",
      "e": "AQAB",
      "ext": true,
      "key_ops": [
        "sign"
      ],
      "kty": "RSA",
      "n": "3RTk17aTLG34qIgR2y62BtOVENSmmUwLrXp_EOS9uI3AxOGwQdAiVyhzW-naHYZyq2gb1O5s0ONIq-i3jHdn423BRXI5_SuirSWiS2lpt4vaAM3de2tnMoZzaOIAPRCReYQYZUh-kWJTNfD1ihITOLwEkEBn0-wC5AO_izgW31OzijbhUN0nGzmFwDMhtkJ1Pr13Xgl5LqDT_ws5kKbmT3kNG3LJ5GICzdMbnZfsk3P2md7J06VH-lQSDTYSFXRxQQhlmpT2jT-Ju0OdDkGRVhgvOym7ae2_CjPTm28s6-Gi0iRF0HJQDLAX0pxfx4G-WxTZSF0nRGsGLdy2rEc4Iw",
      "p": "8QucjKxdAorDvnA_KekAk6rLpFJ3s8W5r2U0zE0XykkCkPbULFLoEJy-pgkmN8UtWxajVPNbarMnboEMgL_ZdG_ikmltQ8EQfC38g8nZLUwYuHl-oYpl0Iu7vbhO0dE_9fuv3VYjhuKAZekC1eYe-JFi7Jl3TWfqRF2vHmB79hk",
      "q": "6sw1oFdcSDowi4xdWdDD1NnNpByxsgJWD_DZ4Knyfb1Om0C20y0KdaU2WOiumYqJzbdkIcpOOTS5LNj-LdmaS1W8fFEyOlZ57k7vHZOQEOEhDTSwruPujWBZZppJpnfpQNdOmT4SWahBIYKtiHqWEfyLeSljiL45Mbr9MThzz5s",
      "qi": "M5zfBkCV9RPsmKtt_icM869aNY-E32FCpUpIjmZ-oYMzSH1YCNTETZVscDPltV_HDakE0eSu76MP4oIMPfCEENlQfzfvWVb1_NrTIL1DaqutdnwWKMnaho7DTWLY6RwKdE3nxe1dw2yX159oHE3Wp0-Yc7T5R5HpmKktemKVzkY"
    }' # Channel secret string
    http_request_body = request.raw_post # Request body string
    hash = OpenSSL::HMAC::digest(OpenSSL::Digest::SHA256.new, CHANNEL_SECRET, http_request_body)
    signature = Base64.strict_encode64(hash)
    # Compare x-line-signature request header string and the signature
  end
end
