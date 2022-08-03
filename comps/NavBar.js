import styles from '../styles/NavBar.module.css'
import Link from 'next/link';

export default function NavBar() {
    return(
        <div>
            <div className={styles.NavBar}>
                <div className={styles.left}>
                    <Link href="/"><h1>SpaceWaffles</h1></Link>
                </div>
                <div className={styles.middle}>
                    <Link href="/"><h1>Home</h1></Link>
                    {/* <Link href="./shop"><h1>Shop</h1></Link>
                    <Link href="./about"><h1>About</h1></Link>
                    <Link href="./casino"><h1>Casino</h1></Link> */}
                </div>
                <div className={styles.right}>
                    {/* <Link href="./login"><h1>Login</h1></Link> */}
                </div>
            </div>
        </div>
    )
}