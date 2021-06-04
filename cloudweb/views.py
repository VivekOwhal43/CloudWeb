from django.http import HttpRequest
from django.shortcuts import render
def index_view(request):
    return render(request,'index.html')

def contact_view(request):
    return render(request,'contact_us.html')

def about_view(request):
    return render(request,'about.html')

def bedview(request):
    return render(request,'covidbed.html')

'''def result_view(request):
    user_input =  request.GET['user_input']
    user_input= user_input.upper()
    user_input += "This string is added"
    return render(request,'result.html', {'user_home': user_input})
'''
