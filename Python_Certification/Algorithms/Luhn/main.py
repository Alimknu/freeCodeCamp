def verify_card_number(digits):
    res = 0
    digits = digits.replace("-", "")
    digits = "".join(digits.split())

    digits = digits[::-1]

    other = False

    for num in digits:
        new_num = int(num)

        if other == True:
            new_num = 2 * new_num

            if new_num > 9:
                new_num = new_num - 9

        res += new_num
        other = not other
    
    if (res % 10 == 0):
        return "VALID!"

    return "INVALID!"

if __name__ == "__main__":
    print(verify_card_number('453914881'))
    print(verify_card_number('453914889'))
    print(verify_card_number('4111-1111-1111-1111'))
    print(verify_card_number('1234 5678 9012 3456'))