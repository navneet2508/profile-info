import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProfileInfo from "../profile-info";
import axios from "axios";
import "./index.css";
import Spinner from "../spinner";

const Index = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteUser = (id) => {
    const remainingProfiles = profileData.filter((item) => item.id !== id);
    setProfileData(remainingProfiles);
  };

  const updateUser = (id, userProfile) => {
    const updatedProfile = profileData.map((item) => {
      if (item.id === id) {
        return { ...item, ...userProfile };
      }
      return item;
    });
    setProfileData(updatedProfile);
  };

  return (
    <div className="main-section">
      <h1>User&apos;s Profile</h1>
      {profileData.length ? (
        <Row className="py-4 main-section--element">
          {profileData.map((element) => {
            return (
              <Col key={element.id} md={6} xs={12} sm={12} className="my-3">
                <ProfileInfo
                  element={element}
                  deleteUser={deleteUser}
                  updateUser={updateUser}
                />
              </Col>
            );
          })}
        </Row>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Index;
