import React, { Component } from 'react';
import './Desktop.css';
import { routes } from '../routes';
import { Link, Route } from 'react-router-dom';
import { AdminPage } from '../scenes/admin';
import Header from '../navigation/Header';


class App extends Component {
 
  

  updateProduct = (newProduct) => (
    this.setState({
      products: this.state.products.map((oldProduct) => {
        if (oldProduct.id === newProduct.id) {
          return newProduct;
        }
        return oldProduct;
      })
    })
  );

  render() {
    
    return (
      <div className="App">
        <Header />
        <p>
          <Link to={routes.admin}>Admin</Link>
        </p>
        <Route
          // exact
          path={routes.admin}
          component={AdminPage}
        />
      </div>
    );
  }
}

export default App;