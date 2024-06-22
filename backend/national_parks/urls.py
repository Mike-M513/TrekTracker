from django.urls import path
from .views import AllParks

urlpatterns = [
    path('', AllParks.as_view(), name="all_parks"),
]