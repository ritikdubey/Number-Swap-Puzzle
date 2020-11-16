let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const square = document.querySelectorAll('.square');
numArr = shuffle(numArr);
//console.log(numArr);
fillGrid(numArr);
let possibleSwapArr = getPossibleSwapArr(numArr);
//console.log(possibleSwapArr);
swapNum(numArr, possibleSwapArr);



function swapNum(array)
{
    square.forEach(id => {
      //console.log(id);
      let array1 = getPossibleSwapArr(array);
      //console.log(array1);
      id.addEventListener('click', () => {
        //console.log(id.id);
        let pos = id.id;
        //console.log(pos);
        //console.log(array1.includes(pos));
        // console.log(isPresent(array1, pos));
        // console.log(array1);

        console.log(pos);
        console.log(array1);
        console.log(isPresent(array1, pos));
        if(isPresent(array1, pos) === true)
        {
          //console.log("No err")
          
          fillGrid(array);

        }else{
          console.log("err")
        }
        
      })
    
})
}



function isPresent(array3, ind)
{
  for (let index = 0; index < array3.length; index++) {
    if(array3[index] == ind)
    {
      return true;
    }
    else{
      return false;
    }

  }


}



function getPossibleSwapArr(array)
{
    let zeroPos = array.indexOf(0);
    //console.log(zeroPos);
    let posiNums = [];

    switch(zeroPos){
      case 0:
        posiNums = [1, 3];
        break;
      case 1:
        posiNums = [0, 2, 4];
        break;
      case 2:
        posiNums = [1, 4, 5];
      case 3:
        posiNums = [0, 4, 6];
        break;
      case 4:
        posiNums = [1, 3, 5, 7];
        break;
      case 5:
        posiNums = [2, 4, 8];
        break;
      case 6:
        posiNums = [3, 7];
        break;
      case 7:
        posiNums = [4, 6, 8];
        break;
      case 8:
        posiNums = [5, 7];
        break;
      }

    return posiNums;
}



function fillGrid(array)
{
  for (let index = 0; index < array.length; index++) {
    document.getElementById(index).innerText = array[index];
    
  }
}



//  Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}








// id.addEventListener('click', ()=>{
            
//   var target = event.target || event.srcElement;
//   var eventId = target.id;

//   let temp = array[eventId];
//   array[eventId] = array[id];
//   array[id] = temp;
//   fillGrid(array);
// });



// if(array1.includes(id.innerText)){
//   console.log(id);
// }
// else{
//   console.log("Error!");
// }



// function swapNum(array, array1)
// {
//   square.forEach(id => {
//     //console.log(id)
//     if(array1.includes(id))
//   {
//     id.addEventListener('click', ()=>{
      
//       var target = event.target || event.srcElement;
//       var eventId = target.id;
    
//       let temp = array[eventId];
//       array[eventId] = array[id];
//       array[id] = temp;
//       fillGrid(array);
//      });
//   }else{
//     console.log("err")
//   }
//   });
// }
