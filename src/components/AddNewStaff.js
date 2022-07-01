import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  Row,
  Col,
  ModalBody,
  Label,
  Button,
  Form,
  FormGroup,
  Input,
  FormFeedback,
} from "reactstrap";
// import { Control, LocalForm, Errors } from "react-redux-form";

class AddNewStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "Dept01",
      annualLeave: "",
      overTime: "",
      salary: "",
      image: "/assets/images/alberto.png",
      touched: {
        doB: false,
        name: false,
        startDate: false,
      },
    };
  }
  validate(name, doB, startDate) {
    const errors = {
      name: "",
      doB: "",
      startDate: "",
    };
    if (this.state.touched.name && name.length < 3) {
      errors.name = "Yêu cầu nhập hơn 2 ký tự";
    } else if (this.state.touched.name && name.length > 30)
      errors.name = "Yêu cầu nhập ít hơn 30 ký tự";
    if (this.state.touched.doB && doB.length < 3) errors.doB = "Yêu cầu nhập";
    if (this.state.touched.startDate && startDate.length < 3)
      errors.startDate = "Yêu cầu nhập";
    return errors;
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
  handleSubmit = (event) => {
    if (
      this.state.name === "" ||
      this.state.doB === "" ||
      this.state.startDate === ""
    ) {
      event.preventDefault();
    } else {
      this.props.onSubmit(this.state);
      event.preventDefault();
    }
  };
  handelBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  render() {
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate
    );
    return (
      <div>
        <Modal isOpen={this.isOpenModal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thêm Nhân viên</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup className="row">
                <Label htmlFor="name" md={4}>
                  Họ tên
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Họ và tên"
                    className="form-control"
                    onBlur={this.handelBlur("name")}
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    placeholder="dd/mm/yyyy"
                    className="form-control"
                    onBlur={this.handelBlur("doB")}
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                    value={this.state.doB}
                    onChange={this.onChange}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    placeholder="dd/mm/yyyy"
                    className="form-control"
                    onBlur={this.handelBlur("startDate")}
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                    value={this.state.startDate}
                    onChange={this.onChange}
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label md={4}>Phòng ban</Label>
                <Col md={8}>
                  <Input
                    type="select"
                    id="department"
                    name="department"
                    className="form-control"
                    onChange={this.onChange}
                  >
                    <option value="Dept01">Sale</option>
                    <option value="Dept02">HR</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">IT</option>
                    <option value="Dept05">Finance</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Input
                    type="number"
                    id="salaryScale"
                    name="salaryScale"
                    placeholder="1"
                    className="form-control"
                    value={this.state.salaryScale}
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Input
                    type="number"
                    id="annualLeave"
                    name="annualLeave"
                    placeholder="0"
                    className="form-control"
                    value={this.state.annualLeave}
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Input
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
              </FormGroup>
              <FormGroup className="row">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddNewStaff;
