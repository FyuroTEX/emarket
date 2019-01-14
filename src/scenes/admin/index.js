import { arrayOf } from 'prop-types';
import React from 'react';
import { productPropTypes } from '../../common/propType';
// import { ProductLink } from '../../components/ProductLink';
import { Route } from 'react-router-dom';
import { routes } from '../../routes';
import {  ProductContainers } from '../../components/ProductComponent';
import ProductList from './ProductList/ProductListContainer'

export const AdminPage = ({ productList, match, updateProduct }) => (
    <div>
        <Route
            path={match.path}
            exact
            component={ProductList}
        />
        <Route
            path={routes.adminProduct}
            render={(renderProps) =>
                <ProductContainers updateProduct={updateProduct} productList={productList}
                    {...renderProps} />} />
  </div>
);

AdminPage.propTypes = {
    productList: arrayOf(productPropTypes).isRequired
  };