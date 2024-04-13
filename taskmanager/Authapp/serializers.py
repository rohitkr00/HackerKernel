from rest_framework import serializers
from .models import UserDetails, UserTask

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model=UserDetails
        fields="__all__"




class UserTaskSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=UserTask
        fields="__all__"


