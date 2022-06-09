import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

const RenderSlary = ({slary}) => {
    return (
        <Card>
            <CardBody>
                <CardText>{slary.name}</CardText>
            </CardBody>
        </Card>
    )
}
const Slary = (props) => {
    const slary = props.staffs.map((slary) => {
        return (
            <div key={slary.id}>
                <RenderSlary slary={slary} />

            </div>
        )
    })
    return (

        <div>{slary}</div>
    )
}

export default Slary;