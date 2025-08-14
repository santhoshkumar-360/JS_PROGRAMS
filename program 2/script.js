let target = Math.floor(Math.random() * 100) + 1;
let count = 0;

function playGame() {
  let guess = parseInt(document.getElementById("mainInput").value);
  count++;

  if (guess < target) {
    document.getElementById("feedback").innerText = "Too Low";
  } else if (guess > target) {
    document.getElementById("feedback").innerText = "Too High";
  } else {
    document.getElementById("feedback").innerText = "Correct!";
    document.getElementById("attempts").innerText = "You guessed it in " + count + " attempts.";
  }
}
