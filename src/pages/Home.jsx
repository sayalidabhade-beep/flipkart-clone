
import Navbar from "../components/Navbar";
import "./Home.css";

function Home({ addToCart }) {

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: "₹79,999",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    },
    {
      id: 2,
      name: "Laptop",
      price: "₹49,999",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    },
    {
      id: 3,
      name: "T-Shirt",
      price: "₹599",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400"
    },
    {
      id: 5,
      name: "Smart Watch",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
      id: 6,
      name: "Shoes",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
      id: 7,
      name: "Camera",
      price: "₹24,999",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
    },
    {
      id: 8,
      name: "T-Shirt",
      price: "₹599",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400"
    },
    {
      id: 9,
      name: "Headphones",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <Navbar />

      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200"
          alt=""
        />
      </div>

      <div className="products">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <h4>{p.price}</h4>

            <button onClick={() => handleAddToCart(p)}>
              Add To Cart
            </button>

          </div>
        ))}
      </div>
    </>
  );
}

export default Home;