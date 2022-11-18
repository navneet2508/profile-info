import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Index = (props) => {
  const [userProfile, setUserProfile] = React.useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleOnChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.updateUser(props.userId, userProfile);
    props.onHide();
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={userProfile.name}
                onChange={handleOnChange}
                name="name"
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={userProfile.email}
                onChange={handleOnChange}
                name="email"
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                value={userProfile.phone}
                onChange={handleOnChange}
                name="phone"
                type="phone"
                placeholder="Enter Phone"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                value={userProfile.website}
                onChange={handleOnChange}
                name="website"
                type="text"
                placeholder="Enter Website"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleOnSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Index;
