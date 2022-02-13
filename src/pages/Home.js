import { Link } from "react-router-dom";

function Home() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
      <Link to="/About">탐색</Link>
    </main>
  );
}
export default Home;
