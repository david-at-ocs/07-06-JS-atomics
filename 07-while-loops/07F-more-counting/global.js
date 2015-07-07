var start, end, countby, countby;

var start = prompt("Starting Value")
start = parseInt(start);

for (end = prompt("Enter an ending value"), end = parseInt(end); end < start;) { 
  end = prompt("Please enter an eding value larger than " + start + "!")
  end = parseInt(end);
}

for (countby = prompt("Count by:"), countby = parseInt(countby); start < end; start += countby) { 
  countby = parseInt(countby);
  console.log(start);
}

