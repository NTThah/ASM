import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, 
    CardTitle } from 'reactstrap';

class StaffList extends Component {
    

    render() {
        const staffs = this.props.
        staffs.map((staff) => {
            return (
                <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
                    <Card key={staff.id}>
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
            </div>
        )
    }
}

export default StaffList;