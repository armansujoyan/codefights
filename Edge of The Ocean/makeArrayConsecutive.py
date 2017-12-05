def makeArrayConsecutive2(statues):
    # > HINT! Before solving any problem first of all try to
    # > solve it in your mind and then try to write code.
    # In this case the amount of statues needed will be the max
    # height minus the minimum height. Then in order to understand
    # the amount of statues needed we will subtract the length of
    # the array from the needed amount. 
    return max(statues) - min(statues) - len(statues) + 1;