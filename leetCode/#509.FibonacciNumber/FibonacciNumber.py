class Solution:
    def fib(self, n: int) -> int:
        if(n==1 or n==0):
            return n
        else:
            return Solution.fib(self,n-1)+Solution.fib(self,n-2)
