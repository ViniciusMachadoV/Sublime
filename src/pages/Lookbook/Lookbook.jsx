import estilo from "./Lookbook.module.css";

import Carousel from "./parts/Carousel/Carousel";
import Magazine from "./parts/Magazine/Magazine";
import Mosaic from "./parts/Mosaic/Mosaic";


function Lookbook() {
  return (
    <section className="container">
      <h1>Lookbook / </h1>
      <Mosaic />
      <Magazine />
    </section>
  );
}

export default Lookbook;
