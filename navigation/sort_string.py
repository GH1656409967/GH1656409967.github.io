import os

#  href="([/\w]*)"\s*itemprop="url"><span itemprop="name">([^<]*)
#  \n\n\n@@    [$2]($1)\n\n\n

strings = ['A']

def readFile(filename):
    fopen = open(filename, 'r', encoding='utf-8')
    for eachLine in fopen:
        if eachLine.find('[') != -1:
            strings.append(eachLine)
    fopen.close()

def writeFile(filename):
    fopen = open(filename, 'w', encoding='utf-8')
    for aLine in strings:
        fopen.write(aLine)
    fopen.close()

if __name__ == '__main__':
    readFile("E:/work/blog/source/navigation/index.md")
    strings = sorted(strings)
    writeFile("E:/work/blog/source/navigation/out.txt")