import Counter from "../components/Counter.jsx";

export const metadata = {
  title: "Home Page",
  description: "This is home Page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();

  return (
    <div className="mx-auto">
      <h1 className="text-4xl text-center">Welcome to mext.js </h1>
      <div className="flex p-10 gap-6 justify-between flex-wrap">
        {shoes?.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}!
                <div className="badge badge-secondary">$ {shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <p>{shoe.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Details</button>
                <button className="btn btn-outline btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
