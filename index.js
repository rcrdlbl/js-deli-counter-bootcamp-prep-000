var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var customer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${customer}.`;
  }
}

function currentLine(line) {
  var status = "The line is currently: ";
  if (line.length === 0) {
    return "The line is currently empty.";
  } else for (var i = 0; i < line.length; i++) {
    status = status + `${i + 1}. ${line[i]}`;
    if (i != line.length - 1) {
      status = status + ", ";
    }
    }
  return status;
}