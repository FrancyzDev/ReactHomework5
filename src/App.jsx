import './App.css'
import {ProductCard} from "./components/ProductCard/ProductCard.jsx";
import {useState} from "react";

function App() {
    const [selectedId, setId] = useState(null)
    const handleSelect = (id) => {
        setId(selectedId === id ? null : id)
    }

    return (
        <>
            <div className="content">
                <div className="product_collection">
                    <ProductCard
                        product_id="1"
                        title="Basic"
                        price="$2.99"
                        rating="3.6"
                        color="gray"
                        description="1 request per second, access to basic features"
                        isSelected={selectedId === "1"}
                        onSelect={handleSelect}
                    />
                    <ProductCard
                        product_id="2"
                        title="Vip"
                        price="$9.99"
                        rating="4.0"
                        color="blue"
                        description="5 request per second, access to vip features"
                        isSelected={selectedId === "2"}
                        onSelect={handleSelect}
                    />
                    <ProductCard
                        product_id="3"
                        title="Premium"
                        price="$19.99"
                        rating="4.2"
                        color="darkblue"
                        description="20 request per second, access to premium features"
                        isSelected={selectedId === "3"}
                        onSelect={handleSelect}
                    />
                    <ProductCard
                        product_id="4"
                        title="Moderator"
                        price="$49.99"
                        rating="4.5"
                        color="purple"
                        description="50 request per second, access to moderator features"
                        isSelected={selectedId === "4"}
                        onSelect={handleSelect}
                    />
                    <ProductCard
                        product_id="5"
                        title="Administrator"
                        price="$249.99"
                        rating="4.7"
                        color="green"
                        description="500 request per second, access to administator features"
                        isSelected={selectedId === "5"}
                        onSelect={handleSelect}
                    />
                    <ProductCard
                        product_id="6"
                        title="Corporation"
                        price="$999.99"
                        rating="4.9"
                        color="red"
                        description="Unlimited request per second, access to corporation features"
                        isSelected={selectedId === "6"}
                        onSelect={handleSelect}
                    />
                </div>
            </div>
        </>
    );
}

export default App