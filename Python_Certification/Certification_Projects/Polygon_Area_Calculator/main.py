class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"

    def set_width(self, new_width):
        self.width = new_width

    def set_height(self, new_height):
        self.height = new_height

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return 2 * (self.width + self.height)

    def get_diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** 0.5

    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        res = ""
        for i in range(self.height):
            for j in range(self.width):
                res += "*"
            res += "\n"

        return res

    def get_amount_inside(self, shape):
        return self.get_area() // shape.get_area()

class Square(Rectangle):
    def __init__(self, length):
        self.width = length
        self.height = length

    def __str__(self):
        return f"Square(side={self.width})"

    def set_width(self, new_width):
        self.width = new_width
        self.height = new_width
    
    def set_height(self, new_height):
        self.width = new_height
        self.height = new_height

    def set_side(self, new_length):
        self.width = new_length
        self.height = new_length
