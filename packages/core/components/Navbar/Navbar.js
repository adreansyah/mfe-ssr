import styles from "./Navbar.module.css";
import Link from 'next/link'
import Image from 'next/image'
import NetflixLogo from '/public/static/netflix.svg'
const NavBar = ({username}) => {
    return  (
        <div className={styles.container}>
    <div className={styles.wrapper}>
      <Link className={styles.logoLink} href="/">
        
          <div className={styles.logoWrapper}>
            <Image
              src={NetflixLogo}
              alt="Netflix logo"
              width="128"
              height="34"
            />
          </div>
        
      </Link>

      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          Home
        </li>
        <li className={styles.navItem2}>
          Video
        </li>
      </ul>
    </div>
  </div>
    )
}

export default NavBar