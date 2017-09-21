function toRoman(userInput) {
  if (userInput > 3999) {
    return null;
  }
  var romanArray = [];
  var output = ""
  while (userInput > 0) {
    if (userInput >= 1000) {
      romanArray.push("M");
      userInput -= 1000;
    } else if (userInput >= 500) {
      romanArray.push("D");
      userInput -= 500;
    } else if (userInput >= 100) {
      romanArray.push("C");
      userInput -= 100;
    } else if (userInput >= 50) {
      romanArray.push("L");
      userInput -= 50;
    } else if (userInput >= 10) {
      romanArray.push("X");
      userInput -= 10;
    } else if (userInput >= 5) {
      romanArray.push("V");
      userInput -= 5;
    } else if (userInput >= 1) {
      romanArray.push("I");
      userInput -= 1;
    }
  };
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
