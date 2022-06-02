import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, 
    CardTitle } from 'reactstrap';

class StaffList extends Component {
    

    render() {
        const staffs = this.props.
        staffs.map((staff) => {
            return (
                <div>
                    <Card key={staff.id}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            );

        })
        return (
            <div>{staffs}</div>
        )
    }
}

export default StaffList;