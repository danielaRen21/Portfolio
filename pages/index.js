import ResponsiveAppBar from "../components/header";
import GridPresentation from "../components/landing/Grid";
import styles from "../styles/Landing.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <ResponsiveAppBar /> */}
      <GridPresentation />
    </div>
  );
}
