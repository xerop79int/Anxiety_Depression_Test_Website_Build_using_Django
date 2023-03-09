from xml.etree.ElementInclude import include
from django.urls import path
from . import views




urlpatterns = [

    path('',views.indexpage,name='mainscreen'),
    path('form',views.formpage2,name='formpage2'),
    path('form2',views.formpage,name='formpage'),
    path('about',views.About,name='aboutpage'),
    path('tests',views.Tests,name='testspage'),
    path('causes', views.Causes, name='causespage'),
    path('getbetter', views.Getbetter, name='getbetterpage'),
    path('helpsomeone', views.Helpsomeone, name='helpsomeonepage'),
    path('predictions', views.Predictions, name='predictionspage'),
    path('results', views.results, name='resultsspage'),
    path('sentiment_analysis', views.sentiment_analysis, name='sentiment_analysis'),
    path('prohelp', views.ProHelp, name='prohelppage'),
    path('sa', views.SA, name='sapage'),
    path('analyze', views.analyze_voice, name='analyze_voice'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    #path('/logout', views.signout, name='logout'),
    path('AnxietyTestResult/', views.AnxietyTestResultView,name='AnxietyTestResult'),
    path('DepressionTestResult/', views.DepressionTestResultView,name='DepressionTestResult'),
    path('logout', views.logout, name='logout'),
    path('forgetPassword', views.forgetPassword, name='forget'),
    path('resetPassword', views.resetPassword, name='resetPassword')

]
