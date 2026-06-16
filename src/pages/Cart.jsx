function Cart({ cartItems }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>My Cart</h2>

      {cartItems.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              margin: "10px 0",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              background: "#fff",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="120"
              height="120"
            />

            <div>
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;