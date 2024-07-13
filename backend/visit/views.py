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

# View all visits for a specific user
class UserVisitRetrieve(generics.ListAPIView):
    # queryset = Visit.objects.all()
    serializer_class = VisitSerializer

    def get_queryset(self):
        user = self.kwargs['username']
        # userVisits = Visit.user.get_queryset(user)
        # return userVisits
        return Visit.objects.filter(user__username=user)
        # return Visit.objects.filter(user=user['username'])