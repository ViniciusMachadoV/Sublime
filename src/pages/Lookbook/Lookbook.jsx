import TituloPagina from "../../components/commons/TituloPagina/TituloPagina";

function Lookbook() {
  return (
    <section className="container">
      <TituloPagina nome="Lookbook" />

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
              src="/assets/lookbook-1.jpg"
              className="d-block w-100 object-fit-cover"
              style={{ height: 600 }}
              alt="Foto do Lookbook"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/lookbook-2.jpg"
              className="d-block w-100 object-fit-cover"
              style={{ height: 600 }}
              alt="Foto do Lookbook"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/lookbook-3.jpg"
              className="d-block w-100 object-fit-cover"
              style={{ height: 600 }}
              alt="Foto do Lookbook"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/lookbook-4.jpg"
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
    </section>
  );
}

export default Lookbook;
