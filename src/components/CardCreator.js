import React from "react";
import { Card, CardTitle, CardImg, Button, CardBody, UncontrolledCollapse, Container, Row, Col } from 'reactstrap';


function CardCreator(props) {


    return (
        <div className="imageContainer">

            <Container className="buttonContent">
                <Row>
                    <Col>
                        <CardTitle style={{color: 'white'}}>Title: {props.image.title}</CardTitle>
                    </Col>
                    <Col>
                        <Button color="secondary" id="toggler" style={{ padding: '1% 3%', margin: '.25% auto'}}>View Desciption
                        </Button>
                    </Col>
                    <Col style={{color: 'white'}}>Date: {props.image.date}</Col>
                </Row>
            </Container>

            <UncontrolledCollapse toggler="#toggler">
                <Card>                
                    <CardBody>
                    {props.image.explanation}
                    </CardBody>
                </Card>

            </UncontrolledCollapse>

            <CardImg src={props.image.hdurl} alt="NASA Image of the Day" style={{ padding: '3px', border: '5px solid grey', borderRadius: '10px'}} />
        </div>
    );
}

export default CardCreator;
