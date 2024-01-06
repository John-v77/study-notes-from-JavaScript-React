# You get an array of arrays.
# If you sort the arrays by their length, you will see, that their length-values are consecutive.
# But one array is missing!


# You have to write a method, that return the length of the missing array.

# Example:
# [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

# If the array of arrays is null/nil or empty, the method should return 0.

# When an array in the array is null or empty, the method should return 0 too!
# There will always be a missing element and its length will be always between the given arrays.

# Have fun coding it and please don't forget to vote and rank this kata! :-)

# I have created other katas. Have a look if you like coding and challenges.


# Solution

def get_length_of_missing_array(arrays):
    arrays = [len(a) if a is not None else 0 for a in arrays ]
    arrays.sort()
    if 0 in arrays or len(arrays) == 0 : return 0
    for i in range(len(arrays)):
        if arrays[i+1] != arrays[i] + 1: return arrays[i]+1