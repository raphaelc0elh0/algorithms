function linearSearch(array: any[], value: typeof array[number]){
  for(var i = 0; i < array.length; i++){
      if(array[i] === value) return i;
  }
  return -1;
}