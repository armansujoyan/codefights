def checkPalindrome(inputString):
    # In order to solve this problem we
    # will use Python's Extended Slice
    # For more information see https://docs.python.org/2.3/whatsnew/section-slices.html
    if inputString == inputString[::-1]:
        return True
        return False