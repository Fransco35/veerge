import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
// sales overview
import { Box } from "@chakra-ui/react";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { FaHouse } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// sales overview

// listing overview
import { BsBookmarkDash } from "react-icons/bs";
// listing overview

// outstanding overview
import { IoIosArrowForward } from "react-icons/io";
// outstanding overview

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
            <span>Deposit</span> <CiCirclePlus className={styles.salesIcon} />{" "}
            0%
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
            <span>Withdrawal</span>{" "}
            <CiCirclePlus className={styles.salesIcon} /> 0%
          </div>
        </div>
      </Box>
      ;
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
      {/* listing overview */}
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
      {/* listing overview */}
      {/* total outstanding */}
      <Box boxShadow="md" rounded="md" className={styles.totaloutstanding}>
        <div className={styles.outstandingCta}>
          view all <IoIosArrowForward />
        </div>
        <div className={styles.outstandingBalance}>
          <h2>
            ₦ 0.<span>00</span>
          </h2>
          <span>Total Outstanding Balance</span>
          <div className={styles.outstandingImg}>
            <div className={styles.outstandingImgCover}>
              <Image
                src={"/images/image.svg"}
                alt="image"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className={styles.outstandingText}>
          <h1>None</h1>
          <div className={styles.outstandingTextBal}>
            <p>₦ 0.00</p>
            <p>Outstanding Balance</p>
          </div>
        </div>
        <div className={styles.outstandingPagination}>
          {" "}
          <span>1/5 </span> <IoMdArrowDropleftCircle size={20} />
          <IoMdArrowDroprightCircle size={20} />
        </div>
      </Box>
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
    </main>
  );
}
