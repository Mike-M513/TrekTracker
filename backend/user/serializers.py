from rest_framework import serializers
from .models import CustomUser
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator

class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['username', 'first_name', 'last_name', 'email', 'password' ]
        extra_kwargs = {
            # 'password': {'write_only': True},
            'email': {'validators': [UniqueValidator(queryset=CustomUser.objects.all())]},
        }

    def create(self, validated_data):
        username = validated_data['username']
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']
        email = validated_data['email']
        password = validated_data['password']

        user = CustomUser.objects.create_user(username=username, first_name=first_name, last_name=last_name, email=email, password=password)

        user.save()
        return user
    
class UpdatePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(required= True)
    
    def validate_new_password(self, value):
        user = self.context['request'].user
        if user.check_password(value):
            raise serializers.ValidationError("New password cannot be the same as the old password.")
        try:
            validate_password(value, user)
        except ValidationError as e:
            raise serializers.ValidationError(e.messages)
        
        return value
    
class UpdateEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(required = True)

    def validate_new_email(self, value):
        user = self.context['request'].user
        if user.email == value:
            raise serializers.ValidationError('New email cannot be the same as the current email.')
        if CustomUser.objects.filter(email = value).exits():
            raise serializers.ValidationError('This email is already in use.')
        
        return value