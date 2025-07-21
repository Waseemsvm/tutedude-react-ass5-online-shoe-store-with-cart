import homepageStyles from "../styles/Homepage.module.css";
export default function HomePage() {
  return (
    <div className={homepageStyles.homepage}>
      <div className="test-cont">
        <div className="testimonial">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            “Absolutely love the comfort and style!” I bought a pair of sneakers
            and was blown away by how comfortable they are. Plus, they look
            fantastic. Will definitely be shopping here again! <br /> — Ritika
            S., Bangalore
          </p>
        </div>

        <div className="testimonial">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            “Great service and quality!” My shoes arrived quickly, beautifully
            packed, and exactly as shown on the website. The fit is perfect.
            Highly recommend this store. <br /> — Anil M., Pune
          </p>
        </div>

        <div className="testimonial">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            “Perfect for work and play.” I needed something stylish yet
            comfortable for daily wear — these shoes nailed it. Super durable
            and get compliments all the time! <br /> — Nisha R., Mumbai
          </p>
        </div>
      </div>
    </div>
  );
}
