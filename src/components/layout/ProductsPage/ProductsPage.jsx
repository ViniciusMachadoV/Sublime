export function ProductsPage(props) {
  return (
    <>
      <header>{props.header}</header>

      <section className="container">{props.children}</section>
    </>
  );
}
