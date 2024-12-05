function canChange(start: string, target: string): boolean {
    if(start === target) return true;

    let i = 0; // iterate over start string
    let j = 0; // iterate over target string

    while(i < start.length || j < target.length){

        if(start[i] == "_") {
            i++;
            continue;
        }

        if(target[j] == "_") {
            j++;
            continue;
        }

        if(start[i] != target[j]){
            return false;
        }

        if(start[i] == "L" && i < j) {
            return false;
        }

        if(start[i] == "R" && i > j){
            return false;
        }

        i++;
        j++;
    }

    return true;
};