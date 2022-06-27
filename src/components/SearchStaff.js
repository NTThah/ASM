import React, { Component } from "react";

class SearchStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  render() {
    return (
      <div className="row">
        <div className="input-group col-10">
          <input type="text" className="form-control" name="keyword" />
        </div>
        <span className="input-group-btn col-2">
          <button type="button" className="btn btn-primary">
            Tìm
          </button>
        </span>
      </div>
    );
  }
}

export default SearchStaff;
