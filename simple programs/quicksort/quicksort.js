// let myArray = [7, 2, 1, 4, 6, 3, 5, 8];
let myArray = [5,3,7,6,2,9];;



function quickSort(arrayToSort, leftIndex, rightIndex) {


    if( leftIndex < rightIndex) {

      let indexCounter =  splitArray(arrayToSort, leftIndex, rightIndex);

      quickSort(arrayToSort, leftIndex, indexCounter - 1);
      quickSort(arrayToSort, indexCounter + 1  , rightIndex);

    }




}




function splitArray(arrayToSplit, l, r) {
  let pivotIndex = selectPivot(l, r);
  let pivotValue = arrayToSplit[pivotIndex];

  change(arrayToSplit, pivotIndex, r);


  console.log('pivotValue: ', pivotValue);

  let i = -1;
  for(let j = 0; j <= r - 1; j++) {

    if(arrayToSplit[j] < pivotValue) {

            i++;
            change(arrayToSplit, j, i )


    }

  }

 //place pivot in p = i + 1;
  i++;
  change(arrayToSplit, i, r);
  console.log('after change: ', arrayToSplit);
  return i;
}


function movePivot(workArray, value, indexToMoveTo){
    workArray.pop();
    workArray.splice(indexToMoveTo, 0, value);
}


 function selectPivot(l, r) {
   let pivot = Math.round((l + (r-1)) / 2);
   console.log('pivot: '. pivot)
   return pivot;
 }



 function change(arrayToWorkOn, index1, index2) {
     let aux = arrayToWorkOn[index1];
     arrayToWorkOn[index1] = arrayToWorkOn[index2];
     arrayToWorkOn[index2] = aux;

  }

  quickSort(myArray, 0, myArray.length - 1);
