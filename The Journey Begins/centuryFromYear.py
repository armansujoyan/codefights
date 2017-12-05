def centuryFromYear(year):
    century = year // 100
    # Get the amount of centuries
    fractionalPart = year % 100
    # If fraction part is greater
    # than 0 add one to century to
    # get exact century 
    if fractionalPart > 0:
        century += 1
    return century