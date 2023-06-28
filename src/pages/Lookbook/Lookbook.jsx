import estilo from "./Lookbook.module.css";

import Carousel from "./parts/Carousel/Carousel";
import Magazine from "./parts/Magazine/Magazine";

function Lookbook() {
  return (
    <section className="container">
      <h1>Lookbook / </h1>
      <Magazine />
      <Carousel />
    </section>
  );
}

export default Lookbook;
