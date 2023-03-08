from rest_framework import serializers

from .models.ingredients import Ingredients
from .models.recipe import Recipe

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        # we can put custom validation on our Models
        model = Ingredients
        # can specify what informaiton is coming from the serializer, but for now we want all fields
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class RecipeReaderSerializer(serializers.ModelSerializer):
    ingredients = serializers.StringRelatedField()
    class Meta:
        model= Recipe
        fields = '__all__'