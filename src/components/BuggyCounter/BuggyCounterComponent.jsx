import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const BuggyCounterComponent = () => {
    const [counter, setCounter] = useState(0);

    if (counter === 3) {
        // Simulate a JS error
        throw new Error('I crashed!');
    }

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 12 }}>
                        <p>
                            <b>
                            This is an example of error boundaries in React 16.
                            <br /><br />
                            Click on the numbers to increase the counters.
                            <br />
                            The counter is programmed to throw when it reaches 3. This simulates a JavaScript error in a component.
                        </b>
                        </p>
                        <hr />

                        <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default BuggyCounterComponent
