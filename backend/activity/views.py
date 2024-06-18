from rest_framework import generics
from .models import Activity
from .serializers import ActivitySerializer

# View all activities and create a new activity
class ActivityListCreate(generics.ListCreateAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

# View, update or delete a specific activity
class ActivityRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

    def get_object(self):
        activity_code = self.kwargs['activity_code']
        return Activity.objects.get(activity_code=activity_code)