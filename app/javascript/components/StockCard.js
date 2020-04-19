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
    this.setInput = this.setInput.bind(this);
    this.submitStock = this.submitStock.bind(this);
    this.setStock = this.setStock.bind(this);
    this.state = {
      url: null,
      name: null,
      inputValue : ''
    }
  }

  /**
   *  Fetch the stock from the api and set update state
   */
  submitStock(){
    console.log(`Submit value: ${ this.inputValue}`);
    fetch(`/api/stock/${this.inputValue}`)
      .then(response => response.json())
      .then(data => this.setStock(data))
      .catch(error => this.setState({name : 'NO STOCK FOUND', url : null}));
  }
  
  /**
   *  Onchange handler to set value
   * @param {*} event 
   */
  setInput(event){
    // debugger;
    console.log(`Set value: ${event.target.value}`);
    this.inputValue = event.target.value;
    //this.setState({ inputValue : event.target.value})
  }


  setStock(data) {
    // debugger;
    console.log(data)
    let newName = Object.keys(data)[0].toString();
    let newUrl = data[newName].logo.url;
    this.setState({ url: newUrl, name: newName , inputValue : ''})
    console.log(this.state)
  }

  render() {
    return (

      <div className="Container ">
        <div className="row">
          <h3 className="header headerColor">Find stock information</h3>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s4">
                <input id="input_stock" type="text"  onChange={this.setInput}/>
                <label htmlFor="input_stock">Stock name</label>
              </div>
              <a className="waves-effect waves-light btn col s1" onClick={ this.submitStock}>button</a>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="card col s3">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator stockImgCard" src={this.state.url}/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{this.stockName}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>

      </div>



    );
  }
}



export default StockCard
