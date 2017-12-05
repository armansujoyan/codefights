def shapeArea(n):
    # If we observe the given area by adding more
    # and more pieces to this shape we can easily 
    # see that the formula below gives us the result
    # of any shape with complexity O(1)
    return 2*n**2 - 2*n + 1