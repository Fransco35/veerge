import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.welcome}>
        <div className={styles.welcomeHeader}>
          <Image
            src={"/images/hello.svg"}
            alt="hello image"
            width={40}
            height={40}
          />
          <h1>Hi Ahmed</h1>
        </div>
        <p>Welcome to your Dashboard</p>
      </div>

      <div className={styles.propertyOverview}>property overview</div>
      <div className={styles.customersOverview}>customers overview</div>
      <div className={styles.listingOverview}>listing overview</div>
      <div className={styles.totaloutstanding}> total outstanding</div>
      <div className={styles.topSelling}>top selling</div>
    </main>
  );
}
