from django.shortcuts import get_object_or_404
from rest_framework import status, generics
from rest_framework.response import Response

from ..models.ingredients import Ingredients
from ..serializers import IngredientSerializer


class IngredientsView(generics.ListCreateAPIView):
    """
    A view for seeing all ingredients and creating a single ingredients

    /cafeteria/ingredients/
    """
    serializer_class = IngredientSerializer

    def get(self, request):
        ingredients = Ingredients.objects.all()
        serializer = IngredientSerializer(ingredients, many=True)
        return Response({'ingredients': serializer.data})
    
    def post(self, request):
        serializer = IngredientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# /ingredients/id
class IngredientsDetailView(generics.ListCreateAPIView):
    serializer_class = IngredientSerializer

    def get(self, request, pk):
        ingredients = get_object_or_404(Ingredients, pk=pk)
        serializer = IngredientSerializer(ingredients)
        return Response(serializer.data)
    
    def patch(self, request, pk):
        ingredients = get_object_or_404(Ingredients, pk=pk)
        serializer = IngredientSerializer(ingredients, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        ingredients = get_object_or_404(Ingredients, pk=pk)
        ingredients.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)