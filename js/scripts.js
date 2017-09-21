var conversionMap = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};
var keys = Object.keys(conversionMap);

function toRoman(userInput) {
  if (userInput > 3999) {
    return null;
  }
  var romanArray = [];
  var output = ""

  for (i = 0; i < keys.length; i++) {
    var currentKey = keys[i];
    while (userInput >= conversionMap[currentKey]) {
        romanArray.push(currentKey);
        userInput -= conversionMap[currentKey];
    }
  }
  output = romanArray.join("");
  output = output.replace(/V[I]{4}/g, "IX");
  output = output.replace(/[I]{4}/g, "IV");
  output = output.replace(/L[X]{4}/g, "XC");
  output = output.replace(/[X]{4}/g, "XL");
  output = output.replace(/D[C]{4}/g, "CM");
  output = output.replace(/[C]{4}/g, "CD");
  return output;
};

$(document).ready(function(){
  $("form#roman").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    if (toRoman(userInput) === null) {
      $(".output").text("no");
    } else {
      $(".output").text(toRoman(userInput));
    }
  });
});
