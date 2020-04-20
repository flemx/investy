import React from "react"

class StockListing extends React.Component {

  /**
   *  Set props, state and bind functions
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      stocks: []
    }
  }

  componentWillMount() {

    fetch('stocksuser', {
      method: 'GET', headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': Rails.csrfToken()
      },
      credentials: 'same-origin'
    }).then( (response) => {
      return response.json();
    }).then( (data) => {
      this.setState({stocks : data});
      console.log();
    })
    .catch( (err)=>{
      M.toast({html: err})
    });

  }




  render() {
    return (

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
          </tbody>




    );
  }
}



export default StockListing
