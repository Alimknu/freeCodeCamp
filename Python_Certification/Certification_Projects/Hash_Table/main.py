class HashTable:
    def __init__(self):
        self.collection = {}

    def hash(self, string):
        res = 0
        for char in string:
            res += ord(char)
        return res
    
    def add(self, key, value):
        if not self.hash(key) in self.collection:
            self.collection[self.hash(key)] = {}
        self.collection[self.hash(key)][key] = value
            

    def remove(self, key):
        if self.lookup(key):
            del self.collection[self.hash(key)][key]
        else:
            return None

    def lookup(self, key):
        if self.hash(key) in self.collection:
            if key in self.collection[self.hash(key)]:
                return self.collection[self.hash(key)][key]
        return None