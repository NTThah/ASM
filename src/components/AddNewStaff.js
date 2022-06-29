import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  Row,
  Col,
  ModalBody,
  Label,
  Button,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
class AddNewStaff extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: "",
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: "",
      image: "/assets/images/alberto.png",
    };
  }
  isOpenModal = () => {
    this.props.isOpenModal();
  };
  toggleModal = () => {
    this.props.isOpenModal();
  };
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div>
        <Modal isOpen={this.isOpenModal} toggle={this.toggleModal}>
          <ModalHeader>
            <Row>
              <Col md={10}>
                <h3 className="panel-title">Thêm Nhân viên</h3>
              </Col>
              <Col md={2}>
                <span className="fa fa-times-circle text-right ml-5"></span>
              </Col>
            </Row>
          </ModalHeader>
          <ModalBody onSubmit={this.handleSubmit}>
            <LocalForm>
              <Row className="form-group">
                <Label htmlFor="name" md={4}>
                  Họ tên
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Họ và tên"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Control.text
                    type="date"
                    model=".doB"
                    id="doB"
                    name="doB"
                    placeholder="dd/mm/yyyy"
                    className="form-control"
                    value={this.state.doB}
                    onChange={this.onChange}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Control.text
                    type="date"
                    model=".startDate"
                    id="startDate"
                    name="startDate"
                    placeholder="dd/mm/yyyy"
                    className="form-control"
                    value={this.state.startDate}
                    onChange={this.onChange}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={4}>Phòng ban</Label>
                <Col md={8}>
                  <Control.select
                    model=".department"
                    id="department"
                    name="department"
                    className="form-control"
                  >
                    <option>Sale</option>
                    <option>IT</option>
                    <option>HR</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Control.text
                    type="number"
                    model=".salaryScale"
                    id="salaryScale"
                    name="salaryScale"
                    placeholder="1"
                    className="form-control"
                    value={this.state.salaryScale}
                    onChange={this.onChange}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Control.text
                    type="number"
                    model=".annualLeave"
                    id="annualLeave"
                    name="annualLeave"
                    placeholder="0"
                    className="form-control"
                    value={this.state.annualLeave}
                    onChange={this.onChange}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Control.text
                    type="number"
                    model=".overTime"
                    id="overTime"
                    name="overTime"
                    placeholder="0"
                    className="form-control"
                    value={this.state.overTime}
                    onChange={this.onChange}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddNewStaff;
