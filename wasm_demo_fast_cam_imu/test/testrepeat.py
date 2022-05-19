import matplotlib.pyplot as plt
import numpy as np

gxlist = []
gylist = []
gzlist = []
axlist = []
aylist = []
azlist = []

with open('111.txt', 'r') as f:
    l = f.readlines()
    for i in range(0,len(l)):
        l[i] = l[i].replace(' ', '')
        if(l[i].find("angular_velocity:")!=-1):
            gxlist.append(float(l[i+1].split( )[1]))
            gylist.append(float(l[i+2].split( )[1]))
            gzlist.append(float(l[i+3].split( )[1]))
        elif(l[i].find("linear_acceleration:")!=-1):
            axlist.append(float(l[i+1].split( )[1]))
            aylist.append(float(l[i+2].split( )[1]))
            azlist.append(float(l[i+3].split( )[1]))

realgtime = 1
for i in range(180,240):
    if(gxlist[i]!=gxlist[i+1] or gylist[i]!=gylist[i+1] or gzlist[i]!=gzlist[i+1]):
        realgtime += 1

realatime = 1
for i in range(180,240):
    if(axlist[i]!=axlist[i+1] or aylist[i]!=aylist[i+1] or azlist[i]!=azlist[i+1]):
        realatime += 1

print("gyroscope = "+str(realgtime))
print("accel = "+str(realatime))
