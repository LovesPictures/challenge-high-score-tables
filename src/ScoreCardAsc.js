import React from "react";

function ScoreCardAsc(props) {
  return (
    <div>
      {props.scores
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((el) => {
          return (
            <div className="cards">
              {`HIGH SCORES: ${el.name}`}
              <div>
                <table className="table">
                  <tbody>
                    {el.scores
                      .sort((b, a) => (b.s > a.s ? 1 : a.s > b.s ? -1 : 0))
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
          );
        })}
    </div>
  );
}

export default ScoreCardAsc;
