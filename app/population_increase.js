const file = '/dev/stdin';
const lines = read(file);

calculate(lines);

function read (file){
  var input = require('fs').readFileSync(file, 'utf8');
  var lines = input.split('\n');

  return lines
}

function calculate (lines){
    var a = 0;
    var b = 1;
    var d = 0;

    while (a < parseInt(lines[0])) {
    c = lines[b].split(" ", 4);
    var h1 = parseInt(c[0]);
    var h2 = parseInt(c[1]);
    var h3 = parseFloat(c[2]);
    var h4 = parseFloat(c[3]);
    while (h1 <= h2 && d <= 100) {
      h1 += Math.trunc(((h1 * h3) / 100));
      h2 += Math.trunc(((h2 * h4) / 100));
      d += 1;
    }
    if (d <= 100) { console.log(d + " anos.") }
    else { console.log("Mais de 1 seculo.") }
    a++;
    b++;
    d = 0;
  }
}

