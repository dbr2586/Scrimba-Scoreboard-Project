let homeScoreDisplay = document.getElementById("home-score-display");

let homeScore = 0;

homeScoreDisplay.textContent = homeScore;

let awayScoreDisplay = document.getElementById("away-score-display");

let awayScore = 0;

awayScoreDisplay.textContent = awayScore;

function highlightLeader() {
  if (homeScore > awayScore) {
    document.getElementById("board-tile-home").style.color = "yellow";
    document.getElementById("board-tile-away").style.color = "#eeeeee";
  } else if (homeScore < awayScore) {
    document.getElementById("board-tile-home").style.color = "#eeeeee";
    document.getElementById("board-tile-away").style.color = "yellow";
  } else if (homeScore + awayScore == 0) {
    document.getElementById("board-tile-home").style.color = "#eeeeee";
    document.getElementById("board-tile-away").style.color = "#eeeeee";
  } else {
    document.getElementById("board-tile-home").style.color = "crimson";
    document.getElementById("board-tile-away").style.color = "crimson";
  }
}

function homeAdd1() {
  homeScore += 1;
  homeScoreDisplay.textContent = homeScore;
  highlightLeader();
}

function homeAdd2() {
  homeScore += 2;
  homeScoreDisplay.textContent = homeScore;
  highlightLeader();
}

function homeAdd3() {
  homeScore += 3;
  homeScoreDisplay.textContent = homeScore;
  highlightLeader();
}

function awayAdd1() {
  awayScore += 1;
  awayScoreDisplay.textContent = awayScore;
  highlightLeader();
}

function awayAdd2() {
  awayScore += 2;
  awayScoreDisplay.textContent = awayScore;
  highlightLeader();
}

function awayAdd3() {
  awayScore += 3;
  awayScoreDisplay.textContent = awayScore;
  highlightLeader();
}

function resetScore() {
  awayScore = 0;
  awayScoreDisplay.textContent = awayScore;
  homeScore = 0;
  homeScoreDisplay.textContent = homeScore;
  highlightLeader();
}