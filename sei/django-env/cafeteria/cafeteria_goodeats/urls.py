from django.urls import path

from .views.ingredients_views import IngredientsView, IngredientsDetailView
from .views.recipe_views import RecipeDetailView, RecipesView
urlpatterns = [
    path('ingredients/', IngredientsView.as_view()),
    path('ingredients/<int:pk>', IngredientsDetailView.as_view()),
    path('recipes/', RecipesView.as_view()),
    path('recipes/<int:pk>', RecipeDetailView.as_view())
]