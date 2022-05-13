import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.scss";
import { ArrowForwardIos} from "@material-ui/icons";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("https://netflix-clone-application-live.herokuapp.com/api/auth/register", { email,username, password });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <>    <header className="showcase">
        <div className="showcase-top">
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo"/>
            <button className="btn btn-rounded">Sign In</button>
        </div>
        <div className="showcase-content">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>All of Netflix, starting at just ₹ 199.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
           
            {!email ? (
          <div className="inputt">
            <input className="inp" type="email" placeholder="Email Address" ref={emailRef} />
            <button className="registerButtonn" onClick={handleStart}>
              Get Started <ArrowForwardIos className="ar"/>
            </button>
          </div>
        ) : (
          <form className="inputtt">
            <input className="new" type="username" placeholder="Username" ref={usernameRef} />
            <input className="new" type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
        </div>
    </header>

    <section className="style-cards">
        <div className="card-0">
            <img src="vid/2.jpg" alt="Netflix Mobile"/>
            <div className="desc-0">
                <h1>Create profiles for kids.</h1>
                <h3>Send kids on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
            </div>
        </div>
        <div className="card-1">
            <div className="desc-1">
                <h1>Enjoy on your TV.</h1>
                <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
            </div>
            <img src="vid/tv.png" alt="Netflix TV"/>
            <video className="video-1" autoPlay={true} playsInline muted loop controls><source src="vid/1.m4v" type="video/mp4"/></video>
        </div>
        <div className="card-2">
            <img src="vid/3.jpg" alt="Netflix Mobile"/>
            <div className="desc-2">
                <h1>Download your shows to watch offline.</h1>
                <h3>Save your favourites easily and always have something to watch.</h3>
            </div>
        </div>
        <div className="card-3">
            <div className="desc-3">
                <h1>Watch everywhere.</h1>
                <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
            </div>
            <img src="vid/4.png" alt="Device-Pile-In"/>
            <video className="video-2" autoPlay={true} playsInline muted loop controls><source src="vid/2.m4v" type="video/mp4"/></video>
        </div>
    </section>

    <section className="lastsec">
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <ul className="questions">
                <li>What is Netflix?</li>
                <li>How much does Netflix cost?</li>
                <li>Where can I watch?</li>
                <li>How do I cancel?</li>
                <li>What can I watch on Netflix?</li>
                <li>Is Netflix good for kids?</li>
            </ul>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input">
                <input type="email" name="email" placeholder="Email Address"/>
              <button>GET STARTED </button>
            </div>
        </div>
    </section>


    <footer className="footer">
        <p>Questions? Call 000-800-040-1843</p>
        <div className="footer-cols">
            <ul>
                <li><a href=" ">FAQ</a></li>
                <li><a href=" ">Investor Relations</a></li>
                <li><a href=" ">Privacy</a></li>
                <li><a href=" ">Speed Test</a></li>
            </ul>
            <ul>
                <li><a href=" ">Help Centre</a></li>
                <li><a href=" ">Jobs</a></li>
                <li><a href=" ">Cookie Preferences</a></li>
                <li><a href=" ">Watch for Free</a></li>
            </ul>
            <ul>
                <li><a href=" ">Account</a></li>
                <li><a href=" ">Ways to Watch</a></li>
                <li><a href=" ">Corporate Information</a></li>
                <li><a href=" ">Legal Notices</a></li>
            </ul>
            <ul>
                <li><a href=" ">Media Centre</a></li>
                <li><a href=" ">Terms of Use</a></li>
                <li><a href=" ">Contact Us</a></li>
                <li><a href=" ">Netflix Originals</a></li>
            </ul>
        </div>
    </footer>
    </>

  );
}