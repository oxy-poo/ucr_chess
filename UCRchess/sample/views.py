from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def homePage(request):
    return render(request, 'sample/index.html' )#HttpResponse("Hello!")
def about(request):
    return render(request, 'sample/about_page.html' )#HttpResponse("Hello!")
