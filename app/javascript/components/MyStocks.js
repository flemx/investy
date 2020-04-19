import React from "react"
import './MyStocks.css';

class MyStocks extends React.Component {

  /**
   *  Set props, state and bind functions
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.filterStocks = this.filterStocks.bind(this);
    this.state = {
      allStocks : [],
      stocks: []
    }
  }

  /**
   * Fetch the user Stocks from the server upon loading
   */
  componentDidMount() {
    fetch('stocksuser', {
      method: 'GET', headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': Rails.csrfToken()
      },
      credentials: 'same-origin'
    }).then( (response) => {
      return response.json();
    }).then( (data) => {
      if(!Array.isArray(data)){
        data = [data];
      }
      this.setState({stocks : data, allStocks : data});
    })
    .catch( (err)=>{
      M.toast({html: err})
    });

  }


  filterStocks(event){
    let results = this.state.allStocks.filter((stock)=>{
      return stock.company_name.toLowerCase().includes(event.target.value.toLowerCase());
   });
   if(!Array.isArray(results)){
      results = [results];
    }
    this.setState({stocks : results});
  }



  render() {
    return (

      <div className="container m-bottom-5">
        <h3 className="header teal-text text-lighten-2 mainHeader">My saved stocks</h3>
        <div className="nav-wrapper search-field m-top-5 m-bottom-2">
          <form>
            <div className="input-field">
              <input id="search" type="search" required placeholder="search company" onChange={this.filterStocks}/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>


        <table className="responsive-table highlight">
          <thead>
            <tr>
              <th>Company</th>
              <th>Ticker</th>
              <th>Price</th>
              <th>Change</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
          {this.state.stocks.map(stock => {
              return (
                <tr key={stock.symbol}>
                <td className="detailBtn">
                  <img className="activator stockImgIcon m-right-5" src={stock.url} />
                  {stock.company_name}</td>
              <td>{stock.symbol}</td>
              <td>{stock.latest_price}</td>
              <td className={ stock.change > 0? 'teal-text' : 'red-text'}>% {stock.change}</td>
                <td className="removeBtn">
                  <i className="material-icons m-left-10">delete_forever</i>
                </td>
              </tr>
              )
            })}


          </tbody>
        </table>

      </div>



    );
  }
}



export default MyStocks
