import random
from abc import ABC, abstractmethod

class Player(ABC):
    def __init__(self):
        self.moves = []
        self.position = (0, 0)
        self.path = [self.position]

    def make_move(self):
        moveX, moveY = random.choice(self.moves)
        x, y = self.position
        pos = (x + moveX, y + moveY)
        self.path.append(pos)
        self.position = pos
        return pos

    @abstractmethod
    def level_up(self):
        pass

class Pawn(Player):
    def __init__(self):
        super().__init__()
        self.moves = [(1, 0), (0, 1), (-1,0), (0,-1)]

    def level_up(self):
        self.moves = self.moves + [(1,1), (1,-1), (-1,1), (-1,-1)]