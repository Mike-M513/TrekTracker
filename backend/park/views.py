from rest_framework import generics
from .models import Park
from .serializers import ParkSerializer

# View all parks and create a new park
class ParkListCreate(generics.ListCreateAPIView):
    queryset = Park.objects.all()
    serializer_class = ParkSerializer

# View, update or delete a specific park
class ParkRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Park.objects.all()
    serializer_class = ParkSerializer

    def get_object(self):
        park_code = self.kwargs['park_code']
        return Park.objects.get(park_code=park_code)