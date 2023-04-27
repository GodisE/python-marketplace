from django.contrib.auth.models import User
from django.db import models


class Type(models.Model):
    name = models.CharField(max_length = 225)

    class Meta:
        ordering = ('name',)


    def __str__(self):
        return self.name
    

class Species(models.Model):
    name = models.CharField(max_length = 225)

    class Meta:
        ordering = ('name',)
        db_table = 'species'

    def __str__(self):
        return self.name

class Item(models.Model):
    type = models.ForeignKey(Type, related_name="item.item.type+", on_delete=models.CASCADE)
    # species = models.ForeignKey(Species, related_name="item.item.species+", on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=False)
    price = models.FloatField()
    image = models.ImageField(upload_to='item_images', blank=True, null=True)
    is_sold = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add= True)
    created_by= models.ForeignKey(User, related_name="item", on_delete=models.CASCADE)

    class Meta: 
        db_table = 'item'