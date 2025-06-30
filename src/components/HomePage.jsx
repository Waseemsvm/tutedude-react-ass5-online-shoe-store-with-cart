import homepageStyles from "../styles/Homepage.module.css";
export default function HomePage() {
  return (
    <div className={homepageStyles.homepage}>
      <p className={homepageStyles["homepage-text"]}>
        <span>👣 Your Next Step Starts Here</span> <br /> Browse, buy, and walk
        in confidence.
      </p>
    </div>
  );
}
