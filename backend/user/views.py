from rest_framework.generics import CreateAPIView
from .serializers import CustomUserSerializer
from rest_framework.permissions import AllowAny
from .models import CustomUser

class RegisterView(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = CustomUser.objects.create_user(username=username, password=password)
            user.save()