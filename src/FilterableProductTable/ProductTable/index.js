import React, { Component } from 'react'
import './styles.css'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component {

    render(){
        const data=[]
        let lastCategory=null;
        this.props.products.forEach((item) => {
            data.push(item.category!==lastCategory?<ProductCategoryRow category={item.category}/>:null)
            data.push(<ProductRow products={item}/>)
            lastCategory=item.category
        });
        return(
            <div>
            <thead>
            <tr>
                <td><th>Name</th></td>
                <td><th>Price</th></td>
            </tr>
            </thead>
            <tbody>{data}</tbody>
            </div>
        )
    }

}
export default ProductTable