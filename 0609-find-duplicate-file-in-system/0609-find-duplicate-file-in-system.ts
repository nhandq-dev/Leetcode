function findDuplicate(paths: string[]): string[][] {
    let allPath: {[key in string]?: string[]} = {};
    let res: {[key in string]?: string[]} = {};

    for (const path of paths) {
        const [root, ...files] = path.split(' ');
        for (const file of files) {
            const contentStartIn: number = file.indexOf('(');
            const content = file.slice(contentStartIn+1, file.length-1);
            if (allPath[content]) {
                allPath[content].push(root+'/'+file.slice(0,contentStartIn));
                res[content] = allPath[content];
            } else {
                allPath[content] = [root+'/'+file.slice(0,contentStartIn)];
            }
        }
    }

    return Object.values(res);
};