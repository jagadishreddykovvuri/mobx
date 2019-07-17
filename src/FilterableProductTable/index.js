import React, { Component } from "react";
import "./styles.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { observer } from "mobx-react";
import { action } from "mobx";
import temp from "../constant";
@observer
class FilterableProductTable extends Component {
  //@observable checked = false;
  //@observable searchValue = "";
  constructor(props) {
    super(props);
    this.state = {};
  }

  @action.bound filtering = searchword => {
    temp.searchValue = searchword;
    //this.searchValue = searchword;
  };
  @action.bound checker = () => {
    temp.checked = !temp.checked;
    // this.checked = !this.checked;
  };

  render() {
    var result = this.props.products;
    if (temp.checked) {
      result = result.filter(item => item.stocked === true);
    }
    result = result.filter(item => item.name.includes(temp.searchValue));
    return (
      <>
        <div>
          <SearchBar getInput={this.filtering} checking={this.checker} />
          <ProductTable products={result} />
        </div>
      </>
    );
  }
}
export default FilterableProductTable;
