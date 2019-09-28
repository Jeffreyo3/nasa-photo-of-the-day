import React from "react";
import { Card, CardTitle, CardText, CardImg, Button, CardBody, UncontrolledCollapse, Badge, Container, Row, Col } from 'reactstrap';


function CardCreator(props) {

    return (
        <div>

            <Container className="buttonContent">
                <Row>
                    <Col><CardTitle>Title: {props.title}</CardTitle></Col>
                    <Col>
                        <Button color="secondary" id="toggler" style={{ padding: '1% 3%', margin: '.25% auto'}}>View Desciption
                        </Button>
                    </Col>
                    <Col>Date: {props.date}</Col>
                </Row>
            </Container>

            <UncontrolledCollapse toggler="#toggler">
                <Card>                
                    <CardBody>
                    {props.description}
                    </CardBody>
                </Card>

            </UncontrolledCollapse>

            <CardImg src={props.mediaSRC} alt="NASA Image of the Day" />
        </div>
    );
}

export default CardCreator;
