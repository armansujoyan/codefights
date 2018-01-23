// This solution is not the most straightforward and it can be written
// in a simpler way, however the logic is the following. We have to check
// to see if the sum of hands of both people are equal and check to see if
// their hands are equal separately.
const areEquallyStrong = function (yourLeft, yourRight, friendsLeft, friendsRight) {
    return ((yourLeft/friendsLeft) === (yourRight/friendsRight) ||
           (yourLeft/friendsRight) === (yourRight/friendsLeft)) &&
           (yourLeft + yourRight) === (friendsRight + friendsLeft)
}