import matplotlib.pyplot as plt
import numpy as np
imulist = []
imuxlist = []
imagelist = []
imagexlist = []
imu2list = []
time = 0
itime = 0
with open('f2.txt', 'r') as f:
    l = f.readlines()
    for line in l:
        llist = line.split( )
        if("imu" in  line):
            time+=1
            imuxlist.append(time)
            imulist.append(int(llist[2]))
        else:
            itime+=1
            imagexlist.append(itime)
            imagelist.append(int(llist[2]))

# for i in range(0,len(imulist)-2):
#     # if (imulist[i]>=13) and (imulist[i]<=19):
#     #     imu2list.append(imulist[i])
#     # elif (imulist[i+1]>=13) and (imulist[i+1]<=19):
#     #     imu2list.append((imulist[i]+imulist[i+2])/2)
#     # else:
#     #     imu2list.append((imulist[i]+imulist[i+1])/2)
#     # if i%3 == 0:
#     imu2list.append((imulist[i]+imulist[i+1])/2)
# x = np.arange(0,len(imu2list))
# x2 = np.arange(0,len(imagelist))
y = imulist
y2 = imagelist
y3 = imu2list
linelist = plt.plot(imuxlist,y,imagexlist,y2)
# linelist = plt.plot(x,y3)
plt.setp(linelist[0],color = 'r')
plt.setp(linelist[1],color = 'g')
plt.show()
# fig2 = plt.figure()
# plt.scatter(x2,y2,c = 'g')
# plt.show()