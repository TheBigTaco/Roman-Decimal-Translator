var conversionMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};
var keys = Object.keys(conversionMap);

function toRoman(userInput) {
  if (userInput > 3999 || /[^\d]/.test(userInput)) {
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
  return output;
};

function toDecimal(userInput) {
  userInput = userInput.toUpperCase();
  var output = 0;
  if (/[^IVXLCDM]/.test(userInput)) {
    return null;
  }
  if (/(I{4}|V{2}|X{4}|L{2}|C{4}|D{2}|M{4})/.test(userInput)) {
    return null;
  }
  if (/^M*(CM)?((D?C*)|(CD)?)(XC)?((L?X*)|(XL)?)(IX)?((V?I*)|(IV)?)$/.test(userInput)) {
    for (i = 0; i < keys.length; i++) {
      var currentKey = keys[i];
      var currentChunk = userInput.substring(0, currentKey.length);

      while (currentKey === currentChunk) {
        userInput = userInput.substring(currentKey.length);
        output += conversionMap[currentKey];
        currentChunk = userInput.substring(0, currentKey.length)
      }
    }
    return output;

  } else {
    return null;
  }
};

$(document).ready(function(){
  $("form#to-roman").submit(function(event){
    event.preventDefault();
    var userInput = $("#to-roman-input").val();
    var output = toRoman(userInput);
    if (output === null) {
      $(".output").text("no");
    } else {
      $(".output").text(output);
    }
  });

  $("form#to-decimal").submit(function(event){
    event.preventDefault();
    var userInput = $("#to-decimal-input").val();
    var output = toDecimal(userInput);
    if (output === null) {
      $(".output").text("no");
    } else {
      $(".output").text(output);
    }
  });
});
