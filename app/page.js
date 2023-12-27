import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";

import SalesOverView from "./components/salesOverview/SalesOverview";
import PropertyOverview from "./components/propertyOverview/propertyOverview";
import CustomerOveriew from "./components/customerOverview/customerOver";
import ListingOverview from "./components/listingOverview/ListingOverview";
import Outstanding from "./components/outstanding/Outstanding";
import TopSelling from "./components/topselling/TopSelling";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.welcome}>
        <div className={styles.welcomeHeader}>
          <Image
            src={"/images/hello.svg"}
            alt="hello image"
            width={30}
            height={30}
          />
          <h1>Hi Ahmed</h1>
        </div>
        <p>Welcome to your Dashboard</p>
      </div>

      <SalesOverView />
      <PropertyOverview />
      <CustomerOveriew />
      <ListingOverview />
      <Outstanding />
      <TopSelling />
    </main>
  );
}
