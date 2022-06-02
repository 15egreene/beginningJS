# You have a list of integers. 
# The task is to return the maximum sum of the elements located between two negative elements, 
# or if there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell.
# No negative element should be present in this sum.
# Example:
# [4, -1, 6, -2, 3, 5, -7, 7] -> 8
#      ^      ^         ^
# Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger.


# find a way to return max sum 
# loop through list looking for negative element

def alist(int):
    empty=[]
    counter = 0
    for i in int:
        if i > 0:
            empty.append(i)
            counter+=1
        elif i < 0:
            return sum()
                  
print(alist([4, -1, 6, -2, 3, 5, -7, 7]))