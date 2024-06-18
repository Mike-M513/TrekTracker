from rest_framework import serializers
from park.models import Park
from activity.models import Activity
from user.models import CustomUser
from .models import Visit
from park.serializers import ParkSerializer
from activity.serializers import ActivitySerializer
from user.serializers import CustomUserSerializer

class ParkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Park
        fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

class VisitSerializer(serializers.ModelSerializer):
    park = serializers.SerializerMethodField()
    activity = serializers.SerializerMethodField()
    user = serializers.SerializerMethodField()

    class Meta:
        model = Visit
        fields = '__all__'

    def get_park(self, obj):
        serializer = ParkSerializer(obj.park)
        return serializer.data
    
    def get_activity(self, obj):
        serializer = ActivitySerializer(obj.activity)
        return serializer.data
    
    def get_user(self, obj):
        serializer = UserSerializer(obj.user)
        return serializer.data
    
class VisitCreateSerializer(serializers.ModelSerializer):
    park = serializers.CharField(write_only=True)
    activity = serializers.CharField(write_only=True)
    user = serializers.CharField(write_only=True)

    class Meta:
        model = Visit
        fields = '__all__'

    def create(self, validated_data):
        park = validated_data.pop('park')
        activity = validated_data.pop('activity')
        user = validated_data.pop('user')

        try:
            park = Park.objects.get(park_code=park)
        except Park.DoesNotExist:
            raise serializers.ValidationError(f'{park} does not exist')
        
        try:
            activity = Activity.objects.get(activity_code=activity)
        except Activity.DoesNotExist:
            raise serializers.ValidationError(f'{activity} does not exist')

        try:
            user = CustomUser.objects.get(username=user)
        except CustomUser.DoesNotExist:
            raise serializers.ValidationError(f'{user} does not exist')
        
        visit = Visit.objects.create(park=park, activity=activity, user=user, **validated_data)
        return visit