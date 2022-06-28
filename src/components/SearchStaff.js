import React, { Component } from "react";

class SearchStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };
  render() {
    return (
      <div className="row mt-3">
        <div className="input-group col-10">
          <input
            type="text"
            className="form-control"
            name="keyword"
            value={this.state.keyword}
            onChange={this.onChange}
          />
        </div>
        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onSearch}
          >
            Tìm
          </button>
        </span>
      </div>
    );
  }
}

export default SearchStaff;
