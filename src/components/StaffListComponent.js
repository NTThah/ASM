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
            closeText: true
        }
    }

    onSelectedStaff(staff) {
        this.setState({selectedStaff: staff})
        this.props.onCloseText();
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
        const staffs = this.props
        .staffs.map((staff) => {
            return (
                <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
                    <Card key={staff.id} onClick={() => this.onSelectedStaff(staff)} >
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );

        })
        return (
            <div>
                <div className="row">
                {staffs}
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
                        {this.renderStaffDetail(this.state.selectedStaff)}
                    </div>
                </div>
            </div>
        )
    }
}

export default StaffList;