import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//To hold links and footer info
const Footer =() => {
    return(
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Daydreamer : Style Remade
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer