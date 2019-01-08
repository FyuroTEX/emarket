import { arrayOf } from 'prop-types';
import React from 'react';
import { productPropTypes } from '../../common/propType';
import { ProductLink } from '../../components/ProductLink';
import { Route } from 'react-router-dom';
import { routes } from '../../routes';
import {  ProductContainers } from '../../components/ProductComponent';

export const AdminPage = ({ productList, match }) => (
    <div>
        <Route
            path={match.path}
            exact
            render={()=> productList.map(({title, id}) => (
                <ProductLink key={id} id={id} title={title} />
            ))}
        />
        <Route path={routes.adminProduct} render={(renderProps) => <ProductContainers productList={productList} {...renderProps}/>} />
  </div>
);

AdminPage.propTypes = {
    productList: arrayOf(productPropTypes).isRequired
  };