var chunk = function(arr, size) {
    let chunk = [];
    for(let i = 0; i < arr.length; i += size) {
        let temp = []
        for(let j = 0; j < size; j++){
          if(arr[i+j] !== undefined){
            temp.push(arr[i+j])
          }
        }
        chunk.push(temp)
    }
    return chunk
};