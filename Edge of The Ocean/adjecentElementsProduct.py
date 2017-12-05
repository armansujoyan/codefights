def adjacentElementsProduct(inputArray):
    # Assume the product of first two elements is the biggest
    adjacentProduct = inputArray[0] * inputArray[1]
    for element in range(0, len(inputArray)-1):
        # If there is a product which is greater, assign it to the variable
        if inputArray[element] * inputArray[element+1] >= adjacentProduct:
            adjacentProduct = inputArray[element] * inputArray[element+1]
    # Return the result
    return adjacentProduct