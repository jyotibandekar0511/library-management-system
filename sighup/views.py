from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
import mysql.connector as sql
fn=''
ln=''
el=''
psw=''

# Create your views here.
def signup (request):
    global fn,ln,el,psw
    if request.method=="POST":
        m=sql.connect(host='localhost', user="root", passwd="jyoti",database="website")
        cursor=m.cursor()
        d=request.POST
        for key, value in d.items():
            if key == "first_name":
                fn=value
            if key == 'last_name':
                ln = value
            if key == "email":
                el = value
            if key == "password":
                psw = value

        c="insert into users Values('{}','{}','{}','{}')".format(fn, ln, el, psw)
        cursor.execute(c)
        m.commit()


    return render(request, 'signup.html')