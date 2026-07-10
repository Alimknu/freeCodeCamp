def hanoi_solver(n):
    if n <= 0 or not isinstance(n, int):
        return f"Please input a positive integer value. {n} is not valid."

    moves_taken = []

    def hanoi(n, start, spare, target):
        if n <= 0:
            return
        
        # Move the n-1 disks out of the current "start" rod to the current "spare" rod
        # In English: All the blocks that are on top of the biggest block are moved to "spare" rod so we can move the biggest block straight to the "target" rod
        hanoi(n - 1, start, target, spare)
        
        # Move the n disk from the "start" rod to the "target" rod
        target.append(start.pop())

        # A move was taken (the append / pop),
        # NOTE: We can reference the original arrays since 
        # Python passes them by reference
        moves_taken.append(f"{rod1} {rod2} {rod3}")

        # Since we put the solution of n-1 onto the "spare" rod, # we need to use the "spare" rod as the "starting point"
        hanoi(n - 1, spare, start, target)

    rod1 = [i for i in range(n, 0, -1)]
    rod2 = []
    rod3 = []

    moves_taken.append(f"{rod1} {rod2} {rod3}")

    hanoi(n, rod1, rod2, rod3)

    return "\n".join(moves_taken)

if __name__ == "__main__":
    print(hanoi_solver(3))