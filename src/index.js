
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
    return [];
  }
  const transformedArr = matrix.map((row,index) => {
    if(index%2 === 0){
      return row;
    } else {
      return row.reverse();
    }
  })

  return transformedArr.flat(1);
}
