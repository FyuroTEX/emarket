import React from 'react';
import styled, { css } from 'styled-components';
import { arrayOf } from 'prop-types';

import { productPropTypes } from '../common/propTypes';

const commonInputStyles = css`
  display: block;
`;

const InputField = styled.input`
  ${commonInputStyles}
`;

const TextArea = styled.textarea`
  ${commonInputStyles}
`;

const ProductComponent = ({ id, title, description, onSubmit, image, price }) => (
  <form onSubmit={onSubmit}> 
    <InputField name="title" defaultValue={title} />
    <TextArea name="description" defaultValue={description}>
      {{ description }}
        </TextArea>
        <button type="submit">Save</button>
  </form>
);
ProductComponent.PropTypes = productPropTypes;

export const ProductContainer = ({ match: { params }, productList }) => {
  const product = productList.find(({ id }) => Number(params.id) === id);
    return <ProductComponent {...product} onSubmit={(e) => {
        e.preventDefault();
        console.log('e', React.findDOMNode(this.refs.theInput).value);
  }} />;
};

ProductContainer.propTypes = {
  productList: arrayOf(productPropTypes).isRequired
};
