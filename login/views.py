from django.shortcuts import render
from django.http import HttpResponse
import mysql.connector as sql
el=''
psw=''

# Create your views here.
def login (request):
    global el,psw
    if request.method=="POST":
        m=sql.connect(host='localhost', user="root", passwd="jyoti",database="website")
        cursor=m.cursor()
        d=request.POST
        for key, value in d.items():
            if key == "email":
                el = value
            if key == "password":
                psw = value

        c="select * from users where email='{}' and password= '{}'".format(el, psw)
        cursor.execute(c)
        t=tuple(cursor.fetchall())
        if t==():
            return render(request, 'error.html')
        else:
            return render(request, 'welcom.html')


# Create your views here.

    return render(request, 'login.html')


