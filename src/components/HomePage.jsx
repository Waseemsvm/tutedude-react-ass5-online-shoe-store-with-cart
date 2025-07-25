import { Link } from "react-router";
import homepageStyles from "../styles/Homepage.module.css";
import truckIcon from "../assets/symbols/truck.svg";
export default function HomePage() {
  return (
    <>
      <div className={homepageStyles.homepage}></div>

      <div className="feat">
        <h2>💥 Why Choose Us?</h2>
        <ul>
          <li>
            ✔️ Wide Range of Styles - From sneakers to sandals, heels to loafers
          </li>
          <li>✔️ Top-Quality Materials - Built for comfort and durability </li>
          <li>✔️ Affordable Prices - Fashion that fits your budget</li>
          <li>✔️ Fast Shipping & Easy Returns - Because your time matters</li>
        </ul>
      </div>

      <div className="test-cont">
        <div className="testimonial">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            “Absolutely love the comfort and style!” I bought a pair of sneakers
            and was blown away by how comfortable they are. Plus, they look
            fantastic. Will definitely be shopping here again! <br />{" "}
          </p>
          <span className="author">— Ritika S., Bangalore</span>
        </div>

        <div className="testimonial">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            “Great service and quality!” My shoes arrived quickly, beautifully
            packed, and exactly as shown on the website. The fit is perfect.
            Highly recommend this store. <br />{" "}
          </p>
          <span className="author">— Anil M., Pune</span>
        </div>

        <div className="testimonial">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            “Perfect for work and play.” I needed something stylish yet
            comfortable for daily wear — these shoes nailed it. Super durable
            and get compliments all the time! <br />{" "}
          </p>
          <span className="author">— Nisha R., Mumbai</span>
        </div>
      </div>
      <div className="loc">
        <img src={truckIcon} alt="truck-icon" />
        <p>
          We now ship over 200 locations worldwide <br />
          <strong>
            Shop your favorite brands &amp; send to friends &amp; family around
            the globe
          </strong>
        </p>
      </div>
      <div className="footer">
        <nav>
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
        </nav>
        <div className="copy">@Copyright Waseem Akram P</div>
      </div>
    </>
  );
}
