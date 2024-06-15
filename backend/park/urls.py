from django.urls import path
from .views import ParkListCreate, ParkRetrieveUpdateDestroy

urlpatterns = [
    path('parks/', ParkListCreate.as_view(), name='park-list-create'),
    path('parks/<str:park_code>/', ParkRetrieveUpdateDestroy.as_view(), name='park-detail'),
]