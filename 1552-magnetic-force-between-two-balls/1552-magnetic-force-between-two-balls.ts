function maxDistance(position: number[], m: number): number {
    position = position.sort((n1,n2) => n1 - n2);
    let l = 0, r = position[position.length - 1] - position[0], answer = -1;
    while(l <= r){
        const mid = (l+r)/2|0

        if(canPlaceBalls(position, m, mid)){
            answer = mid
            l = mid + 1
        }else{
            r = mid - 1
        }
    }

    return answer;
};

function canPlaceBalls(positions:number[], m: number, mid: number): boolean{
    
    let balls = 1, position = positions[0]

    for(let i = 1; i < positions.length;i++){
        if(positions[i] - position >= mid){
            balls++
            position = positions[i]
            if(balls === m){
                return true
            }
        }
    }
    return false;
}