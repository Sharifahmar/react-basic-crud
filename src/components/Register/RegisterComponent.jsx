import React, { Component } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Container, Col, Card, Form, Button, Row } from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const registerFormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address format").required("Email is required"),
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required")
});


export class RegisterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            fname: "",
            lname: "",
            password: "abc"
        }
    }

    render() {
        return (
            <div>
                <Container fluid className="mt-5">
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 4 }}>
                            <Card>
                                <Card.Body>
                                    <Formik
                                        validationSchema={registerFormSchema}
                                        initialValues={{ email: "", fname: "", lname: "" }}
                                        onSubmit={(values, { setSubmitting, resetForm }) => {
                                            // When button submits form and form is in the process of submitting, submit button is disabled
                                            setSubmitting(true);
                                            this.setState({ email: values.email, fname: values.fname, lname: values.lname });

                                            axios.post(`https://reqres.in/api/register`, this.state)
                                                .then(res => {
                                                    console.log(res);
                                                    this.props.history.push('/Home');
                                                })
                                                .catch(function (error) {
                                                    console.log(error);
                                                });

                                            // Resets form after submission is complete
                                            resetForm();
                                            // Sets setSubmitting to false after form is reset
                                            setSubmitting(false);


                                        }}>
                                        {({
                                            handleSubmit,
                                            handleChange,
                                            values,
                                            errors,
                                            isValid
                                        }) => (
                                                <Form noValidate onSubmit={handleSubmit}>
                                                    <Form.Group controlId="formBasicfname">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control name="fname" type="text" placeholder="Enter First Name" onChange={handleChange} value={values.fname} isInvalid={!!errors.fname} />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.fname}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicLname">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control name="lname" type="text" placeholder="Enter Last Name" onChange={handleChange} value={values.lname} isInvalid={!!errors.lname} />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.lname}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} value={values.email} isInvalid={!!errors.email} />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.email}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group controlId="btn" className="text-center">
                                                        <Button variant="dark" type="submit" disabled={!isValid}>
                                                            Register</Button>
                                                    </Form.Group>
                                                </Form>
                                            )}
                                    </Formik>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(RegisterComponent)
