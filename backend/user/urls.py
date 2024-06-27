from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import RegisterView, FetchUser, UpdatePassword, DeleteUser

urlpatterns = [
    path('get-token/', obtain_auth_token),
    path('register/', RegisterView.as_view()),
    path('user/', FetchUser.as_view()),
    path('update-password/', UpdatePassword.as_view()),
    path('delete-user/', DeleteUser.as_view())
    
]