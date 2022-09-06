import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { PencilFill, GeoAlt } from "react-bootstrap-icons";
import { storage } from '../fire';
import "../css/Account.css";
import Spinner from 'react-bootstrap/Spinner';

export default function Account() {
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [showImage, setShowImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [details, setDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        country: "",
    })

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);

    const FormHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);

    }

    const changeDetails = async (e) => {
        e.preventDefault();
    }


    const uploadFiles = (file) => {
        const uploadTask = storage.ref(`files/${file.name}`).put(file);
        uploadTask.on('state_changed', snapshot => {
        },
            (error) => console.log(error),
            () => {
                storage.ref("files")
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        setURL(url);
                        setIsLoading(false);
                    })
            }

        )
    }

    return (
        <div className="account-main-cont">
            <div style={{ backgroundColor: "#D8F0E6", minHeight: 'calc(100vh - 74px)' }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem", paddingTop: "2rem", paddingBottom: "2rem" }}>
                    <Container className="account-container">
                        <Row>
                            <Col>

                                <h1 className="account-main-head">Your Account Details</h1>
                                <div>
                                    <div>
                                        <form onSubmit={FormHandler}>
                                            {/* <img src="https://rentkh.com/assets/avatar.jpeg" alt="Avatar_Image" width="150" height="150" onClick={handleShow} /> */}
                                        </form>
                                        {url !== "" ? <img src={url} width="180" height="180" onClick={handleShow} className="profile-pic" /> :
                                            <img src="https://rentkh.com/assets/avatar.jpeg" width="180" height="180" onClick={handleShow} className="profile-pic" />}
                                        {isLoading && <Spinner animation="grow" variant="success" className="spinner" />}
                                    </div>
                                    <div className="heading-info">
                                        <h4>{details.firstname || details.lastname !== "" ? <h4>{details.firstname} {details.lastname}</h4> : "Harika Kommuri"}</h4>
                                        <GeoAlt className="geo-alt" />
                                        <h4 className="country-head">{details.country !== "" ? <h4>{details.country}</h4> : "Germany"}</h4>
                                    </div>
                                </div>
                                <hr />

                                <div className="details-div">
                                    <div className="firstname">
                                        <h5>First Name: {details.firstname !== "" ? <h5 className="dis-in">{details.firstname}</h5> : "Harika"}</h5>
                                    </div>
                                    <div className="lastname">
                                        <h5>Last Name : {details.lastname !== "" ? <h5 className="dis-in">{details.lastname}</h5> : "Kommuri"}</h5>
                                    </div>
                                    <div className="email">
                                        <h5>Email Address: {details.email !== "" ? <h5 className="dis-in">{details.email}</h5> : "harikakommuri35@gmail.com"}</h5>
                                    </div>
                                    <div className="password">
                                        <h5>Password: {details.password !== "" ? <h5 className="dis-in">{details.password}</h5> : "********"}</h5>
                                    </div>
                                    <div className="phone">
                                        <h5>Phone Number: {details.phone !== "" ? <h5 className="dis-in">{details.phone}</h5> : "+49 9999999999"}</h5>
                                    </div>
                                    <div className="country">
                                        <h5>Country: {details.country !== "" ? <h5 className="dis-in">{details.country}</h5> : "Germany"}</h5>
                                    </div>
                                </div>
                                <PencilFill onClick={handleShow1} className="details-pencil" />
                            </Col>
                        </Row>
                    </Container>


                    <div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="profile-pic-modal-title">Upload Image</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="profile-pic-modal">
                                <form onSubmit={FormHandler}>
                                    <p>Please Click below to choose a file.</p>
                                    <input
                                        type="file"
                                        onChange={(e) => setShowImage(e.target.files[0])}
                                        className="profile-pic-file"
                                    />
                                    <Button variant="success" onClick={() => { handleClose(); setIsLoading(true); }} type="submit" className="profile-pic-button">
                                        Change Profile Picture
                                    </Button>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>


                <div>
                    <Modal show={show1} onHide={handleClose1} className="details-modal">
                        <Modal.Header closeButton>
                            <Modal.Title className="details-modal-title">Change Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={changeDetails}>
                                <div style={{ display: "flex" }}>
                                    <div style={{ flexDirection: "column" }}>
                                        <label className="details-modal-label">First Name</label>
                                        <input
                                            type="text"
                                            value={details.firstname}
                                            onChange={(e) => setDetails({ ...details, firstname: e.target.value })}
                                        />
                                    </div>

                                    <div style={{ flexDirection: "column" }}>
                                        <label className="details-modal-label">Last Name</label>
                                        <input
                                            type="text"
                                            value={details.lastname}
                                            onChange={(e) => setDetails({ ...details, lastname: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: "flex", marginTop: "1.5rem" }}>
                                    <div style={{ flexDirection: "column", width: "260px" }}>
                                        <label className="details-modal-label">Email Address</label>
                                        <input
                                            type="email"
                                            value={details.email}
                                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                                        />
                                    </div>

                                    <div style={{ flexDirection: "column" }}>
                                        <label className="details-modal-label">Password</label>
                                        <input
                                            type="password"
                                            value={details.password}
                                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: "flex", marginTop: "1.5rem" }}>
                                    <div style={{ flexDirection: "column", width: "260px" }}>
                                        <label className="details-modal-label">Phone Number</label>
                                        <input
                                            type="text"
                                            value={details.phone}
                                            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                                        />
                                    </div>

                                    <div style={{ flexDirection: "column" }}>
                                        <label className="details-modal-label">Country</label>
                                        <input
                                            type="text"
                                            value={details.country}
                                            onChange={(e) => setDetails({ ...details, country: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <Button variant="success" onClick={handleClose1} type="submit" className="details-modal-button">
                                    Save Changes
                                </Button>
                            </form>
                        </Modal.Body >
                    </Modal >
                </div >
            </div >

        </div >
    );
}