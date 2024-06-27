from django.urls import path
from .views import ParkDetail, ParkAlerts

urlpatterns = [
    path('<str:park_code>', ParkDetail.as_view(), name="park_detail"),
    path('alerts/<str:park_code>', ParkAlerts.as_view(), name="park_alerts")
]