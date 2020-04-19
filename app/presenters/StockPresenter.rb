require_relative '../models/Stock'

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

# #Formatted class to return as json object
# class StockFormat
#     def initialize(url,name,ticker,price,change)
#         @url = url
#         @name = name
#         @ticker = ticker
#         @price = price
#         @change = change
#     end 
# end