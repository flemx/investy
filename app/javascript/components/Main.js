import React from 'react';
import StockCard from './StockCard';

class Main extends React.Component {


    render() {
        return (
            <div>
                <ul class="tabs tabs-fixed-width tab-demo z-depth-1">
                    <li class="tab"><a href="#test1">Stocks</a></li>
                    <li class="tab"><a href="#test4">Test 2</a></li>
                    <li class="tab"><a href="#test0">Test 3</a></li>
                </ul>
                <div id="test1" class="col s12">
                    <StockCard />
                </div>
                <div id="test2" class="col s12"><p>Test 2</p></div>
                <div id="test3" class="col s12"><p>Test 3</p></div>
            </div>
        );
    }
}


export default Main
