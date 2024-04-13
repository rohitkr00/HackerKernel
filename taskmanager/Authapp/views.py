from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


from .models import UserDetails, UserTask
from .serializers import UserSerializer, UserTaskSerializer



@api_view(['POST', 'GET'])
def register_view(request):
    print("hello2")
    if request.method=='POST':
        data=request.data
        print("hello")
        serializer=UserSerializer(data=data)
        if serializer.is_valid():
            print("sdasdasd")
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response({
            "message":"Data is not valid"
        }, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method=='GET':
        print("check1")
        query_data=UserDetails.objects.all()
        if query_data.exists():
            task_data=UserSerializer(query_data, many=True)
            return Response(task_data.data, status=status.HTTP_200_OK)
        return Response({"message": "No User found"}, status=status.HTTP_404_NOT_FOUND)
    


@api_view(['POST', 'GET'])
def task_view(request):
    if request.method=='POST':
        data=request.data
        serializer=UserTaskSerializer(data=data)
        if serializer.is_valid():
            print("sdasdasd")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({
            "message":"Data is not valid"
        }, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method=='GET':
        print("check1")
        query_data=UserTask.objects.all()
        if query_data.exists():
            task_data=UserTaskSerializer(query_data, many=True)
            return Response(task_data.data, status=status.HTTP_200_OK)
        return Response({"message": "No User found"}, status=status.HTTP_404_NOT_FOUND)
    



@api_view(['POST', 'GET'])
def fetch_task(request):
    data=request.data
    # print(data)
    email2=data.get('email')
    if request.method=='POST':
        query_data=UserTask.objects.filter(useremail=email2)
        if query_data.exists():
            task_data=UserTaskSerializer(query_data, many=True)
            return Response(task_data.data, status=status.HTTP_200_OK)
        return Response({"message": "No tasks found for the provided email"}, status=status.HTTP_404_NOT_FOUND)
    return Response({
            "message":"Data is not valid"
         }, status=status.HTTP_400_BAD_REQUEST)
    



@api_view(['POST', 'GET'])
def delete_user(request):
    if request.method=='POST':
        data=request.data
        # print(data)
        id=data.get('id')
        query_data=UserDetails.objects.get(id=id)
        if query_data:
            query_data.delete()
            return Response("Delete Succesfull", status=status.HTTP_200_OK)
        return Response({"message": "No tasks found for the provided id"}, status=status.HTTP_404_NOT_FOUND)
    return Response({
            "message":"Data is not valid"
         }, status=status.HTTP_400_BAD_REQUEST)




@api_view(['POST', 'GET'])
def delete_task(request):
    data=request.data
    id=data.get('id')
    if request.method=='POST':
        query_data=UserTask.objects.get(id=id)
        if query_data:
            query_data.delete()
            return Response("Delete Succesfull", status=status.HTTP_200_OK)
        return Response({"message": "No tasks found for the provided id"}, status=status.HTTP_404_NOT_FOUND)
    return Response({
            "message":"Data is not valid"
         }, status=status.HTTP_400_BAD_REQUEST)
    