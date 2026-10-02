import { Switch, Route, Router as WouterRouter } from "wouter";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import Home from "@/pages/home";
import Soumission from "@/pages/soumission";
import PolitiqueCookies from "@/pages/politique-cookies";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/soumission" component={Soumission} />
        <Route path="/politique-cookies" component={PolitiqueCookies} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
