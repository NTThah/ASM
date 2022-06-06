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
  
    return (
      <div >
            <Header />
            <Switch>
                {/* <Route exact path='/nhanvien' component={ () => <StaffList staffs={this.state.staffs} />}/> */}
                <Route exact path='/nhanvien' component={() => <Menu staffs={this.state.staffs}/>} />
            </Switch>
            <Footer />
      </div>
    );
  }
}

export default Main;