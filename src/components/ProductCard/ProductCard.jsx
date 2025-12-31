import "./ProductCard.css"

export function ProductCard(props) {
    return (
        <div className="product_card" style={props.isSelected ? {border: "5px solid darkgreen"} : null}>
            <div className="product_card_content">
                <div className="product_title_box" style={{backgroundColor: props.color}}>
                    <div className="product_title">{props.title}</div>
                    <div className="product_price_box">
                        <div className="product_price">{props.price}</div>
                    </div>
                </div>

                <div className="product_category">
                    <span className="category_label" style={{color: props.color}}>API</span>
                </div>

                <div className="product_divider"></div>

                <div className="product_rating">
                    <div className="rating_value">Rating: {props.rating} / 5.0⭐</div>
                </div>

                <div className="product_divider"></div>

                <div className="product_description">
                    <p className="description_text">
                        {props.description}
                    </p>
                </div>

                <div className="product_button">
                    <button className="add_to_cart" style={{backgroundColor: props.color}} onClick={() => props.onSelect(props.product_id)}>Select</button>
                </div>
            </div>
        </div>
    )
}