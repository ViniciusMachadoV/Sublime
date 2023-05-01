import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Bolsas from "./pages/Bolsas/Bolsas";
import Outlet from "./pages/Outlet/Outlet";
import Lookbook from "./pages/Lookbook/Lookbook";
import Carrinho from "./pages/Carrinho/Carrinho";
import Checkout from "./pages/Checkout/Checkout";
import Feminino from "./pages/Feminino/Feminino";
import Masculino from "./pages/Masculino/Masculino";

function Routes() {
  return (
    <Switch>
      <Route path="/feminino" component={Feminino} />
      <Route path="/masculino" component={Masculino} />
      <Route path="/bolsas" component={Bolsas} />
      <Route path="/outlet" component={Outlet} />
      <Route path="/lookbook" component={Lookbook} />
      <Route path="/carrinho" component={Carrinho} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
