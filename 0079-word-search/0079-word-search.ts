function exist(board: string[][], word: string): boolean {
  const visited: Map<string, boolean> = new Map<string, boolean>();

  const dp = (x: number, y: number, checkingPath: string): boolean => {
    if (visited.has(`${x},${y}`)) return false;
    if (checkingPath === board[x][y]) return true;
    let res = false;

    if (board[x][y] === checkingPath[0]) {
      visited.set(`${x},${y}`, true);
      if (board[x+1]) {
        res = dp(x+1, y, checkingPath.slice(1));
      }

      if (board[x][y+1] && !res) {
        res = dp(x, y+1, checkingPath.slice(1));
      }

      if (board[x-1] && !res) {
        res = dp(x-1, y, checkingPath.slice(1));
      }

      if (board[x][y-1] && !res) {
        res = dp(x, y-1, checkingPath.slice(1));
      }
    } else {
      return false;
    }
    visited.delete(`${x},${y}`);

    return res;
  }

  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[i].length; j++) {
      if (board[i][j] === word[0] && dp(i, j, word)) {
        return true;
      }
      visited.clear();
    }
  }

  return false;
};

/**
ABCESEEEFS

[ ["A","B","C","E"],
  ["S","F","E","S"],
  ["A","D","E","E"]
  ]
 */
