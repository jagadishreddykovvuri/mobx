import React, { Component } from 'react'
import './styles.css'
class ProductRow extends Component {

    render(){
        const goods=this.props.products
        const itemName=goods.stocked? goods.name:<span className="not-in-stock" >{goods.name}</span>
        return(
            <>
            <tr>
                <td>{itemName}</td>
                <td>{goods.price}</td>
            </tr>
            </>
        )
    }

}
export default ProductRow