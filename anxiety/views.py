from typing import Counter
from urllib import request
from django.shortcuts import render
from .models import *
# Create your views here.

def page1(request):
    return render(request ,'anxietyTest.html')

