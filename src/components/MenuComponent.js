import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

const RenderMenuItem = ({staff}) => {
    return (
        <Card className="border-dark text-center">
            <CardImg src={staff.image} atl={staff.name} />
            <CardTitle>{staff.name}</CardTitle>
        </Card>
    )
}

const Menu = (props) => {
    const staffs = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-12 col-md-6 col-lg-2 mt-2 mb-2" >
                <RenderMenuItem staff={staff} />
            </div>
        )
    });
    return (
        <div className='container'>
            <div className='row'>
                {staffs}
            </div>
        </div>
    );
};

export default Menu;