import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Input } from "reactstrap";
import AddNewStaff from "./AddNewStaff";
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
      isDisplayForm: false,
    };
  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
    // console.log(keyword);
  };
  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
  };
  render() {
    const { keyword, isDisplayForm } = this.state;
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
    const AddStaff = isDisplayForm ? <AddNewStaff /> : "";
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h2 className="ml-3 mt-3">Nhân viên</h2>
          </div>
          <div className="col-4 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-2"></span>Thêm Nhân viên
            </button>
          </div>
          <div>{AddStaff}</div>
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
