export function Tab(props) {
  return (
    <div
      key={props.id}
      tabIndex="0"
      role="tabpanel"
      id={`${props.id}-pane`}
      aria-labelledby={props.id}
      className={`tab-pane fade ${props.isActive ? "show active" : ""}`}
    >
      {props.children}
    </div>
  );
}
