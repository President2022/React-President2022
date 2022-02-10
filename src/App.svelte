<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Algorithm from "./routes/Algorithm.svelte";
  import Graph from "./routes/Graph.svelte";
  import Keyword from "./routes/Keyword.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/algorithm">Algorithm</Link>
    <Link to="/graph">Graph</Link>
    <Link to="/keyword">Keyword</Link>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/about" component={About} />
    <Route path="/algorithm" component={Algorithm} />
    <Route path="/graph" component={Graph} />
    <Route path="/keyword" component={Keyword} />
  </div>
</Router>

<style>
  /* main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
</style>
