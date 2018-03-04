from langdetect import detect

lang = detect("مات")

print(lang)


with open('messages.txt') as f:
    lines = f.readlines()
    print(lines)
    for l in lines :
      print(l.split())
      #lang = detect(l)
      #print(lang)
     
