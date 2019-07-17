import React, { Component } from 'react'
import './styles.css'
class SearchBar extends Component {
    handleChange=(e)=>{
        this.props.getInput(e.target.value)

    }
    handleCheck=(e)=>{
        this.props.checking()
    }
    render(){
        return(
            <>
            <div>
            <input placeholder="Search.." onChange={this.handleChange} /><br/>

            <label><input type="checkbox" onChange={this.handleCheck}></input>Only shows products in stock</label>
         </div>
            </>
        )
    }
}
export default SearchBar