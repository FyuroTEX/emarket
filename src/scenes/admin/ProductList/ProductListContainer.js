import React from 'react';
import PrductListView from './ProductListView';
import * as Api from '../../../api/Api';


class PrductListContainer extends React.Component {
    state = {
        products: [],
        loading: true,
      };
    

    async componentDidMount() { 
        const [produtData] = await PrductListContainer.fetchData();
        this.setState({
          products: produtData.data,
          loading: false,
        })
      };
    
    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
          }
        return (
            <PrductListView {...this.props} {...this.state} />
        )
    }
}

PrductListContainer.fetchData = (params)  => Promise.all([
    Api.AdminProduct.fetchProducts(),
])

export default PrductListContainer;