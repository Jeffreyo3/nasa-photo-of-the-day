import React from "react";
import MediaCheck from './MediaCheck.js';
import { Card, CardTitle, CardImg, Button, CardBody, UncontrolledCollapse, Container, Row, Col } from 'reactstrap';


function CardCreator(props) {


    return (
        <div>

            <Container className="buttonContent">
                <Row>
                    <Col>
                        <CardTitle style={{color: 'white'}}>Title: {props.title}</CardTitle>
                    </Col>
                    <Col>
                        <Button color="secondary" id="toggler" style={{ padding: '1% 3%', margin: '.25% auto'}}>View Desciption
                        </Button>
                    </Col>
                    <Col style={{color: 'white'}}>Date: {props.date}</Col>
                </Row>
            </Container>

            <UncontrolledCollapse toggler="#toggler">
                <Card>                
                    <CardBody>
                    {props.description}
                    </CardBody>
                </Card>

            </UncontrolledCollapse>

            <CardImg src={props.mediaSRC} alt="NASA Image of the Day" style={{ padding: '3px', border: '5px solid grey', borderRadius: '10px'}} />
        </div>
    );
}

export default CardCreator;
