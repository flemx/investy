import React from "react"
import './StockCard.css';

class StockCard extends React.Component {

  /**
   * Getters
   */
  get imgUrl() {
    if (this.state.url) {
      return this.state.url;
    }
    return 'nothing'
  }
  get stockName() {
    if (this.state.name) {
      return this.state.name;
    }
    return 'nothing'
  }



  /**
   *  Set props, state and bind functions
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.inputValue = '';
    this.addStock = this.addStock.bind(this);
    this.setInput = this.setInput.bind(this);
    this.submitStock = this.submitStock.bind(this);
    this.setStock = this.setStock.bind(this);
    this.state = {
      stock : {
        company_name : 'Find a stock',
        symbol : '',
        url : 'https://www.upvixsoft.com.br/erp/assets/img/placeholder.png',
        change : '',
        latest_price : 0.00
      },
      notLoading: false,
      inputValue: ''
    }
  }

  /**
   *  Fetch the stock from the api and set update state
   */
  submitStock() {
    console.log(`Submit value: ${this.inputValue}`);
    fetch(`/api/stock/${this.inputValue}`)
      .then(response => response.json())
      .then(data => this.setStock(data))
      .catch(error => this.setState({ stock : {
        company_name : 'No Stock found',
        symbol : '',
        url : 'https://www.upvixsoft.com.br/erp/assets/img/placeholder.png',
        change : '',
        latest_price : 0.00
      }, notLoading: false, }));
  }

  /**
   *  Onchange handler to set value
   * @param {*} event 
   */
  setInput(event) {
    // debugger;
    console.log(`Set value: ${event.target.value}`);
    this.inputValue = event.target.value;
    //this.setState({ inputValue : event.target.value})
  }


  setStock(data) {
    // debugger;
    console.log(data)
    // let newName = Object.keys(data)[0].toString();
    // let newUrl = data[newName].logo.url;
    this.setState({ stock : data })
  }


  addStock(){
    this.setState({notLoading: true});
    console.log('addStock executed');
    fetch('stocks', {
      method: 'post',
      body: JSON.stringify({ticker: this.state.stock.symbol, user_id: this.props.user}),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': Rails.csrfToken()
      },
      credentials: 'same-origin'
    }).then((response) => {
      return response.json();
    }).then((data)=> {
      console.log(data);
      this.setState({notLoading: false});
      M.toast({html: 'Succesfully added stock'})
    });
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <h3 className="header headerColor">Add new stock</h3>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s4">
                <input id="input_stock" type="text" onChange={this.setInput} />
                <label htmlFor="input_stock">Find Stock by symbol</label>
              </div>
              <a className="waves-effect waves-light btn-small col s3 m2 l1 m-left-5 m-top-3" onClick={this.submitStock}>find</a>
            </div>
          </form>
        </div>
        <div className="row">
          {/* Loading indicater */}
          {this.state.notLoading &&
              <div className="progress">
                <div className="indeterminate"></div>
            </div>
          }
        
          <div className="card col s10 m6 l5">
            <div className="card-content">
              <div className="row valign-wrapper cardSubContent">
                <div className="col s2">
                  <img src={this.state.stock.url} className="responsive-img" />
                </div>
                <div className="col s10">
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="stockComp" type="text" readOnly value={this.state.stock.company_name}/>
                      <label htmlFor="stockComp" className="">Company</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="stockTick" type="text" readOnly value={this.state.stock.symbol}/>
                      <label htmlFor="stockTick" className="active">Ticker</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="stockPrice" type="text" readOnly value={this.state.stock.latest_price}/>
                      <label htmlFor="stockPrice" className="">Price</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="stockChange" type="text" readOnly value={'% ' + this.state.stock.change}/>
                      <label htmlFor="stockChange" className="">Change</label>
                    </div>
                  </div>
                  </div>
                  <a className="btn-floating btn-slarge waves-effect waves-light red addNewBtn" disabled={this.state.notLoading} onClick={this.addStock}><i className="material-icons">add</i></a>
              </div>
            </div>
          </div>
      </div>
    </div>



    );
  }
}



export default StockCard
