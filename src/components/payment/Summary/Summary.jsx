import styles from "./Summary.module.css";

export function Summary(props) {
  return (
    <section className={styles.summaryContainer}>
      <table className={`table ${styles.summaryTable}`}>
        <thead>
          <tr>
            <th scope="col" colSpan={2}>
              Sumário
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td className="text-end">13200 €</td>
          </tr>
          <tr>
            <td>Frete</td>
            <td className="text-end">200 €</td>
          </tr>
          <tr>
            <td>Taxas</td>
            <td className="text-end">100 €</td>
          </tr>
          <tr>
            <td>Descontos</td>
            <td className="text-end text-success">- 250 €</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td>Total</td>
            <td className="text-end">13150</td>
          </tr>
        </tfoot>
      </table>

      {props.children}
    </section>
  );
}
