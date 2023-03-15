function scuberGreetingForFeet(feet){
  // Write your code here!
  let ride;
  if (feet <= 400) {
    ride = "This one is on me!";
  }
  else if (feet > 400 && feet <= 2000) {
    ride = "This one is on me too!";
  }
  else if (feet > 2000 && feet <=2500) {
    ride = 'I will gladly take your thirty bucks.';
  }
  else if (feet > 2500) {
    ride = 'No can do.'
  }
  return ride;
} 

function ternaryCheckCity(city){
  // Write your code here!
  let destination;
  if (city === "NYC") {
    destination = "Ok, sounds good.";
  }
  else {
    destination = "No go.";
  }
  return destination;
}
const tip ="generous";
function switchOnCharmFromTip(tip){
  let charm;
  switch (tip) {
    case "generous":
      charm = "Thank you so much.";
      break;
    case "not as generous":
        charm = "Thank you.";
      break;
    default:
        charm = "Bye.";
      break;
  }
  return charm;
  // Write your code here!
}