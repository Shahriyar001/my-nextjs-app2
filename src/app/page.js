import Counter from "../components/Counter.jsx";

export const metadata = {
  title: "Home Page",
  description: "This is home Page",
};

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Welcome to mext.js </h1>
      <Counter />
    </div>
  );
};

export default HomePage;
