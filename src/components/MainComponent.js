import React, { Component } from 'react';
// import './App.css';
import StaffList from './StaffListComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      staffs: STAFFS,

    }
  }
  render() {
    const StaffWithId = ({match}) => {
      return (
        <StaffList staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
      )
    }
    return (
      <div >
            <Header />
            <Switch>
                <Route exact path='/nhanvien' component={() => <Menu staffs={this.state.staffs}/>} />
                <Route exact path='/nhanvien/:staffId' component={StaffWithId} />
            </Switch>
            <Footer />
      </div>
    );
  }
}

export default Main;