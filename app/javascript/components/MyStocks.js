import React from "react"
import './MyStocks.css';

class MyStocks extends React.Component {

  /**
   *  Set props, state and bind functions
   * @param {*} props 
   */
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div className="container m-bottom-5">
          <h3 className="header teal-text text-lighten-2 mainHeader">My saved stocks</h3>
          <div className="nav-wrapper search-field m-top-5 m-bottom-2">
            <form>
              <div className="input-field">
                <input id="search" type="search" required placeholder="search"/>
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
                <tr>
                  <td className="detailBtn">
                    <img className="activator stockImgIcon m-right-5" src="https://storage.googleapis.com/iexcloud-hl37opg/api/logos/FB.png" />
                      Facebook Inc</td>
                  <td>FB</td>
                  <td>$3232.87</td>
                  <td className="teal-text">% 1.54</td>
                  <td className="removeBtn">
                       <i className="material-icons m-left-10">delete_forever</i>
                  </td>
                </tr>
                <tr>
                  <td className="detailBtn">
                  <img className="activator stockImgIcon m-right-5" src="https://storage.googleapis.com/iexcloud-hl37opg/api/logos/FB.png" />
                      Facebook Inc</td>
                  <td>FB</td>
                  <td>$3232.87</td>
                  <td className="red-text">% -5.54</td>
                  <td className="removeBtn">
                       <i className="material-icons m-left-10">delete_forever</i>
                  </td>
                </tr>
              </tbody>
            </table>

      </div>



    );
  }
}



export default MyStocks
