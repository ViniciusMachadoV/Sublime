import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Content from "./components/layout/Content/Content";

import Routes from "./Routes";

function App() {
  return (
    <>
      <Header />

      <Content>
        <Routes />
      </Content>

      <Footer />
    </>
  );
}

export default App;
