// Rover Object Goes Here
var rover ={
  direction: 'N',// north default direction
  x: 0,//horizontal position 
  y: 0,//vertical position
  travelLog: [],
}
// ======================
/*var grid = [
  ['R',null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
];*/
// ======================
function turnLeft(rover){
  switch(rover.direction){
    case 'N':
      rover.direction= 'W';
      console.log('Rover direction: west');
      break;
    case 'W':
      rover.direction= 'S';
      console.log('Rover direction: south');
      break;
    case 'S':
      rover.direction= 'E';
      console.log('Rover direction: est');
      break
    case 'E':
      rover.direction= 'N';
      console.log('Rover direction: north');
      break;      
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch(rover.direction){
    case 'N':
      rover.direction= 'E';
      console.log('Rover direction: est');
      break;
    case 'E':
      rover.direction= 'S';
      console.log('Rover direction: south');
      break;
    case 'S':
      rover.direction= 'W';
      console.log('Rover direction: west');
      break
    case 'W':
      rover.direction= 'N';
      console.log('Rover direction: north');
      break;      
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch(rover.direction){
    case 'N':
      if(rover.y<=0){
        console.log('Is reached the limit space to move');
      }else{
        rover.y-=1;//y=y-1
      }
      break;
    case 'E':
      if (rover.x>=10){
        console.log('Is reached the limit space to move');
      }else{
        rover.x+=1;//x=x+1
      }
      break;
    case 'S':
      if (rover.y>=10){
        console.log('Is reached the limit space to move');
      }else{
        rover.y+=1;
      }
      break;
    case 'W':
      if (rover.x<=0){
        console.log('Is reached the limit space to move');
      }else{
        rover.x-=1;
      }
      break;  
  }
  console.log("moveForward was called");
  console.log('Rover is in the position: ' + [rover.x,rover.y]);
}

function moveBackward(rover){// similar to fordward but the move in each direction will be the oposite
  switch(rover.direction){
    case 'N':
      if(rover.y>=10){
        console.log('Is reached the limit space to move');
      }else{
        rover.y+=1;
      }
      break;
    case 'E':
      if (rover.x<=0){
        console.log('Is reached the limit space to move');
      }else{
        rover.x-=1;
      }
      break;
    case 'S':
      if (rover.y<=0){
        console.log('Is reached the limit space to move');
      }else{
        rover.y-=1;
      }
      break;
    case 'W':
      if (rover.x>=10){
        console.log('Is reached the limit space to move');
      }else{
        rover.x+=1;
      }
      break;  
  }
  console.log("moveBackward was called");
  console.log('Rover is in the position: ' + [rover.x,rover.y]);
}

function commands(route){
  if (route.indexOf('l')>=0 || route.indexOf('r')>=0 || route.indexOf('f')>=0 || route.indexOf('b')>=0){
    for (let i=0; i<route.length; i++){
      switch(route[i]){
        case 'l':
          turnLeft(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'f':
          moveForward(rover);
          break;
        case 'b':
          moveBackward(rover);
          break; 
        default:
            console.log('Enter valid caracters: l(left), r(right), f(forward) or b(backward)');

      }    
    }
    let position= [rover.x,rover.y];
    rover.travelLog.push(position);
    console.log('Rover final position is: ' + position);
  }
}

const route = 'llffffbbrfbbbbbbbbbbbggg'; //'rrfffffffffflfffffffffflfffffrllfbb';
commands(route);// to call the function

