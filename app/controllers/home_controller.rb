
require 'json'

class HomeController < ApplicationController
  def index
    StockQuote::Stock.new(api_key: 'pk_8dd852fe4adb468dbee87c0459e0b83a')
    # @stockTest = StockQuote::Stock.raw_quote("fb").to_json 
    @stockTest = StockQuote::Stock.raw_logo("fb") 

    @stockLogo = StockQuote::Stock.logo("fb")
  end


  def getStock
    StockQuote::Stock.new(api_key: 'pk_8dd852fe4adb468dbee87c0459e0b83a')
    render :json => StockQuote::Stock.raw_logo("fb").to_json 
  end

  # About page
  def about
  end
end
