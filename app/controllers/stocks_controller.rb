class StocksController < ApplicationController
  before_action :authenticate_user!
  # before_action :correct_user, only: [:edit, :update, :destroy]
  before_action  only: [:show, :edit, :update, :destroy]

  # GET /stocks
  # GET /stocks.json
  def index
    @stocks = Stock.all
  end




  # GET /stocks/1
  # GET /stocks/1.json
  def show
  end

  # GET /stocks/new
  def new
    @stock = Stock.new
  end

  # GET /stocks/1/edit
  def edit
  end

  # POST /stocks
  # POST /stocks.json
  def create
    params[:user_id] = current_user.id
    p stock_params
    @stock = Stock.new(stock_params)

      if @stock.save
        render json: @stock 
      else
        render json: @stock.errors, status: :unprocessable_entity
      end
  end
  # def create
  #   @stock = Stock.new(stock_params)

  #   respond_to do |format|
  #     if @stock.save
  #       format.html { redirect_to @stock, notice: 'Stock was successfully created.' }
  #       format.json { render :show, status: :created, location: @stock }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @stock.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # PATCH/PUT /stocks/1
  # PATCH/PUT /stocks/1.json
  def update
    respond_to do |format|
      if @stock.update(stock_params)
        format.html { redirect_to @stock, notice: 'Stock was successfully updated.' }
        format.json { render :show, status: :ok, location: @stock }
      else
        format.html { render :edit }
        format.json { render json: @stock.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stocks/1
  # DELETE /stocks/1.json
  def destroy
    @stock.destroy
    respond_to do |format|
      format.html { redirect_to stocks_url, notice: 'Stock was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # #Logged in user
  # def correct_user
  #   @ticker = current_user.stocks.find.by_id(id: params[:id])

  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stock
      @stock = Stock.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def stock_params
      params.require(:stock).permit(:ticker, :user_id)
    end
end
