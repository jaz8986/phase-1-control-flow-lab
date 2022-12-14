function scuberGreetingForFeet(distance) {
  if (distance <= 400) {return 'This one is on me!'} 
  else if (distance > 400 && distance < 2000) {return 'That will be twenty bucks.' } 
  else if (2000 < distance && 2500 > distance) {return 'I will gladly take your thirty bucks.'} 
  else if (distance >= 2500) {return 'No can do.'}
}


function ternaryCheckCity(city){
  return 'NYC' == city ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(amountOfTip){
  switch (amountOfTip) {
    case 'generous': 
      return('Thank you so much.');
      break;
    case 'not as generous':
     return ('Thank you.');
      break;
    case 'thanks for everything':
     return ('Bye.')
    break;
  }
}