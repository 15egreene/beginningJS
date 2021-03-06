# Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
# Notes
# Multiple correct answers may be possible. In this case, return any one of them.
# The given index will be inside the given array.
# The given array will, therefore, never be empty.
# Example
# least_larger( [4, 1, 3, 5, 6], 0 )  ->  3
# least_larger( [4, 1, 3, 5, 6], 4 )  -> -1
# [2,2,3,5,6,1] , 1  -> 2

# write a function that takes two parameters
# loop through list 
# for whatever index given, find the second largest number, if there is none, return -1



def indice(arr, index1):
    empty =[]
    for i in arr:
        if arr[index1] < i:
            empty.append(i)
    if len(empty) > 0:
            return arr.index(min(empty))
    else:
        return -1
print(indice( [2,2,3,5,6,1], 1 )) 