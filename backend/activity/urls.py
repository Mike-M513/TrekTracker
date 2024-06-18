from django.urls import path
from .views import ActivityListCreate, ActivityRetrieveUpdateDestroy

urlpatterns = [
    path('activities/', ActivityListCreate.as_view(), name='activity-list-create'),
    path('activities/<str:activity_code>/', ActivityRetrieveUpdateDestroy.as_view(), name='activity-detail'),
]