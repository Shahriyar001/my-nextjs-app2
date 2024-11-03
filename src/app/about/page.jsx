import styles from "./About.module.css";

export const metadata = {
  title: "about Page",
  description: "this is about page",
};

const AboutPage = () => {
  return (
    <div>
      <h1 className={styles.heading}>This is about page</h1>
    </div>
  );
};

export default AboutPage;
