import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText } from "reactstrap";

const RenderSlary = ({slary}) => {
    return (
        <Card className="border-dark">
            <CardBody>
                <Card className="row  flex-row">
                    <CardImg src={slary.image} className="col-6"/>
                    <h5 className="col-6 text-center">{slary.name}</h5>
                </Card>
                <CardText>Mã nhân viên: {slary.id}</CardText>
                        <CardText>Hệ số lương: {slary.salaryScale}</CardText>
                        <CardText>Số ngày làm thêm: {slary.overTime} </CardText>
                        <CardText className="bg-info pl-3 pt-2 pb-2 m-1">
                            Lương: {(slary.salaryScale * 3000000 + slary.overTime * 200000).toFixed(0)}
                        </CardText>
            </CardBody>
        </Card>
    )
}
const Slary = (props) => {
    const slary = props.staffs.map((slary) => {
        return (
            <div key={slary.id} className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
                <RenderSlary slary={slary} />

            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb className="ml-3">
                    <BreadcrumbItem>
                        <Link to="/nhanvien">Nhân viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>Bảng lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">{slary}</div>

        </div>
    )
}

export default Slary;