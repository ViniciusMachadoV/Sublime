import estilo from "./Lookbook.module.css";

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
        <div className={estilo["magazine"]}>
          <div className={estilo["amostra1"]}></div>
          <div className={estilo["amostra2"]}></div>
          <div className={estilo["amostra3"]}></div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ducimus
          ullam quae voluptatem aut odit at veniam nisi, facilis, distinctio
          enim quos architecto consectetur unde voluptatum blanditiis ea vitae
          ab!
        </div>
      </div>
    </section>
  );
}

export default Lookbook;
