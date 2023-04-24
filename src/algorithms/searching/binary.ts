function binarySearch(array: any[], value: typeof array[number]){
  var start = 0;
  var end = array.length - 1;
  var middle = Math.floor((start + end) / 2);
  
  while(array[middle] !== value && start <= end) {
      if(value < array[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }

  return array[middle] === value ? middle : -1;
}
