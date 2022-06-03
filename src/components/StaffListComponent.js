import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, 
    CardText, 
    CardTitle } from 'reactstrap';


class StaffList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            selectedStaff: null
        }
    }

    onSelectedStaff(staff) {
        this.setState({selectedStaff: staff})
        console.log(this.state)
    }
    renderStaffDetail(staff) {
        if (staff != null) {
            return (
                <Card>
                    <CardBody>
                        <CardTitle>Họ tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {staff.doB}</CardText>
                        <CardText>Ngày vào công ty: {staff.startDate}</CardText>
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
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            );

        })
        return (
            <div>
                <div className="row">
                {staffs}
                </div>
                <p>Bấm vào tên nhân viên để xem thông tin.</p>
                <div>
                    {this.renderStaffDetail(this.state.selectedStaff)}
                </div>
            </div>
        )
    }
}

export default StaffList;