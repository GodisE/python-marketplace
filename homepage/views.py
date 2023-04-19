from django.shortcuts import render

from item.models import Item

def index(request):
    items = Item.objects.filter(is_sold=False)[0:6]

    return render(request, 'homepage/homepage.html', {
        "items": items,
    })
