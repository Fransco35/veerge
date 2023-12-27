import { Box } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./topselling.module.css";

function TopSelling() {
  return (
    <Box boxShadow="md" rounded="md" className={styles.topSelling}>
      <div className={styles.topSellingHeader}>
        <h2>Top Selling</h2>
        <h1>₦ 0.00</h1>
        <p>Total Sold</p>
      </div>
      <div className={styles.topSellingBody}>
        <div className={styles.topSellingImg}>
          <div className={styles.topSellingImgCover}>
            <Image
              src={"/images/image.svg"}
              alt="image"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className={styles.topSellingText}>
          <h1>None</h1>
          <p>
            <span>0</span>
            <span>Whole units sold</span>
          </p>
        </div>
      </div>
    </Box>
  );
}

export default TopSelling;
