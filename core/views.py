from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from item.models import Type, Item, Species

from .forms import SignupForm


def index(request):
    items = Item.objects.filter(is_sold=False)[0:8]
    types = Type.objects.all()
    species = Species.objects.all()

    return render(request, 'core/index.html', {
        'types': types,
        "items": items,
        'species': species
    })


def contact(request):
    return render(request, 'core/contact.html')


def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        for field in form:
            print(field)
        if form.is_valid():
            form.save()
            return redirect('/login/')
    else:
        form = SignupForm

    return render(request, 'core/signup.html', {
        'form': form
    })

@login_required
def user_logout(request):
    logout(request)
    render(request, 'core/logout.html')