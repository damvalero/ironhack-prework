// Rover Object Goes Here
rover ={
  direction= 'N',// north default direction
  x= 0,//horizontal position 
  y= 0,//vertical position
  travelLog= [],
}
// ======================
var grid = [
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
];
// ======================
function turnLeft(rover){
  switch(rover.direction){
    case 'N':
      rover.direction= 'W';
      break;
    case 'W':
      rover.direction= 'S';
      break;
    case 'S':
      rover.direction= 'E';
      break
    case 'E':
      rover.direction= 'N';
      break;      
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch(rover.direction){
    case 'N':
      rover.direction= 'E';
      break;
    case 'E':
      rover.direction= 'S';
      break;
    case 'S':
      rover.direction= 'W';
      break
    case 'W':
      rover.direction= 'N';
      break;      
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch{
    case 'N':
      if(rover.y<0 || rover.y>9){
        console.log('Is reached the limit space to move');
      }else{
        rover.y-=1;//y=y-1
      }
      break;
    case 'E':
      if (rover.x<0 || rover.x>9){
        console.log('Is reached the limit space to move');
      }else{
        rover.x+=1;//x=x+1
      }
      break;
      }
    case 'S':
      if (rover.y<0 || rover.y>10){
        console.log('Is reached the limit space to move');
      }else{
        rover.y+=1;
      }
      break;
      }
    case 'W':
      if (rover.x<0 || rover.x>9){
        console.log('Is reached the limit space to move');
      }else{
        rover.x-=1;
      }
      break;
      }  
  }
  console.log("moveForward was called");
  console.log('Rover is in the position: ' + [rover.x,rover.y]);
}

function commands



