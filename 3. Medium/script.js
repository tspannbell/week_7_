//Medium
  var userData = prompt( "Insert Here");
  console.log(userData);

var lowerCase = userData.toLowerCase();
  var upperCase = userData.toUpperCase();
  console.log(upperCase)
  
  if (userData == upperCase) {
      console.log("Stop Shouting")
    } else if (userData === lowerCase){
        console.log("Speak up i Cant Hear You")
    } else{
        console.log("Hello There")
    }

// 