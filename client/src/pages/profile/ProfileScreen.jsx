import "./profileScreen.scss";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";

function ProfileScreen() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  return (
    <div className="profileScreen">
      <div className="nav">
        <div className="nav__contents">
          <img
            className="nav__logo"
            onClick={() => history.push("/")}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="profileScreen__body">
        <h1 className="h1">Edit Profile</h1>
        <div className="profileScreen__info">
          <img className="avatarimg" src="vid/blueIcon.png" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <div className="subs">
                <h3> Basic Plan </h3>
                <p>
                  <span style={{ color: "black" }}> Rs</span> Rs 199
                </p>
                <Link to="/payment" className="sub_button">
                  Subscribe Now
                </Link>
              </div>

              <div className="subs">
                <h3>Standard Plan</h3>
                <p>Rs 299</p>
                <Link to="/payment" className="sub_button">
                  Subscribe Now
                </Link>
              </div>
              <div className="subs">
                <h3>Premium Plan</h3>
                <p>Rs 599</p>
                <Link to="/payment" className="sub_button">
                  Subscribe Now
                </Link>
              </div>
              <div className="empty"></div>
              <hr />
              <button
                onClick={() => history.push("/")}
                className="profileScreen__signOut"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
