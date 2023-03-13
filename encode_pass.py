# This code creates the dictionary that encodes the password in 4.12
before = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
after = 'abcdefghijklmnopqrstuvwxyz'

with open('encode.txt', 'w') as f:
    f.write('{')
    for i in range(26):
        what_to_write = f"'{before[i]}': '{after[i]}',"
        if i == 26:
            f.write(what_to_write[:-1])
        else:
            f.write(what_to_write)
        if (i+1) % 10 == 0:
            f.write('\n')
    f.write('}')
