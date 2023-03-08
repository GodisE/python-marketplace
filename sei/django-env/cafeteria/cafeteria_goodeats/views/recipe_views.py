from django.shortcuts import get_object_or_404
from rest_framework import status, generics
from rest_framework.response import Response

from ..models.recipe import Recipe
from ..serializers import RecipeSerializer, RecipeReaderSerializer

class RecipesView(generics.ListCreateAPIView):
    """
    A view for seeing all recipes and creating a single recipes

    /cafeteria/recipes/
    """
    serializer_class = RecipeSerializer

    def get(self, request):
        recipes = Recipe.objects.all()
        serializer = RecipeReaderSerializer(recipes, many=True)
        return Response({'recipes': serializer.data})
    
    def post(self, request):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# /recipes/id
class RecipeDetailView(generics.ListCreateAPIView):
    serializer_class = RecipeSerializer

    def get(self, request, pk):
        # pk  primary key - specifying single specific object
        # pk (what we want) = pk (what we're passing in)
        recipe = get_object_or_404(Recipe, pk=pk)
        serializer = RecipeReaderSerializer(recipe)
        return Response(serializer.data)
    
    def patch(self, request, pk):
        recipe = get_object_or_404(Recipe, pk=pk)
        serializer = RecipeSerializer(recipe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
            status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        recipe = get_object_or_404(Recipe, pk=pk)
        recipe.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)