from rest_framework import generics
from .models import Visit
from .serializers import VisitSerializer, VisitCreateSerializer

# View all visits
class VisitList(generics.ListAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer

# Create a new visit
class VisitCreate(generics.CreateAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitCreateSerializer

# View, Update or delete a specific visit
class VisitRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer