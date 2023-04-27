from django.contrib import admin

from .models import Type, Item, Species

admin.site.register(Type)
# admin.site.register(Species)
admin.site.register(Item)
