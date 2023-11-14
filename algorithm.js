function findLongestWordLength(str) { 
  let arr = [];
  let aux = 0;
  let aux_text = "";
  arr = str.split(" ",str.length); // Split the string 
  for(let  i = 0 ;i < arr.length ;i++){
  if(aux < arr[i].length){
    aux = arr[i].length;
  }
  }
  return aux; // Returns the length of the longest word in the provided sentence.
} 
