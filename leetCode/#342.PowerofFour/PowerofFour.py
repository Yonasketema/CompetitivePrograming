class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n==1:
            return True
        
        if n<=3:
            return False
 
        while n != 1:
            if (n>>2)*4!=n:
                return False
            n=n>>2
            
        return True