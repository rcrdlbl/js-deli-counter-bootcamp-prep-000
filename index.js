var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine === []) {
    return "The line is currently empty.";
  } else {
    return `Currently serving ${katzDeliLine[0]}`;
  }
  katzDeliLine.shift();
}