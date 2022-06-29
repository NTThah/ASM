import React, { Component } from "react";
// import './App.css';
import StaffList from "./StaffListComponent";

import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import { Switch, Route } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import Department from "./DepartmentComponent";
import Slary from "./SlaryComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }
  onSubmit = (data) => {
    console.log(data);
    let staffs = this.state.staffs;
    let departments = this.state.departments;
    data.id = staffs.length + 1;
    data.department = departments.filter(
      (department) => department.id === data.department
    )[0];
    staffs.push(data);
    this.setState({
      staffs: staffs,
    });
  };
  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffList
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/nhanvien"
            component={() => (
              <Menu staffs={this.state.staffs} onSubmit={this.onSubmit} />
            )}
          />
          <Route exact path="/nhanvien/:staffId" component={StaffWithId} />
          <Route
            exact
            path="/phongban"
            component={() => (
              <Department departments={this.state.departments} />
            )}
          />
          <Route
            exact
            path="/bangluong"
            component={() => <Slary staffs={this.state.staffs} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
