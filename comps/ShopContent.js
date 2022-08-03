import ShopItem from "./ShopItem";

export default function ShopContent() {
    return(
        <div className="ShopContent">
            <div className="content">
                <div className="content2">
                    <div className="header">
                        <h1>Welcome To My Shop</h1>
                    </div>
                    <div className="ProductGrid">
                        <ShopItem></ShopItem>
                        <ShopItem></ShopItem>
                        <ShopItem></ShopItem>
                        <ShopItem></ShopItem>
                        <ShopItem></ShopItem>
                        <ShopItem></ShopItem>
                        <ShopItem></ShopItem>
                        <ShopItem></ShopItem>
                        <ShopItem></ShopItem>
                        <ShopItem></ShopItem>
                        <ShopItem></ShopItem>
                    </div>
                </div>  
            </div>
        </div>
    )
}