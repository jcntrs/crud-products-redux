import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/" component={Products} />
                    <Route exact path="/productos/nuevo" component={NewProduct} />
                    <Route exact path="/productos/editar/:id" component={EditProduct} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App; 