import { Link, NavLink } from "react-router-dom";


function Instructions() {
  return (
    <div style={styles.howToBox}>
      <h1 style={styles.h1}>How To Play</h1>
      <ul>
        <li>You start off with 50 Points.</li>
        <li>There are 2 packs to choose from.</li>
        <li>The left pack needs 50 Points to open, the right pack needs 10 to open. </li>
        <li>You have 60 seconds to get as many points as possible</li>
        <li>Everytime you open a pack the value of each card will be added to your total points </li>
        <li>The left pack will give you a higher chance of getting high value cards </li>
        <li>The right pack will give you a lower chance of getting high value cards </li>
        <li>Once you press the play button, the timer will start</li>
        <li>Once the timer ends you will be redirected to the Google Survey</li>
      </ul>
    </div>
  );
}

const styles = {
  howToBox: {
    padding: '10%',
    maxWidth: '50%',
    height: '100%',
    margin: '0 auto',
    fontSize: '200%',
    backgroundColor: '#000000',
    boxShadow: '0 0 10px rgb(255, 255, 255)',
    border: '4px solid #ffffff',
    borderRadius: '2%',
    color: 'white',
    marginTop: '0',
    position: 'relative',
  
  },
  h1: {
    textAlign: 'center',
    fontSize: '200%',
    margin: '-80px 0 0'
  }
};


export default Instructions;