import { Box } from "@chakra-ui/react";
import { FaHouse } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./propertyOverview.module.css";

function PropertyOverview() {
  return (
    <Box boxShadow="md" rounded="md" className={styles.propertyOverview}>
      <div className={styles.propertyHeading}>
        <FaHouse style={{ color: "#4545FE" }} />
        <h2>Property Overview</h2>
      </div>
      <div className={styles.propertyCta}>
        <p>View all</p> <MdKeyboardDoubleArrowRight />
      </div>
      <div className={styles.propertyMetrics}>
        <div className={styles.propertyDetails}>
          <h1>0</h1> <p>Total</p>
        </div>
        <div className={styles.propertyDetails}>
          <h1>0</h1> <p>Available</p>
        </div>
        <div className={styles.propertyDetails}>
          <h1>0</h1> <p>Sold Out</p>
        </div>
      </div>
    </Box>
  );
}

export default PropertyOverview;
