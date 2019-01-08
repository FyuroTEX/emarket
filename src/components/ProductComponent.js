import React from 'react';
import { productPropTypes } from "../common/propType";
import styled, {css} from 'styled-components';
import { arrayOf } from 'prop-types';

const commonInpytStyles = css`
display: block;
`;

const InputField = styled.input`
${commonInpytStyles};
`;
const TextArea = styled.textarea`
${commonInpytStyles};

`;

const ProductComponent = ({title, id, description, onSubmit, image, price}) => (
    <form onSubmit={onSubmit}>
<InputField name="title" value={title} />
        <TextArea name="description" value={description}></TextArea>
   <button type="submit">Save</button>
    </form>
);

ProductComponent.propTypes = productPropTypes;

export class ProductContainers extends React.Component {
    constructor(props) {
        super(props);
        const { match: { params }, productList } = props;

        const product = productList.find(({ id }) => Number(params.id) === id);
        this.state = {
            ...product,
        }
    };
    
    
    render() {
        return <ProductComponent {...this.state} onSubmit={(e) => {
            e.preventDefault();
            console.log('e', e.target);
        }} />
    };
}
ProductContainers.propTypes = {
    productList: arrayOf(productPropTypes).isRequired,
};