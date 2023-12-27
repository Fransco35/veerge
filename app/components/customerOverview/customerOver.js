import { Box } from "@chakra-ui/react";
import { FaHouse } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./customerOverview.module.css";
function CustomerOveriew() {
  return (
    <Box boxShadow="md" rounded="md" className={styles.customersOverview}>
      <div className={styles.customersHeading}>
        <FaHouse style={{ color: "#4545FE" }} />
        <h2>Customers Overview</h2>
      </div>
      <div className={styles.customersCta}>
        <p>View all</p> <MdKeyboardDoubleArrowRight />
      </div>
      <div className={styles.customersMetrics}>
        <div className={styles.customersDetails}>
          <h1>0</h1> <p>Total</p>
        </div>
        <div className={styles.customersDetails}>
          <h1>0</h1> <p>New</p>
        </div>
        <div className={styles.customersDetails}>
          <h1>0</h1> <p>Active</p>
        </div>
        <div className={styles.customersDetails}>
          <h1>0</h1> <p>Inactive</p>
        </div>
      </div>
    </Box>
  );
}

export default CustomerOveriew;
