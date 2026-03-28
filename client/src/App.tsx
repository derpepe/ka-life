import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import Home from "@/pages/home";
import InfographicPage from "@/pages/infographic-page";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/kw/:id" component={InfographicPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
