import React, { useState } from "react";
import items from "../components/items";

function Display() {
  let [card, setCard] = useState(items);
  let [reload, setReload] = useState(false);
  let [isEmpty, setEmpty] = useState(false);
  let [showmore, setShowmore] = useState([]);

  function handleShowmore(index) {
    const updatedShowmore = [...showmore];
    updatedShowmore[index] = !showmore[index];
    setShowmore(updatedShowmore);
  }

  function handleDelete(index) {
    const updated = card.filter((item, i) => i !== index);
    setCard(updated);

    if (card.length <= 1) {
      setEmpty(true);
    }
  }

  function handleRefresh() {
    if (card.length === 0 && !reload) {
      window.location.reload();
    }
    setReload(true);
  }

  return (
    <div className="tour-list">
      <h1 className="title">Tours</h1>
      <button onClick={handleRefresh} className="btn">
        Refresh
      </button>
      {reload ? (
        <p>Loading...</p>
      ) : !isEmpty ? (
        card.map((item, index) => {
            const isExpanded = showmore[index];
          const displayInfo = isExpanded ? item.info : item.info.substring(0, 199);

          return (
            <div id="tour-item-para-rec6d6T3q5EBIdCfD" key={index} className="single-tour">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p className="tour-info">{displayInfo}{!isExpanded && item.info.length > 200 ? "..." : ""}</p>


              <p className="tour-price">{item.price}</p>



              <button id="delete-btn-rec6d6T3q5EBIdCfD" onClick={() => handleDelete(index)} className="delete-btn">
                Delete
              </button>
              <button
                onClick={() => handleShowmore(index)}
                className="show-more"
              >
                {showmore[index] ? "See less" : "Show more"}
              </button>
            </div>
          );
        })
      ) : (
        <p>No more tours</p>
      )}
    </div>
  );
}

export default Display;