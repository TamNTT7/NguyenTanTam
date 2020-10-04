import React from 'react';
import './App.css';
import Header from './Component/header/header';
import Menu from './Component/menu/menu';
import Title from './Component/product/title';
import Product from './Component/product/product';
import List from './Component/ListPro/list';
import Detail from './Component/ProductsDetail/Detail';
import { Route, Router, Switch } from 'react-router-dom';
import cart from './Component/product/Cart';


function App() {
      return (
        
          <div id="App">
            <Header />
            <Menu />
            <Route exact path ="/" component={List} />
            <Route path ="/detail/:id" component={Detail} />
            <Route path ="/Cart" component={cart}/>
          </div>
        
      );
}
export default App;
