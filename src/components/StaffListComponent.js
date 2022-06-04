import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, 
    CardText, 
    CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

class StaffList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            selectedStaff: null,
            colum: "col-12 col-md-6 col-lg-4 mt-2 mb-2",
        }
    }

    onSelectedStaff(staff) {
        this.setState({selectedStaff: staff})
        this.props.onCloseText();
    }
    twoColum = () => {
        this.setState({
            colum: "col-12 col-md-6 col-lg-6 mt-2 mb-2"
        })
    }
    threeColum = () => {
        this.setState({
            colum: "col-12 col-md-6 col-lg-4 mt-2 mb-2"
        })
    }
    sixColum = () => {
        this.setState({
            colum: "col-12 col-md-6 col-lg-2 mt-2 mb-2"
        })
    }
    renderStaffDetail(staff) {
        if (staff != null) {
            return (
                <Card>
                    <CardBody>
                        <CardTitle>Họ tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return <div></div>
        }
    }


    render() {
        const colum = this.state.colum;
        const staffs = this.props
        .staffs.map((staff) => {
            return (
                <div className={colum}>
                    <Card key={staff.id} onClick={() => this.onSelectedStaff(staff)} className="border border-dark">
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );

        })
        return (
            <div>
                <button type="button" className='btn btn-danger m-3' onClick={this.twoColum}>2 colum</button>
                <button type="button" className='btn btn-danger m-3' onClick={this.threeColum}>3 colum</button>
                <button type="button" className='btn btn-danger m-3' onClick={this.sixColum}>6 colum</button>
                <div className="row">
                {staffs}
                </div>
                <div className="row">
                    <div className={colum}>
                        {this.renderStaffDetail(this.state.selectedStaff)}
                    </div>
                </div>
            </div>
        )
    }
}

export default StaffList;