import React from "react";

function ScoreCard(props) {
  return (
    <div>
      {props.scores
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((el) => {
          return (
            <div className="outer-border">
              <div className="cards">
                {`HIGH SCORES: ${el.name}`}
                <div className="scoreContainer">
                  <table className="table">
                    <tbody>
                      {el.scores
                        .sort((b, a) => (a.s > b.s ? 1 : b.s > a.s ? -1 : 0))
                        .map((scoreName) => {
                          return (
                            <tr>
                              {scoreName.n.toUpperCase()}
                              <td>{scoreName.s}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ScoreCard;
