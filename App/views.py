from django.shortcuts import render
from .models import *
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
analyzer = SentimentIntensityAnalyzer()
from django.http import JsonResponse
import speech_recognition as sr
from django.http import HttpResponse
from django.shortcuts import render
import nltk

from django.contrib.auth.models import User, auth
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required


import pyaudio
import librosa
import numpy as np
from keras.models import load_model
from transformers import AutoModelForSequenceClassification, AutoTokenizer
from transformers import AutoModelWithLMHead, AutoTokenizer
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from keras.models import load_model
from transformers import AutoProcessor, AutoModelForAudioClassification
from django.views.decorators.csrf import csrf_exempt
import random
from django.core.mail import send_mail

# Create your views here.
def indexpage(request):
 Main_obj=mainscreen.objects.all()
 Depression_articles=depression_articles.objects.all()
 print(Main_obj)
 context={
    'Main_obj':Main_obj,
    'Depression_articles':Depression_articles,
    }
 return render(request ,'index.html',context)


user = ""
@login_required(login_url='login')
def formpage(request):
  
  if request.method == 'POST':
    gender=request.POST.get('gender')
    data=list(request.POST.items())
    age=request.POST.get('age')
    educationallevel=request.POST.get('educationallevel')
    maritalstatus=request.POST.get('maritalstatus')
    employmentstatus=request.POST.get('employmentstatus')
    province=request.POST.get('province')
    user=request.user
    en=Anxiety(user=request.user, gender=gender, age=age, educationallevel=educationallevel,maritalstatus=maritalstatus,employmentstatus=employmentstatus,province=province)
    en.save()
    return render(request ,'anxietyTest.html')
  return render(request ,'form2.html',)


@login_required(login_url='login')
def formpage2(request):
  if request.method == 'POST':
    gender=request.POST.get('gender')
    data=list(request.POST.items())
    age=request.POST.get('age')
    educationallevel=request.POST.get('educationallevel')
    maritalstatus=request.POST.get('maritalstatus')
    employmentstatus=request.POST.get('employmentstatus')
    province=request.POST.get('province')
    user=request.user
    en=Depression(user=request.user, gender=gender, age=age, educationallevel=educationallevel,maritalstatus=maritalstatus,employmentstatus=employmentstatus,province=province)
    en.save()
    return render(request ,'DepressionTest.html')
  return render(request ,'form.html')

@csrf_exempt
def AnxietyTestResultView(request):
  if request.method == 'POST':
    score = request.POST.get('score')
    quiz = request.POST.get('quiz')
    url = request.POST.get('url')

    # try:
    #     obj = AnxietyTestResult.objects.get(user=request.user)
    #     obj.score = score
    #     obj.quiz = quiz
    #     obj.url = url
    #     obj.save()
    # except AnxietyTestResult.DoesNotExist:
    obj = AnxietyTestResult(user=request.user, score=score, quiz=quiz, url=url)
    obj.save()

    return HttpResponse("success")
  else:
    print(request.user)
    results = AnxietyTestResult.objects.filter(user=request.user)
    return render(request ,'AnxietyTestResult.html', {'results': results})



@csrf_exempt
def DepressionTestResultView(request):
    if request.method == 'POST':
        score = request.POST.get('score')
        quiz = request.POST.get('quiz')
        url = request.POST.get('url')

        # try:
        #     obj = DepressionTestResult.objects.get(user=request.user)
        #     obj.score = score
        #     obj.quiz = quiz
        #     obj.url = url
        #     obj.save()
        # except DepressionTestResult.DoesNotExist:
        obj = DepressionTestResult(user=request.user, score=score, quiz=quiz, url=url)
        obj.save()
    
        return HttpResponse("success")
    else:
        results = DepressionTestResult.objects.filter(user=request.user)
        return render(request ,'DepressionTestResult.html', {'results': results})

def About(request):
    return render(request ,'about.html')

def Tests(request):
    return render(request ,'tests.html')

def Causes(request):
    return render(request ,'causes.html')

def Getbetter(request):
    return render(request ,'getbetter.html')

def Helpsomeone(request):
    return render(request ,'helpsomeone.html')

def Predictions(request):
    return render(request ,'predictions.html')

def results(request):
    return render(request ,'results.html')

def ProHelp(request):
    return render(request ,'prohelp.html')
    
def sentiment_analysis(request):
    text = request.GET.get('text')
    scores = analyzer.polarity_scores(text)
    Negative= scores['neg']*100
    Positive= scores['pos']*100
    Neutral= scores['neu']*100
    return render(request, 'sentiment_result.html', {'Negative': Negative, 'Positive': Positive, 'Neutral': Neutral, 'text': text})
    #return JsonResponse(scores)


def SA(request):
    return render(request ,'sa.html')




def voice_to_text(audio_file):
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_file) as source:
        audio_text = recognizer.record(source)
    return recognizer.recognize_google(audio_text)


def analyze_sentiment(text):
    analyzer = SentimentIntensityAnalyzer()
    sentiment = analyzer.polarity_scores(text)
    return sentiment

def analyze_voice(request):
    if request.method == 'POST':
        audio_file = request.FILES['audio_file']
        text = voice_to_text(audio_file)
        sentiment = analyze_sentiment(text)
        return render(request, 'sentiment.html', {'sentiment': sentiment})
    return render(request, 'input.html')

def register(request):
    print("Hello")
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                messages.info(request, 'Email Taken')
                return redirect('signup')
            elif User.objects.filter(username=username).exists():
                messages.info(request, 'Username Taken')
                return redirect('signup')
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save()

                #log user in and redirect to settings page
                user_login = auth.authenticate(username=username, password=password)
                auth.login(request, user_login)

                #create a Profile object for the new user
                return redirect('login')
        else:
            messages.info(request, 'Password Not Matching')
            return redirect('register')      
    else:
        return render(request, 'register.html')

def login(request):
    
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.error(request, 'Invalid credentials. Please try again.')
            return redirect('login')

    else:
        return render(request, 'login.html')
    
def forgetPassword(request):
    if request.method == 'POST':
        email = request.POST['email']

        # generate a otp for user
        otp = random.randint(100000, 999999)


        try:
            user = User.objects.get(email=email)
            forget = ForgetPassword(user=user, otp=otp)
            forget.save()

            email_from = settings.EMAIL_HOST_USER
            email_subject = "Reset Password"
            email_body = "You have forgot you account password. Your OTP is " + str(otp)
            print(user)
            print(email)
            print(otp)
            send_mail(email_subject, email_body, email_from, [email], fail_silently=False)
            return redirect('resetPassword')
        except Exception as e:
            print(e)
            messages.error(request, 'An error accured. Please try again.')
            return render(request, 'forgetPassword.html')
    else:
        return render(request, 'forgetPassword.html')

def resetPassword(request):
    if request.method == 'POST':
        otp = request.POST['otp']
        password = request.POST['password']
        password2 = request.POST['password2']

        try:
            forget = ForgetPassword.objects.get(otp=otp)
            user = forget.user
            if password == password2:
                user.set_password(password)
                user.save()
                forget.delete()
                messages.success(request, 'Password reset successfully.')
                return redirect('login')
            else:
                messages.error(request, 'Password not matching.')
                return redirect('resetPassword')
        except:
            messages.error(request, 'Invalid OTP.')
            return redirect('resetPassword')
    else:
        return render(request, 'resetPassword.html')

@login_required(login_url='login')
def logout(request):
    auth.logout(request)
    return redirect('/')