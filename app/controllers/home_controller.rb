class HomeController < ApplicationController
  def index
    StockQuote::Stock.new(api_key: 'pk_8dd852fe4adb468dbee87c0459e0b83a')
    @stockTest = StockQuote::Stock.quote("fb")
  end

  # About page
  def about
  end
end
