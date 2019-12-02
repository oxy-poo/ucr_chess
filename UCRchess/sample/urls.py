from django.urls import path

from . import views

urlpatterns = [
    path('', views.homePage, name='index'),
    path('about/', views.about, name='about'),
]
