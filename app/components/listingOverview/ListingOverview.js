import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { BsBookmarkDash } from "react-icons/bs";
import styles from "./listingOverview.module.css";
function ListingOverview() {
  return (
    <Box boxShadow="md" rounded="md" className={styles.listingOverview}>
      <h2>Listing Overview</h2>
      <div className={styles.listingView}>
        <p>Most viewed</p>
        <div className={styles.listingImg}>
          <div className={styles.listingImgCover}>
            <Image
              src={"/images/image.svg"}
              alt="image"
              width={25}
              height={25}
            />
          </div>

          <h1>None</h1>
        </div>
      </div>
      <div className={styles.listingShared}>
        <p>Most shared</p>
        <div className={styles.listingImg}>
          <div className={styles.listingImgCover}>
            <Image
              src={"/images/image.svg"}
              alt="image"
              width={25}
              height={25}
            />
          </div>
          <h1>None</h1>
        </div>
      </div>
      <div className={styles.listingWatchlist}>
        <p>Most Watched</p>

        <div className={styles.listingImg}>
          <div className={styles.listingImgCover}>
            <Image
              src={"/images/image.svg"}
              alt="image"
              width={30}
              height={30}
            />
          </div>
          <h1>None</h1>
        </div>
        <div className={styles.listingNum}>
          <h1>0</h1>
          <p>Number of watchlists</p>
          <BsBookmarkDash size={25} className={styles.listingIcon} />
        </div>
      </div>
    </Box>
  );
}

export default ListingOverview;
