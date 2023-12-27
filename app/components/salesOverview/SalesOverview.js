import { Box } from "@chakra-ui/react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

import styles from "./salesOverview.module.css";

function SalesOverview() {
  return (
    <Box boxShadow="xl" p="6" rounded="md" className={styles.salesOverview}>
      <div className={styles.salesHeading}>
        <h1>Sales Overview</h1>
        <p>Showing overview Jan 2022 - Sep 2022</p>
      </div>
      <div className={styles.salesButton}>
        <button>View Transactions</button>
      </div>
      <div className={styles.salesDate}>
        <div className={styles.salesDateOne}>
          <p>1 Day</p>
        </div>
        <div className={styles.salesDateTwo}>
          <p>1 Week</p>
        </div>
        <div className={styles.salesDateThree}>
          <p>1 Year</p>
        </div>
      </div>
      <div className={styles.salesLine}></div>
      <div className={styles.salesChartCover}>
        <div className={styles.salesIconLeft}>
          <IoMdArrowDropleftCircle style={{ color: "#E4E4E4" }} />
        </div>
        <div className={styles.salesIconRight}>
          <IoMdArrowDroprightCircle style={{ color: "#E4E4E4" }} />
        </div>

        <div className={styles.salesChart}>
          <ul>
            <li>Jan</li>
            <li>Feb</li>
            <li>Mar</li>
            <li>Apr</li>
            <li>May</li>
            <li>Jun</li>
            <li>Jul</li>
            <li>Aug</li>
            <li>Sep</li>
          </ul>
        </div>
      </div>

      <div className={`${styles.sales} ${styles.salesBalance}`}>
        <h1>₦ 0.00</h1>
        <div className={styles.salesBalanceText}>
          <span>Balance</span> <CiCirclePlus className={styles.salesIcon} />
          0%
        </div>
      </div>
      <div className={`${styles.sales} ${styles.salesDeposit}`}>
        <h1>₦ 0.00</h1>
        <div className={styles.salesDepositText}>
          <span>Deposit</span> <CiCirclePlus className={styles.salesIcon} /> 0%
        </div>
      </div>
      <div className={`${styles.sales} ${styles.salesPurchase}`}>
        <h1>
          ₦ 0<span>.00</span>
        </h1>
        <div className={styles.salesPurchaseText}>
          <span> Purchase </span>
          <CiCirclePlus className={styles.salesIcon} /> 0%
        </div>
      </div>
      <div className={`${styles.sales} ${styles.salesWithdrawal}`}>
        <h1>₦ 0.00</h1>
        <div className={styles.salesWithdrawalText}>
          <span>Withdrawal</span> <CiCirclePlus className={styles.salesIcon} />{" "}
          0%
        </div>
      </div>
    </Box>
  );
}

export default SalesOverview;
