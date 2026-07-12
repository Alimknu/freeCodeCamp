# This is not part of the course, but it's a template I want to have for myself

def solve_dfs(problem_input):
    results = []
    state = [] # This can be a list, set, or graph that tracks the current path
    
    def explore(step, state):
        
        # 1. DEFINE BASE CASE
        if is_solution(step, state):
            results.append(process_solution(state))
            return # Stop going deeper
        
        # 2, ITERATE OVER CHOICES
        for choice in get_all_choices(step, state):
            
            # 3. CONSTRAINT CHECK
            if is_valid(choice, state):
                
                # 4. MAKE MOVE
                apply_choice(choice, state)
                
                # 5. RECURSE
                explore(step + 1, state)
                
                # 6. BACKTRACK
                remove_choice(choice, state)
    
    # Activate the recursion
    explore(start_step, state)
    
    return results

# I will now go through an example of how I applied this logic for the N-Queens Problem:

def dfs_n_queens(n):
    # I elected to use global variables instead of passing the state everytime, it's a design choice I felt was more easy to implement
    
    res = []
    board = [-1] * n # This is the state that will track the current board we're exploring. It holds the indices of the so-far current valid solution for N-Queens

    if n < 1: # This is early handling of potential error situations, this is not shown in the template but should be done for all code, not just DFS/Backtracking
        return res

    # These are important state variables to assist with our Constraints Check (#3)
    blocked_cols = set()
    blocked_upper_diag = set()
    blocked_lower_diag = set()

    # This is the definition of our specific Constraints Check (#3)
    def is_safe(row, col):
        if col not in blocked_cols and row - col not in blocked_upper_diag and row + col not in blocked_lower_diag:
            return True
        return False

    def solve_n_queens(row): # This is our recursive explore
        if row == n: # This is the base case, where we've reached the last level we are supposed to be at (meaning we found a solution)
            res.append(list(board))
            print(f"SOLUTION FOUND! - Appending list: {list(board)}")
            return

        # Since we are recursively adding rows, we just need to loop through our columns
        for col in range(n):
            print(f"Current row: {row} - Current col: {col}")
            if is_safe(row, col): # This is the actual usage of our constraints check (#3)
                blocked_cols.add(col) # Adding the data to our earlier defined sets is relevant to our constraints check
                blocked_upper_diag.add(row - col)
                blocked_lower_diag.add(row + col)

                board[row] = col # This is the make move, where we try to explore the boards we can make from assigning a queen to the current row and column (#4)
                print(f"Setting board[{row}] = {col}")

                solve_n_queens(row + 1) # Recurse (#5)
                print(f"Done recursing for row: {row} - col: {col}")

                # This is a part of backtracking, but also making sure the constraints check is proper
                blocked_cols.remove(col)
                blocked_upper_diag.remove(row - col)
                blocked_lower_diag.remove(row + col)

                board[row] = -1 # This is the "actual" backtracking, as we remove the current solution since we've exhausted all the future paths from the current solution

    # We activate the recursion starting from 0
    solve_n_queens(0)
    
    return res