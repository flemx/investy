import React from 'react';
import './Main.css';
import StockCard from './StockCard';
import MyStocks from './MyStocks';

class Main extends React.Component {

    constructor(props) {
        super(props);
        console.log('props in Main: ', props);
      }

    render() {
        return (
            <div className="">
                <ul className="tabs tabs-fixed-width tab-demo z-depth-1 myTabsEl teal-text lighten-2-text">
                    <li className="tab"><a href="#tab1" className="teal-text">My Stocks</a></li>
                    <li className="tab"><a href="#tab2" className="teal-text">Add Stocks</a></li>
                    
                </ul>
                <div id="tab1" className="col s12">
                    <MyStocks />
                </div>
                <div id="tab2" className="col s12">
                    <StockCard user={this.props.greeting}/>
                </div>
            </div>
        );
    }
}


export default Main
