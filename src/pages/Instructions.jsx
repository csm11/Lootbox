import { Link, NavLink } from "react-router-dom";


function Instructions() {
  return (
    <div className="box">
  <h2>How To Play</h2>
      <ul>
        <li>You start off with 50 Points.</li>
        <li>There are 2 packs to choose from.</li>
        <li>You have 45 seconds to get as many points as possible</li>
        <li>Everytime you open a pack the value of each card will be added to your total points </li>
        <li>The left pack will give you a higher chance of getting high value cards but more points will be needed to open it </li>
        <li>The right pack will give you a lower chance of getting high value cards but less points will be needed to open it</li>
        <li>Once you press the play button, the timer will start</li>
        <li>Once the timer ends you will be redirected to the Google Survey</li>
        <br />
        <li>Troubleshooting</li>
        <li>If when a pack is clicked on and the page turns white. Please keep refreshing</li>
      </ul>
      <Link to="/Game" className="play-button">
  Play Game
</Link>


    </div>
  );
}






export default Instructions;