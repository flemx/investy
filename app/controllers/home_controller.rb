
require 'json'

class HomeController < ApplicationController
  before_action :authenticate_user!
  def index
    StockQuote::Stock.new(api_key: 'pk_8dd852fe4adb468dbee87c0459e0b83a')
    # @stockTest = StockQuote::Stock.raw_quote("fb").to_json 
    @stockTest = StockQuote::Stock.raw_logo("fb") 

    @stockLogo = StockQuote::Stock.logo("fb")
  end

  # GET /api/users
  def getUsers
    render :json => User.all.to_json 
  end


  def getStock
    StockQuote::Stock.new(api_key: 'pk_8dd852fe4adb468dbee87c0459e0b83a')
    render :json => StockQuote::Stock.raw_logo(params[:id]).to_json 
  end

  # About page
  def about
  end
end
