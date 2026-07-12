def dfs_n_queens(n):
    res = []

    if n < 1:
        return res

    blocked_cols = set()
    blocked_upper_diag = set()
    blocked_lower_diag = set()

    board = [-1] * n

    def is_safe(row, col):
        if col not in blocked_cols and row - col not in blocked_upper_diag and row + col not in blocked_lower_diag:
            return True
        return False

    def solve_n_queens(row):
        if row == n:
            res.append(list(board))
            print(f"SOLUTION FOUND! - Appending list: {list(board)}")
            return

        for col in range(n):
            print(f"Current row: {row} - Current col: {col}")
            if is_safe(row, col):
                blocked_cols.add(col)
                blocked_upper_diag.add(row - col)
                blocked_lower_diag.add(row + col)

                board[row] = col
                print(f"Setting board[{row}] = {col}")

                solve_n_queens(row + 1)
                print(f"Done recursing for row: {row} - col: {col}")

                blocked_cols.remove(col)
                blocked_upper_diag.remove(row - col)
                blocked_lower_diag.remove(row + col)

                board[row] = -1

    solve_n_queens(0)
    
    return res
    
if __name__ == "__main__":
    print(dfs_n_queens(4))