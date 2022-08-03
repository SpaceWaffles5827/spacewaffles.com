import styles from '../styles/casinoNavBar.module.css'
import Link from 'next/link';

export default function CasinoNavBar() {
    return(
        <div className={styles.NavBar}>
            <Link href="/casino/blackjack"><h1>Black Jack</h1></Link>
            <Link href="/casino/roulette"><h1>Roulette</h1></Link>
            <Link href="/casino/crash"><h1>Crash</h1></Link>
            <Link href="/casino/slots"><h1>Slots</h1></Link>
        </div>
    )
}