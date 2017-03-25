class WeatherController < ApplicationController
  def index
    render json: HTTParty.get("http://api.openweathermap.org/data/2.5/weather", {
      query: {
        APPID: ENV['OWM_API_KEY'],
        q: params["city"]
      }
    })
  end
end
