import Image from "next/image";
import styles from "./header.module.css";
// navone
import { RxAvatar } from "react-icons/rx";
import { MdOutlineDateRange } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoTriangleUp } from "react-icons/go";
// navtwo
import { HiHome } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TfiWallet } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navOne}>
        <div className={styles.navLogo}>
          <Image
            src={"/images/dashboardLogo.svg"}
            alt="veerge logo"
            width={100}
            height={100}
          />

          <p>For Mainstone</p>
        </div>
        <div className={styles.iconset}>
          <CiSquarePlus size={30} />
          <MdOutlineDateRange size={30} />
          <IoIosNotificationsOutline size={30} />
        </div>
        <div className={styles.avatar}>
          <RxAvatar size={50} />
          <p className={styles.avatarName}>Ahmed Ali</p>
          <GoTriangleUp size={25} />
        </div>
      </div>
      <div className={styles.navTwo}>
        <div className={styles.dashboardNav}>
          <div className={`${styles.navItem} ${styles.navItemOne}`}>
            <HiHome />
            <p>Dashboard</p>
          </div>
          <div className={`${styles.navItem} ${styles.navItemTwo}`}>
            <IoLocationOutline />
            <p>Listings</p>
          </div>
          <div className={` ${styles.navItem} ${styles.navItemThree}`}>
            <FaRegUser />
            <p>Users</p>
          </div>
          <div className={`${styles.navItem} ${styles.navItemFour}`}>
            <TfiWallet />
            <p>Account</p>
          </div>
          <div className={`${styles.navItem} ${styles.navItemFive}`}>
            <SlCalender />
            <p>Request</p>
          </div>
          <div className={`${styles.navItem} ${styles.navItemSix}`}>
            <IoSettingsOutline />
            <p>Settings</p>
          </div>
          <div className={`${styles.navItem} ${styles.navInput}`}>
            <input
              type="search"
              placeholder="Search.. properties, customers here"
            />
            <HiMiniMagnifyingGlass size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
