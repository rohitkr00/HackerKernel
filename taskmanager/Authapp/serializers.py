from rest_framework import serializers
from .models import UserDetails, Loandetails

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model=UserDetails
        fields="__all__"




class LoanSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Loandetails
        fields="__all__"


