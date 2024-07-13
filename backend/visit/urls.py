from django.urls import path
from .views import *

urlpatterns = [
    path('visits/', VisitList.as_view(), name='visit-list'),
    path('new_visit/', VisitCreate.as_view(), name='new-visit'),
    path('visits/<int:pk>/', VisitRetrieveUpdateDestroy.as_view(), name='visit-detail'),
    path('visits/<str:username>/', UserVisitRetrieve.as_view(), name='user-visit-retrieve'),
]