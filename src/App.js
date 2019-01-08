import React, { Component } from 'react';
import './App.css';
import { routes } from './routes';
import { Link, Route } from 'react-router-dom';
import { AdminPage } from './scenes/admin';
import { products } from './data/products';

const getProducts = async () => new Promise(
  (resolve) => {
    setTimeout(() => resolve(products), 1000);
  },
);

class App extends Component {
  state = {
    products: [],
    loading: true,
  };

  async componentDidMount() { 
    const prods = await getProducts();
    this.setState({
      products: prods,
      loading: false,
    })
  };

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
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    return (
      <div className="App">
        <p>
          <Link to={routes.admin}>Admin</Link>
        </p>
        <Route
          // exact
          path={routes.admin}
          render={renderProps => (
            <AdminPage productList={this.state.products} updateProduct={this.updateProduct} {...renderProps} />
          )}
        />
      </div>
    );
  }
}

export default App;
