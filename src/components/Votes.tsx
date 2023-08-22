import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [voteChocolate, setVoteChocolate] = useState(0);
  const [voteVanilla, setVoteVanilla] = useState(0);
  const [voteStrawberry, setVoteStrawberry] = useState(0);
  const totalVotes = voteChocolate + voteVanilla + voteStrawberry;
  const chcolatePercent: string =
    ((voteChocolate / totalVotes) * 100).toFixed(2) + "%";
  const vanillaPercent: string =
    ((voteVanilla / totalVotes) * 100).toFixed(2) + "%";
  const strawberryPercent: string =
    ((voteStrawberry / totalVotes) * 100).toFixed(2) + "%";
  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div id="vote-buttons">
        <button onClick={() => setVoteChocolate(voteChocolate + 1)}>
          Chocolate
        </button>
        <button onClick={() => setVoteVanilla(voteVanilla + 1)}>Vanilla</button>
        <button onClick={() => setVoteStrawberry(voteStrawberry + 1)}>
          Strawberry
        </button>
      </div>
      {totalVotes ? (
        <section id="voting-results">
          {voteChocolate > 0 && (
            <>
              <p>Chocolate: {`${voteChocolate} (${chcolatePercent})`}</p>
              <div id="chocolate-bar" style={{ width: chcolatePercent }}></div>
            </>
          )}
          {voteVanilla > 0 && (
            <>
              <p>Vanilla: {`${voteVanilla} (${vanillaPercent})`}</p>
              <div id="vanilla-bar" style={{ width: vanillaPercent }}></div>
            </>
          )}
          {voteStrawberry > 0 && (
            <>
              <p> Strawberry: {`${voteStrawberry} (${strawberryPercent})`}</p>
              <div
                id="strawberry-bar"
                style={{ width: strawberryPercent }}
              ></div>
            </>
          )}
        </section>
      ) : (
        <p>No Votes Yet</p>
      )}
    </div>
  );
};

export default Votes;
