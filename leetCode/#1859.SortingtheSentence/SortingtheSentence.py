class Solution:
    def sortSentence(self, s: str) -> str:
        str1=s[::-1].split()
        str1.sort()
        result=[]
        for i in str1:
            result.append(i[1:][::-1])
        return " ".join(result)