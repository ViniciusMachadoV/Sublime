import React, { useCallback, useMemo } from "react";

export function Tabs(props) {
  function getTabHtmlId(tabLabel) {
    return tabLabel.toLowerCase().replaceAll(" ", "-");
  }

  const tabsInfo = useMemo(
    () =>
      props.children.map((child) => ({
        id: child.props.id ?? getTabHtmlId(child.props.label),
        component: child,
        label: child.props.label,
      })),
    [props.children]
  );

  const passIsActiveProps = useCallback(
    (tabInfo, isActive) =>
      React.cloneElement(tabInfo.component, {
        ...tabInfo.component.props,
        isActive,
        id: tabInfo.id,
        key: tabInfo.id,
      }),
    []
  );

  function onTabChange(event, id) {
    event.preventDefault();

    props?.onTabChange && props.onTabChange(id);
  }

  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        {tabsInfo.map((tab, index) => (
          <li key={tab.id} className="nav-item" role="presentation">
            <button
              role="tab"
              id={tab.id}
              type="button"
              className={`nav-link ${index === 0 ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}-pane`}
              aria-selected="true"
              aria-controls={`${tab.id}-pane`}
              onClick={(event) => onTabChange(event, tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabsInfo.map((tab, index) => passIsActiveProps(tab, index === 0))}
      </div>
    </>
  );
}
