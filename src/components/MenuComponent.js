import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle } from "reactstrap";
import SearchStaff from "./SearchStaff";

const RenderMenuItem = ({ staff }) => {
  return (
    <Card className="border-dark text-center">
      <Link to={`/nhanvien/${staff.id}`}>
        <CardImg src={staff.image} atl={staff.name} />
        <CardTitle className="text-center border-dark bg-info text-white">
          {staff.name}
        </CardTitle>
      </Link>
    </Card>
  );
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
    // console.log(keyword);
  };
  render() {
    const { keyword } = this.state;
    let staffsList = this.props.staffs;
    let staffsFilter = [];
    if (keyword) {
      staffsFilter = staffsList.filter((staff) => {
        return staff.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    } else {
      staffsFilter = staffsList;
    }
    const staffs = staffsFilter.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-6 col-lg-2 mt-2 mb-2">
          <RenderMenuItem staff={staff} />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="ml-3 mt-3">Nhân viên</h2>
          </div>
          <div className="col-6">
            <SearchStaff onSearch={this.onSearch} />
          </div>
        </div>
        <hr className=" mb-3" />
        <div className="row">{staffs}</div>
      </div>
    );
  }
}
export default Menu;
