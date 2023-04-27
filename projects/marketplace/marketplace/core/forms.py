from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User


INPUT_CLASSES = ''

class SignupForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    username = forms.CharField(widget=forms.TextInput(attrs={
        'placeholder': 'Your Username',
        'class': INPUT_CLASSES
    }))

    email = forms.CharField(widget=forms.EmailInput(attrs={
        'placeholder': 'Your Email',
        'class': INPUT_CLASSES
    }))

    password1 = forms.CharField(widget=forms.PasswordInput(attrs={
        'placeholder': 'Your Password',
        'class': INPUT_CLASSES
    }))

    password2 = forms.CharField(widget=forms.PasswordInput(attrs={
        'placeholder': 'Confirm Password',
        'class': INPUT_CLASSES
    }))
    # widgets = {
    #     'username': forms.TextInput(attrs={
    #     'class': INPUT_CLASSES,
    #     'placeholder': 'Your Username',
    #     }),
    #     'email': forms.EmailInput(attrs={
    #     'class': INPUT_CLASSES,
    #     'placeholder': 'Your Email',
    #     }),
    #     'username': forms.PasswordInput(attrs={
    #     'class': INPUT_CLASSES,
    #     'placeholder': 'Your Password',
    #     }),
    #     'confim': forms.PasswordInput(attrs={
    #     'class': INPUT_CLASSES,
    #     'placeholder': 'Confirm Password'
    #     }),
    # }

class LoginForm(AuthenticationForm):

    username = forms.CharField(widget=forms.TextInput(attrs={
        'placeholder': 'Your Username',
        'class': INPUT_CLASSES
    }))

    password = forms.CharField(widget=forms.PasswordInput(attrs={
        'placeholder': 'Your Password',
        'class': INPUT_CLASSES
    }))