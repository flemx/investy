
require 'json'

class HomeController < ApplicationController
  before_action :authenticate_user!
  def index
    # StockQuote::Stock.new(api_key: 'pk_8dd852fe4adb468dbee87c0459e0b83a')
    # # @stockTest = StockQuote::Stock.raw_quote("fb").to_json 
    # @stockTest = StockQuote::Stock.raw_logo("fb") 

    # @stockLogo = StockQuote::Stock.logo("fb")
    @userId = current_user.id
  end

  # GET /api/users
  def getUsers
    render :json => User.all.to_json 
  end

    # GET /stocks/user
  # Get all saved stocks from user per user_id
  def userStocks
   render :json => StockPresenter.new.getStocks(current_user.id)
  end


  # DELETE /deletestock/:ticker
  # Get all saved stocks from user per user_id
  def deleteStock
    p params[:ticker]
    Stock.where(:ticker => params[:ticker]).destroy_all  
  end


  def getStock
    render :json => StockPresenter.new.getStock(params[:id]).to_json 
  end

  # About page
  def about
  end
end



class StockPresenter

  def initialize
      p "initialize:"
      StockQuote::Stock.new(api_key: 'pk_8dd852fe4adb468dbee87c0459e0b83a')
  end


  #Method to get all stocks
  def getStocks(userId)
      stocknames = []
      Stock.where(:user_id => userId).each{ |item|
          stocknames.push(item.ticker)
      }
      if stocknames.any?
          return StockQuote::Stock.batch(["quote","logo"],stocknames)
      else
          return '{"company_name" : "No Stocks saved", "symbol" : "none"}'
      end
  end


  #Method to get single stock by symbol
  def getStock(symbol)

      return StockQuote::Stock.batch(["quote","logo"],symbol)

  end

  # get list of all tickers from the user
  def auth
      StockQuote::Stock.new(api_key: 'pk_8dd852fe4adb468dbee87c0459e0b83a')
  end


end