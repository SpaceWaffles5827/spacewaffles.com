import NavBar from "../../comps/NavBar"
import CasinoNavBar from "../../comps/CasinoNavBar"

export default function Slots() {
    return(
        <div className="Casino">
            <NavBar></NavBar>
            <CasinoNavBar></CasinoNavBar>
            <h1>Slots</h1>
        </div>
    )
}