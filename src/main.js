import App from "./App.svelte";

var app = new App({
  target: document.getElementById("root"),
  props: {
    name: "world",
  },
});

export default app;
