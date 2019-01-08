import React from 'react';
import { productPropTypes } from "../common/propType";
import styled, {css} from 'styled-components';
import { arrayOf } from 'prop-types';
import { routes } from '../routes';

const commonInpytStyles = css`
display: block;
`;

const InputField = styled.input`
${commonInpytStyles};
`;
const TextArea = styled.textarea`
${commonInpytStyles};

`;

const ProductComponent = ({title, id, description, onChange, onSubmit, image, price}) => (
    <form onSubmit={onSubmit}>
<InputField name="title" value={title} onChange={onChange('title')} />
        <TextArea name="description" value={description} onChange={onChange('description')}></TextArea>
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
    
    onChange = (name) => ({ target: { value } }) => {
        this.setState({
           [name]: value,
        });
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.history.push(routes.admin);
    };

    render() {
        return <ProductComponent {...this.state}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
        />
    };
}
ProductContainers.propTypes = {
    productList: arrayOf(productPropTypes).isRequired,
};