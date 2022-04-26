import os

ans = [[0 for i in range(2)]for j in range(500)]
i = 0

def eachFile(filepath, i):
    pathDir =  os.listdir(filepath)
    for allDir in pathDir:
        child = os.path.join('%s/%s' % (filepath, allDir))
        if child.find('.md') != -1:
            ans[i][0] = allDir[:-3]
            readFile(child, i)
            i = i + 1
 
def readFile(filename, i):
    fopen = open(filename, 'r', encoding='utf-8') # r 代表read
    for eachLine in fopen:
        if eachLine.find('abbrlink:') != -1:
            str = (eachLine.split(' ', 1)[1]).split('\n', 1)[0]
            if str.find("'") != -1:
                str = str[1:-1]
            ans[i][1] = str
            break
    fopen.close()

def writeFile(filename):
    fopen = open(filename, 'w', encoding='utf-8')
    fopen.write('%s\n%s\n%s\n%s\n%s\n%s\n' % ('---','title: 导航','date: 2020-04-16 09:44:35','type: "navigation"','comments: false','---'))
    for aLine in ans:
        if aLine[0] == 0:
            break
        str = '[' + aLine[0] + '](https://blog.lordash.cf/posts/' + aLine[1] + '.html)\n' 
        fopen.write(str)
    fopen.close()
 
if __name__ == '__main__':
    eachFile("E:/Demo/blog/source/_posts", i)
    print(ans)
    writeFile("E:/Demo/blog/source/navigation/index.md")