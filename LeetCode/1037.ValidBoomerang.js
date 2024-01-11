var isBoomerang = function(points) {
    let coordinates = {}
    let slopes = [];
    for (let i = 0; i < points.length; i++) {
        let slope
        if (i !== points.length - 1) {
            slope = (points[i+1][1] - points[i][1]) / (points[i+1][0] - points[i][0])
        }
        if(coordinates[points[i][0]]?.includes(points[i][1]) || slopes.includes(slope)) {
          return false
        } else {
            if (coordinates[points[i][0]]) {
                coordinates[points[i][0]].push(points[i][1])
                if (coordinates[points[i][0]].length > 2) {
                    return false
                }
            } else {
              coordinates[points[i][0]] = [points[i][1]]

            }
          slopes.push(slope)
        }
    }
    return true
};