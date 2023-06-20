import { useContext } from "react";

import { ThemeContext } from "./infra/contexts/ThemeContext";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Content from "./components/layout/Content/Content";

import Routes from "./Routes";

function App() {
   const {theme} = useContext(ThemeContext) 
  return (
    <div className="App" data-theme={theme}>
      <Header />

      <Content >
        <Routes />
      </Content>

      <Footer />
    </div>
  );
}

export default App;
