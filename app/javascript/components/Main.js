import React from 'react';
import './Main.css';
import StockCard from './StockCard';
import MyStocks from './MyStocks';

class Main extends React.Component {


    render() {
        return (
            <div className="">
                <ul className="tabs tabs-fixed-width tab-demo z-depth-1 myTabsEl teal-text lighten-2-text">
                    <li className="tab"><a href="#tab1" className="teal-text">Stocks</a></li>
                    <li className="tab"><a href="#tab2" className="teal-text">Add Stock</a></li>
                </ul>
                <div id="tab1" className="col s12">
                    <MyStocks />
                </div>
                <div id="tab2" className="col s12">
                    <StockCard />
                </div>
            </div>
        );
    }
}


export default Main
