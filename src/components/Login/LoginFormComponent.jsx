import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router-dom';



const loginFormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address format").required("Email is required"),
    password: Yup.string().min(3, "Password must be 3 characters at minimum")
        .required("Password is required")
});

export class LoginFormComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            isSignedUp: false
        }
    }

    render() {
        if (this.state.isSignedUp) {
            return <Redirect to={{ pathname: "/Home" }} />;
        }
        return (
            <div>
                <Container fluid className="mt-5">
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 4 }}>
                            <Card>
                                <Card.Body>
                                    <Formik
                                        validationSchema={loginFormSchema}
                                        initialValues={{ email: "", password: "" }}
                                        onSubmit={(values, { setSubmitting, resetForm }) => {
                                            // When button submits form and form is in the process of submitting, submit button is disabled
                                            setSubmitting(true);
                                            this.setState({ email: values.email, password: values.password });
                                            // Resets form after submission is complete
                                            resetForm();
                                            // Sets setSubmitting to false after form is reset
                                            setSubmitting(false);
                                            axios.post(`https://reqres.in/api/login`, this.state)
                                                .then(res => {
                                                    console.log(res);
                                                    this.setState({ isSignedUp: true });
                                                })
                                                .catch(function (error) {
                                                    console.log(error);
                                                });

                                        }}>
                                        {({
                                            handleSubmit,
                                            handleChange,
                                            values,
                                            errors,
                                            isValid
                                        }) => (
                                                <Form noValidate onSubmit={handleSubmit}>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} value={values.email} isInvalid={!!errors.email} />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.email}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control name="password" type="password" placeholder="Enter Password" onChange={handleChange} value={values.password} isInvalid={!!errors.password} />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.password}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group controlId="btn" className="text-center">
                                                        <Button variant="dark" type="submit" disabled={!isValid}>
                                                            Login</Button>
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

export default LoginFormComponent
