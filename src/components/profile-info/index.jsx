import React from "react";
import "./index.css";
import { Button } from "react-bootstrap";
import UpdateModal from "../update-modal";

const Index = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const { id, name, email, phone, username, website, company, address } =
    props.element;

  const handleDeleteOnClick = () => {
    props.deleteUser(id);
  };

  const handleUpdateOnClick = () => {
    setModalShow(true);
  };

  return (
    <div className="row d-flex justify-content-center align-items-center profile-card">
      <div
        className="card"
        style={{
          borderRadius: ".5rem",
          width: "42rem",
          border: "2px solid #DAE2B6",
        }}
      >
        <div className="row">
          <div
            className="col-md-4 gradient-custom text-center text-white"
            style={{
              borderTopLeftRadius: ".5rem",
              borderBottomLeftRadius: ".5rem",
            }}
          >
            <img
              src={`https://avatars.dicebear.com/v2/avataaars/${username}.png?options[mood][]=happy`}
              alt="Avatar"
              className="img-fluid my-5"
              style={{ width: "80px" }}
            />
            <h5>{name}</h5>
            <h6 className="text-muted">{username}</h6>
            {/* <p>Web Designer</p> */}
            {/* <i className="far fa-edit"></i> */}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6>Information</h6>
              <hr />
              <div className="row">
                <div className="col-6">
                  <h6>Email</h6>
                  <p className="text-muted">{email.substring(0, 9)}</p>
                </div>
                <div className="col-6">
                  <h6>Phone</h6>
                  <p className="text-muted">{phone}</p>
                </div>
                <div className="col-6">
                  <h6>Website</h6>
                  <p className="text-muted">{website}</p>
                </div>
                <div className="col-6">
                  <h6>Company</h6>
                  <p className="text-muted">{company.name}</p>
                </div>
              </div>
              <h6>Address</h6>
              <hr />
              <div className="row">
                <div className="col-6">
                  <h6>Suite</h6>
                  <p className="text-muted">{address.suite}</p>
                </div>
                <div className="col-6">
                  <h6>Street</h6>
                  <p className="text-muted">{address.street}</p>
                </div>
                <div className="col-6">
                  <h6>City</h6>
                  <p className="text-muted">{address.city}</p>
                </div>

                <div className="col-6">
                  <h6>Zipcode</h6>
                  <p className="text-muted">{address.zipcode}</p>
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <Button onClick={handleDeleteOnClick} variant="danger">
                  Delete
                </Button>
                <Button
                  onClick={handleUpdateOnClick}
                  variant="primary"
                  className="mx-3"
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        userId={id}
        updateUser={props.updateUser}
      />
    </div>
  );
};

export default Index;
