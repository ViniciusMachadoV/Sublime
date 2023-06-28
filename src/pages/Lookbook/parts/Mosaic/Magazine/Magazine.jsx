import estilo from "./Magazine.module.css";

function Magazine() {
  return (
    <div className={estilo.container}>
      <div className={estilo.book}>
        <div className={estilo.front}>
          <div className={estilo.cover}>
            <p className={estilo.title}>SUBLIME</p>
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
  );
}

export default Magazine;
