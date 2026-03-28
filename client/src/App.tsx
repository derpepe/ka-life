import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import Home from "@/pages/home";
import InfographicPage from "@/pages/infographic-page";
import About from "@/pages/about";
import Impressum from "@/pages/impressum";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/kw/:id" component={InfographicPage} />
        <Route path="/ueber" component={About} />
        <Route path="/impressum" component={Impressum} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
