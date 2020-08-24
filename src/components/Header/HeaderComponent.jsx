import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to="/Home">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    React Bootstrap
                    </Navbar.Brand>
                </Link>
            </Navbar>
        </div>
    )
}

export default HeaderComponent
