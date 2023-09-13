var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {

    const aw = Math.abs(ax1 - ax2) 
    const ah = Math.abs(ay1 - ay2)
    const aa = aw * ah

    const bw = Math.abs(bx1 - bx2) 
    const bh = Math.abs(by1 - by2)
    const ba = bw * bh

    const combineda = aa + ba

    const startx = Math.min(ax1, bx1);
    const endx = Math.min(ax2, bx2);

    let x = []
    for(let i = startx; i <= endx; i++) {
        if(i >= ax1 && i >= bx1) {
            x.push(i)
        } 
    }
    const sharedx1 = x[0]
    const sharedx2 = x[x.length-1];
    const sharedw = Math.abs(sharedx1 - sharedx2)

    let starty = Math.min(ay1, by1);
    let endy = Math.min(ay2, by2)

    let y = []
    for(let i = starty; i <= endy; i++) {
        if(i >= ay1 && i >= by1) {
            y.push(i)
        }
    }
    const sharedy1 = y[0]
    const sharedy2 = y[y.length-1];
    const sharedh = Math.abs(sharedy1 - sharedy2)

    const shareda = sharedh * sharedw;

    if(!shareda) {
        return combineda
    }
    return combineda - shareda

};