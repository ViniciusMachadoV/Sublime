import TituloPagina from "../../components/commons/TituloPagina/TituloPagina";
import ListaProdutos from "../../components/commons/ListaProdutos/ListaProdutos";

function Feminino() {
  const produtos = [
    {
      nome: "Nome do Produto 1",
      img: "/assets/cover-1.jpg",
      preco: 4200,
    },
    {
      nome: "Nome do Produto 2",
      img: "/assets/cover-1.jpg",
      preco: 4200,
    },
    {
      nome: "Nome do Produto 3",
      img: "/assets/cover-1.jpg",
      preco: 4200,
    },
    {
      nome: "Nome do Produto 4",
      img: "/assets/cover-1.jpg",
      preco: 4200,
    },
    {
      nome: "Nome do Produto 5",
      img: "/assets/cover-1.jpg",
      preco: 4200,
    },
    {
      nome: "Nome do Produto 6",
      img: "/assets/cover-1.jpg",
      preco: 4200,
    },
  ];

  return (
    <section className="container">
      <header className="d-flex justify-content-between align-items-end">
        <TituloPagina nome="Feminino" />
      </header>

      <ListaProdutos produtos={produtos} />
    </section>
  );
}

export default Feminino;
