# def is_calculate(resource):
#     # checks if the url is type of "calculate-next" and returns the number param
#     if resource.count('?') != 1:
#         return False, ''
#
#     resource = resource.split('?')
#     if resource[0] != 'calculate-next':
#         return False, ''
#
#     if resource[1][:4] == 'num=':
#         num = resource[1][4:]
#         if len(num) > 0:
#             if num.isnumeric():
#                 return True, num
#             if num[0] == '-' and num[1:].isnumeric():
#                 return True, num
#     return False, ''
#
# # print(is_calculate('calculate-next?num=-12'))
#
# x = 'dahldsb ukdajbkfda jhdsajaud jdjd k'
# print(x.index('jdjd'))
# print(x[29:34])
#
# with open('D:\\networks\\4.4\webroot\\calculate.html') as f:
#     print(f.readlines()[8].index('</h1>'))
# vari = 'ew?fa'
# print(vari.split('?')[1:])
# print(''.join([]))
# request = ['POST /upload?file-name=screen.jpg HTTP/1.1', \
# 'Host: 127.0.0.1:9009', \
# 'Connection: keep-alive', \
# 'Content-Length: 157163', \
# 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"', \
# 'Accept: */*', \
# 'Content-Type: text/plain', \
# 'X-Requested-With: XMLHttpRequest', \
# 'sec-ch-ua-mobile: ?0', \
# 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36', \
# 'sec-ch-ua-platform: "Windows"', \
# "origin: http://127.0.0.1:9009", \
# "Sec-Fetch-Site: same-origin", \
# "Sec-Fetch-Mode: cors", \
# "Sec-Fetch-Dest: empty", \
# "Referer: http://127.0.0.1:9009", \
# "Accept-Encoding: gzip, deflate, br", \
# "Accept-Language: he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7", \
# ""]
# content_length = int([x.split()[1] for x in request if x != '' if x.split()[0] == 'Content-Length:'][0])
# print(content_length)
# print(float('-0.1+8'))

