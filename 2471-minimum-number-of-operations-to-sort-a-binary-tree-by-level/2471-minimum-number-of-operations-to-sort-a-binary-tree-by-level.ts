function minimumOperations(root: TreeNode | null): number {
    let traveling = (nodes: TreeNode[]): number => {
        const nestedCall: TreeNode[] = [];
        switch (nodes.length) {
            case 0:
                return 0;
            case 1:
                if (nodes[0].left) {
                    nestedCall.push(nodes[0].left);
                }
                if (nodes[0].right) {
                    nestedCall.push(nodes[0].right);
                }
                return traveling(nestedCall);

            case 2:
                if (nodes[0].left) {
                    nestedCall.push(nodes[0].left);
                }
                if (nodes[0].right) {
                    nestedCall.push(nodes[0].right);
                }
                if (nodes[1].left) {
                    nestedCall.push(nodes[1].left);
                }
                if (nodes[1].right) {
                    nestedCall.push(nodes[1].right);
                }

                return nodes[0].val > nodes[1].val ? 1 + traveling(nestedCall) : traveling(nestedCall);
                

            default:
                let changeStep: number = 0;
                // let tempArr: number[] = [];
                let newArr: number[] = [];
                let newArrVisited = [];
                const memoIdx: Map<number, number> = new Map<number, number>();

                for (let i=0; i<nodes.length; i++) {
                    if (nodes[i].left) {
                        nestedCall.push(nodes[i].left)
                    }
                    if (nodes[i].right) {
                        nestedCall.push(nodes[i].right)
                    }
                    // tempArr.push(nodes[i].val);
                    newArr.push(nodes[i].val);
                    newArrVisited.push(false);
                    memoIdx.set(nodes[i].val, i)
                    // newArrVisited[i] = false;
                }
                newArr.sort(function (a, b) {
                    return a - b;
                })
                for (let i = 0; i < nodes.length; i++) {
                    // check if already visited or swapped
                    if (memoIdx.get(newArr[i]) == i || newArrVisited[i]) {
                        continue;
                    }

                    let cycle = 0;
                    let j = i;
                    while (!newArrVisited[j]) {

                        // mark as visited
                        newArrVisited[j] = true;
                        j = memoIdx.get(newArr[j]); //assign next key
                        cycle++;
                    }
                    if (cycle > 0) {
                        changeStep += (cycle > 1) ? cycle - 1 : cycle;
                    } 

                }
                
                return traveling(nestedCall) + changeStep; 
        }
    }
    return root === null ? 0 : traveling([root]);
};
