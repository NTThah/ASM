import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const RenderStaffDetail = ({ staff }) => {
  if (staff != null) {
    return (
      <Card>
        <CardBody className="row">
          <div className="col-12 col-md-4 col-lg-3 mt-2 mb-2">
            <CardImg width="100%" src={staff.image} alt={staff.name} />
          </div>
          <div className="col-12 col-md-8 col-lg-9 mt-2 mb-2">
            <CardTitle>Họ và tên: {staff.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {staff.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
          </div>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

const StaffList = (props) => {
  if (props.staff != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb className="ml-3">
            <BreadcrumbItem>
              <Link to="/nhanvien">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
          <hr />
        </div>
        <div>
          <RenderStaffDetail staff={props.staff} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default StaffList;
