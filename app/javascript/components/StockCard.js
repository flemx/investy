import React from "react"

class StockCard extends React.Component {

  // state = {
  //   stock : {url: ''}
  // }

  get imgUrl (){
      if(this.state.url){
        return this.state.url;
      }
      return 'nothing'
  }
 

  constructor(props){
    super(props)
    this.state = {
      url : null,
      name : null
    }
  
      fetch('/stock')
        .then(response => response.json())
        .then(data => this.testMethod(data));
 
  }


  testMethod(data){
    // debugger;
    console.log(data)
    this.setState({ url : data.FB.logo.url })
  }

  render() {
    return (

        <div>
        <div className="row">
        <h3 className="header headerColor">Find stock information</h3>
        <form className="col s12">
            <div className="row">
                <div className="input-field col s4">
                    <input id="input_text" type="text" />
                    <label htmlFor="input_text">Stock name</label>
                </div>
                <a className="waves-effect waves-light btn col s1">button</a>
            </div>
        </form>
    </div>

    <div className="row">
    <div className="card col s3">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator stockImgCard" src={this.imgUrl} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
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
