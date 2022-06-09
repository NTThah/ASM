import React from "react";
import {Card, CardTitle, CardBody, CardText } from "reactstrap";

const RenderDepartment = ({department}) => {
    return (
        <Card >
            <CardBody>
                <CardTitle>{department.name}</CardTitle>
                <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
            </CardBody>
        </Card>
    )
}

const Department = (props) => {
    const department = props.departments.map((department) => {
        return (
            <div key={department.id} className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
                <RenderDepartment department={department} />
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
                {department}
            </div>
        </div>
    )
}
export default Department;