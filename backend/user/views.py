from rest_framework.generics import CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from .serializers import CustomUserSerializer, UpdatePasswordSerializer, UpdateEmailSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import CustomUser

class RegisterView(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        if serializer.is_valid():
            username = serializer.validated_data['username']
            first_name = serializer.validated_data['first_name']
            last_name = serializer.validated_data['last_name']
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = CustomUser.objects.create_user(username=username, first_name=first_name, last_name=last_name,email=email,password=password)
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
        user.set_password(serializer.validated_data['password'])
        user.save()

class UpdateEmail(UpdateAPIView):
    serializer_class = UpdateEmailSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
    
    def perform_update(self, serializer):
        user = self.get_object()
        user.email = serializer.validated_data['email']
        user.save()

class DeleteUser(DestroyAPIView):
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user