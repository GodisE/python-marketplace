from django import forms

from .models import Item

# adding input class to new item page
INPUT_CLASSES = ''

class NewItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = ('type', 'description', 'price', 'image')


        widgets = {
            'type': forms.Select(attrs={
            'class': INPUT_CLASSES
            }),
            # 'species': forms.Select(attrs={
            # 'class': INPUT_CLASSES
            # }),
            'description': forms.Textarea(attrs={
            'class': INPUT_CLASSES
            }),
            'price': forms.TextInput(attrs={
            'class': INPUT_CLASSES
            }),
            'image': forms.FileInput(attrs={
            'class': INPUT_CLASSES
            })
        }



class EditItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = ('type', 'description', 'price', 'image', 'is_sold')


        widgets = {
            'type': forms.Select(attrs={
            'class': INPUT_CLASSES
            }),
            # 'species': forms.Select(attrs={
            # 'class': INPUT_CLASSES
            # }),
            'description': forms.Textarea(attrs={
            'class': INPUT_CLASSES
            }),
            'price': forms.TextInput(attrs={
            'class': INPUT_CLASSES
            }),
            'image': forms.FileInput(attrs={
            'class': INPUT_CLASSES
            })
        }