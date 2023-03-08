from django.db import models
from .ingredients import Ingredients

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=170)
    ingredients = models.ForeignKey(
        Ingredients,
        on_delete= models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__ (self):
        return f"Name of Recipe: {self.name}, Description: {self.description}, Ingredients: {self.ingredients}"