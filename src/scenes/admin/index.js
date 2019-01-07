import React from 'react';
import { arrayOf } from 'prop-types';
import { productPropTypes } from '../../common/propType';
import { ProductLink } from '../../components/ProductLink';

export const AdminPage = ({ productList }) => (
  <div>
    {productList.map(({title, id}) => (
        <ProductLink key={id} id={id} title={title} />
    ))}
  </div>
);

AdminPage.propTypes = {
    productList: arrayOf(productPropTypes).isRequired
  };