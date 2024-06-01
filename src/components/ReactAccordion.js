import React from "react";

const ReactAccordion = ({
  accOuterClass,
  accContent,
  items,
  accordionBtn,
  priceFromwedCrest,
}) => {
  return (
    <div className={`accordion ${accOuterClass}`} id="accordionExample">
      {items.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button  ${
                index === 0 ? "" : "collapsed"
              }  ${accordionBtn}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse `}
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body ${accContent}`}>
              {typeof item.content === "function"
                ? item.content(priceFromwedCrest)
                : item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReactAccordion;
