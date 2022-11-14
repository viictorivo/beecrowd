const file = '/dev/stdin';
const lines = read(file);
const info = transformFile(lines);

const calculo = getWalls (info.amountSoldiers, info.wallSize, info.scaleS, info.scaleM, info.scaleL, info.soldierSize);

console.log(calculo.result);

function read (file){
  var input = require('fs').readFileSync(file, 'utf8');
  var lines = input.split('\n');

  return lines
}

function transformFile (lines){
  
  column = lines[0].split(" ", 2);
  var amountSoldiers = parseInt(column[0]);
  var wallSize = parseInt(column[1]);

  const soldierSize = lines[1];

  column = lines[2].split(" ", 3);
  scaleS = parseInt(column[0]);
  scaleM = parseInt(column[1]);
  scaleL = parseInt(column[2]);

  return {amountSoldiers, wallSize, scaleS, scaleM, scaleL, soldierSize}
}

function getWalls (amountSoldiers, wallSize, scaleS, scaleM, scaleL, soldierSize){

  var aux1 = 0;
  var newWall = wallSize;
  var result = 1;

  while (amountSoldiers != aux1 ){
    var aux2 = Boolean(true);
    //console.log(aux1);
    if (soldierSize[aux1] == 'R' && newWall >= scaleS ){
      newWall = newWall - scaleS
    } else if (soldierSize[aux1] == 'M' && newWall >= scaleM ){
      newWall = newWall - scaleM
    } else if (soldierSize[aux1] == 'G' && newWall >= scaleL ){
      newWall = newWall - scaleL
    } else {
      newWall = wallSize;
      result++
      aux2 = Boolean(false);
    }

    //console.log(newWall)
    
    if (aux2 == true){
      aux1++
    } 
  }
  
  return {result}; 
}  

