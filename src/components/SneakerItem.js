export function SneakerItem({ item, index, updateCart, price, setPrice }) {
    return (
        <div class="sneaker_item">
            <div id="sneaker_img_box">
                <img class="sneaker_image" src={item.image} />
            </div>

            <div class="sneaker_details">
                <div class="sneaker_name_yr">
                    <h3 class="sneaker_name">{item.name}</h3>
                    <h3 class="sneaker_year">{item.year}</h3>
                </div>
                <h3 class="sneaker_price">${item.price}</h3>
            </div>
            <p>{item.description}</p>
            <button class="add_cart_button" onClick={() => { updateCart(index); setPrice(price + item.price) }}>Add to cart</button>
        </div>
    );
}