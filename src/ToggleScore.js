import React from "react";

function ToggleScore(props) {
  // const [toggleScoreOrder, setToggleScoreOrder] = useState(true);

  function logWhenClicked() {
    props.setToggleScoreOrder((current) => !current);
  }

  return (
    <button className="btn-primary" onClick={logWhenClicked}>
      Ascending / Descending
    </button>
  );
}

export default ToggleScore;
