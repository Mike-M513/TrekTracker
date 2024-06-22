from rest_framework.generics import CreateAPIView, RetrieveAPIView, UpdateAPIView
from .serializers import CustomUserSerializer, UpdatePasswordSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
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

class FetchUser(RetrieveAPIView):
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
    
class UpdatePassword(UpdateAPIView):
    serializer_class = UpdatePasswordSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
    
    def perform_update(self, serializer):
        user = self.get_object()
        user.set_password(serializer.validated_data['new_password'])
        user.save()