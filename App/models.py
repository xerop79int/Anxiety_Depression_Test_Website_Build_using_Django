from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class mainscreen(models.Model):
    main_title=models.CharField(max_length=500,blank=True,null=True)
    video_link=models.URLField(max_length=300, default='#')
    depression_test_text=models.CharField(max_length=500,blank=True,null=True)
    anxiety_test_text=models.CharField(max_length=500,blank=True,null=True)
    depression_main_title=models.CharField(max_length=500,blank=True,null=True)
    depression_main_description=models.CharField(max_length=500,blank=True,null=True)

class depression_articles(models.Model):
  
    article_image=models.ImageField(upload_to='static/images')
    article_heading=models.CharField(max_length=500,blank=True,null=True)
    article_description=models.CharField(max_length=500,blank=True,null=True)
    article_link=models.URLField(max_length=300, default='#')

class Depression(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    gender=models.CharField(max_length=500,blank=True,null=True)
    age=models.CharField(max_length=500,blank=True,null=True)
    educationallevel=models.CharField(max_length=500,blank=True,null=True)
    maritalstatus=models.CharField(max_length=500,blank=True,null=True)
    employmentstatus=models.CharField(max_length=500,blank=True,null=True)
    province=models.CharField(max_length=500,blank=True,null=True)
    

class Anxiety(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    gender=models.CharField(max_length=500,blank=True,null=True)
    age=models.CharField(max_length=500,blank=True,null=True)
    educationallevel=models.CharField(max_length=500,blank=True,null=True)
    maritalstatus=models.CharField(max_length=500,blank=True,null=True)
    employmentstatus=models.CharField(max_length=500,blank=True,null=True)
    province=models.CharField(max_length=500,blank=True,null=True)

class ForgetPassword(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    otp = models.IntegerField(blank=True,null=True)


class AnxietyTestResult(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    score = models.IntegerField()
    quiz = models.IntegerField()
    url = models.CharField(max_length=500,blank=True,null=True)

class DepressionTestResult(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    score = models.IntegerField()
    quiz = models.IntegerField()
    url = models.CharField(max_length=500,blank=True,null=True)
