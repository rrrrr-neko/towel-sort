
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if ( matrix.length != 0){
    let res_arr = [];
    matrix.map( function(item, index) {
        if (index % 2 == 1) {
            res_arr.push(item.reverse());
        }
        else res_arr.push(item);
    })
    return res_arr.join().split(',');
  }
  return [];
}
