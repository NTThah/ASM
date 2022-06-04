import React, { Component } from 'react';
import './App.css';
import StaffList from './components/StaffListComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from './shared/staffs'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      staffs: STAFFS,
      isDisplayForm: true
    }
  }
  onCloseText = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  render() {
    const isDisplayForm = this.state.isDisplayForm;
    var elm = isDisplayForm ? 'Bấm vào tên nhân viên để xem thông tin.' : "";
    return (
      <div >
        <Navbar dark color="primary" >
            <div className="container">
                <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
            </div>
        </Navbar>
            <StaffList staffs={this.state.staffs} onCloseText={this.onCloseText}/>
            {elm}
      </div>
    );
  }
}

export default App;