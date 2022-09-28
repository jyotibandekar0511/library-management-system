from django.urls import path
from .views import addbook

urlpatterns = [
    path('',addbook),

]