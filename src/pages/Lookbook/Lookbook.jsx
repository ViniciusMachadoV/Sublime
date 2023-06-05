import estilo from "./Lookbook.module.css";
import 'bootstrap/dist/css/bootstrap.css';

function Lookbook() {
  return (
    <section className="container">
      <h1>Lookbook / </h1>

      <div className={estilo["menu"]}>
        <div className={estilo["container"]}>
          <div className={estilo["book"]}>
            <div className={estilo["front"]}>
              <div className={estilo["cover"]}>
                {/* <img className={estilo['capa']} width="100%" src='assets/lookbookcover2.jpg' alt="teste" /> */}
                <p className={estilo["title"]}>SUBLIME</p>
                <p className={estilo["num-up"]}>23</p>
                <p className={estilo["num-down"]}>Primavera</p>
                <p className={estilo["author"]}>
                  Designed by: Vinícius Machado
                </p>
              </div>
            </div>
            <div className={estilo["left-side"]}>
              <h2>
                <span>Primavera</span>
                <span>Sublime</span>
              </h2>
            </div>
          </div>
        </div>
        {/* <div className={estilo["magazine"]}>

          <div className={estilo["amostra1"]}></div>
          <div className={estilo["amostra2"]}></div>
          <div className={estilo["amostra3"]}></div>
          <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div> */}
        <div id="lookbookCarousel" className="carousel slide w-75 my-5 mx-auto">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#lookbookCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#lookbookCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#lookbookCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#lookbookCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/mod1.png"
              className="d-block w-100 object-fit-cover"
              style={{ height: 600 }}
              alt="Foto do Lookbook"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/mod2.png"
              className="d-block w-100 object-fit-cover"
              style={{ height: 600 }}
              alt="Foto do Lookbook"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/mod3.png"
              className="d-block w-100 object-fit-cover"
              style={{ height: 600 }}
              alt="Foto do Lookbook"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/mod4.png"
              className="d-block w-100 object-fit-cover"
              style={{ height: 600 }}
              alt="Foto do Lookbook"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#lookbookCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#lookbookCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </section>
  );
}

export default Lookbook;
