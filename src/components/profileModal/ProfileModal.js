import React from "react";
import "./ProfileModal.css";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  if (!modalOpened) return null; // Don't render anything if the modal is not open

  return (
    <div className="modal-overlay" onClick={() => setModalOpened(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form className="infoForm">
          <h3>Your info</h3>

          <div>
            <input
              type="text"
              className="infoInput"
              name="FirstName"
              placeholder="First Name"
            />

            <input
              type="text"
              className="infoInput"
              name="LastName"
              placeholder="Last Name"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="worksAT"
              placeholder="Works at"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="livesIN"
              placeholder="Lives in"
            />

            <input
              type="text"
              className="infoInput"
              name="Country"
              placeholder="Country"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Relationship Status"
            />
          </div>

          {/* <div> */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              Profile Image
              <input type="file" name="profileImg" />
            </div>
            <div>
              Cover Image
              <input type="file" name="coverImg" />
            </div>
          </div>
          {/* </div> */}

          <button className="button infoButton">Update</button>
        </form>
        <button
          className="button closeButton"
          onClick={() => setModalOpened(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
