export default function NavBar() {
    return(
        <div>
            <div className="NavBar">
                <div className="left">
                    <h1>SpaceWaffles</h1>
                </div>
                <div className="middle">
                    <a href="./"><h1>Home</h1></a>
                    <a href="./shop"><h1>Shop</h1></a>
                    <a href="./about"><h1>About</h1></a>
                </div>
                <div className="right">
                <a href="./login"><h1>Login</h1></a>
                </div>
            </div>
        </div>
    )
}