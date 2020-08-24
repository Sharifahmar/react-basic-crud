import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ErrorComponent = () => {
    return (
        <div>
            <Row>
                <Col md={{ span: 12 }} className="text-center">
                    <h3>Oops..!! Page not found</h3>
                </Col>
            </Row>
        </div>
    )
}

export default ErrorComponent