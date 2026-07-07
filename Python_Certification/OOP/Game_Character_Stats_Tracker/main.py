class GameCharacter:
    def __init__(self, name):
        self.name = name
        self.health = 100
        self.mana = 50
        self._level = 1

    def __str__(self):
        string = [f"Name: {self.name}"]
        string.append(f"Level: {self.level}")
        string.append(f"Health: {self.health}")
        string.append(f"Mana: {self.mana}")
        return ("\n").join(string)

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        self._name = new_name

    @property
    def health(self):
        return self._health

    @health.setter
    def health(self, new_health):
        if (new_health < 0):
            self.health = 0
            return
        if new_health >= 100:
            new_health = 100
        self._health = new_health

    @property
    def mana(self):
        return self._mana

    @mana.setter
    def mana(self, new_mana):
        if (new_mana < 0):
            self.mana = 0
            return
        if new_mana >= 50:
            new_mana = 50
        self._mana = new_mana

    @property
    def level(self):
        return self._level
    
    def level_up(self):
        self._level += 1
        self.health = 100
        self.mana = 50
        print(f"{self.name} leveled up to {self.level}!")