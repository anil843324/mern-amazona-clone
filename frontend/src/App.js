import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a className="text-[#ffffff] font-bold" href="/">
          amazona
        </a>
      </header>
      <main className=" p-4">
        <h1>Featured Products</h1>

        <div className=" products  flex  flex-wrap   justify-center  ">
          {data.products.map((product) => (
            <div
              className="product m-4 border-solid border-[1px] border-[#404040] "
              key={product.slug}
            >
               <a href={`/product/${product.slug}`}> 
              <img
                className=" w-full max-w-[300px]"
                src={product.image}
                alt={product.name}
              />
              </a>
              <div className="product-info  p-4 ">
              <a href={`/product/${product.slug}`}> 
                <p>{product.name}</p>
                </a>
                <p> ${product.price}</p>

                <button className="border-solid border-[1px] border-[#404040] p-1 rounded-md">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
