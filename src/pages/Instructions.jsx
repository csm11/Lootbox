import { Link, NavLink } from "react-router-dom";

//Instructions 
function Instructions() {
  return (
    <div className="box">
  <h2>How To Play</h2>
      <ul>
        <li>You start off with 50 Points</li>
        <li>There are 2 packs to choose from</li>
        <li>You have 45 seconds to get as many points as possible</li>
        <li>Everytime you open a pack the value of each card will be added to your total points </li>
        <li>The left pack will give you a higher chance of getting high value cards but more points will be needed to open it </li>
        <li>The right pack will give you a lower chance of getting high value cards but less points will be needed to open it</li>
        <li>Once you press the play button, the timer will start</li>
        <li>Once the timer ends you will be redirected to the Google Survey</li>
        <br />
        <li>TROUBLESHOOTING</li>
        <li>Because of the API requesting cards, sometimes when a pack is clicked on the screen will be blank. If that does happen, refresh the screen </li>
      </ul>
      <Link to="/Game" className="play-button">
  Play Game
</Link>
    </div>
  );
}
export default Instructions;