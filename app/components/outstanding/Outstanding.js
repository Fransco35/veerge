import { Box } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";

import styles from "./outstanding.module.css";

function Outstanding() {
  return (
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
  );
}

export default Outstanding;
