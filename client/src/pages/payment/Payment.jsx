import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./payment.scss";

export default function Payment() {
  const history = useHistory();

  const [book, setBook] = useState({
    name: "Basic",
    price: 199,
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_live_3HUHEm4BO1MSSJ",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "https://netflix-clone-razorpay.herokuapp.com/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "https://netflix-clone-razorpay.herokuapp.com/api/payment/order";
      const { data } = await axios.post(orderUrl, { amount: book.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (

      <div className="profiles-container">
        <div className="nav">
          <div className="nav__contents">
            <img
              className="nav__logo"
              onClick={() => history.push("/profile")}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </div>
        </div>

        <div className="book_container">
          <div className="plan">
            <p className="book_name">{book.name}</p>

            <p className="book_price">
              <span>&#x20B9; {book.price}</span>
            </p>
            <button onClick={handlePayment} className="buy_btn">
              sunscribe now
            </button>
          </div>
        </div>
      </div>
 
  );
}
