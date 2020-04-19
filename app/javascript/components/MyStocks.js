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
        <form>
            <div className="input-field search-field m-bottom-5">
              <input id="search" type="search" required />
              <label className="label-icon" for="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
       <table className="responsive-table">
              <thead>
                <tr>
                    <th>Company</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <img className="activator stockImgIcon m-right-5" src="https://storage.googleapis.com/iexcloud-hl37opg/api/logos/FB.png" />
                      Facebook Inc</td>
                  <td>FB</td>
                  <td>$3232.87</td>
                  <td>
                  {/* <a className="btn-small waves-effect waves-light red lighten-2 del-button">Del</a> */}
                  <a className="red-text del-button" href="#">Delete</a> |
                  <a className="teal-text edit-button" href="#">Edit</a>
                  </td>
                </tr>
                
              </tbody>
            </table>

      </div>



    );
  }
}



export default MyStocks
