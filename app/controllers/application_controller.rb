class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  layout false

  def index
    render 'index'
  end
end
