from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login, logout

# Create your views here.


from .models import UserDetails, Loandetails
from .serializers import UserSerializer, LoanSerializer



@api_view(['POST', 'GET'])
def register_view(request):
    if request.method=='POST':
        data=request.data
        email = data.get("email")
        password = data.get("password")
        serializer=UserSerializer(data=data)
        if serializer.is_valid():
            print("sdasdasd")
            serializer.save()
            # user = authenticate(request, username=email, password=password)
            # login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)
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


@api_view(['POST'])
def Login(request):
        # how to store response in local storage in react
        data = request.data
        email = data.get("email")
        password = data.get("password")
        # admin_login_data = AdminLogin.objects.filter(email=email, password=password)
        login_data = UserDetails.objects.filter(email=email, password=password)
        # user_data = UserLoginSerializer(user)
        # print(user_data.data)

        if login_data:
            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                # set user-specific data in the session
                # request.session['username'] = email
                # request.session['is_logged_in'] = True
                # request.session.save()
                return Response({"message": "login success"}, status=status.HTTP_200_OK)
            else:
                response={
            "message": "Authentication failed for admin",
            }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST', 'GET', 'PATCH'])
def Loanview(request):
    if request.method == 'GET':
        query_data = Loandetails.objects.all()
        if query_data.exists():
            task_data=LoanSerializer(query_data, many=True)
            return Response(task_data.data, status=status.HTTP_200_OK)
        return Response({"message": "No User found"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'POST':
        data = request.data
        serializer = LoanSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({
            "message":"Data is not valid"
        }, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'PATCH':
        query_data=Loandetails.objects.get(id=request.data.get('id'))
        serializer = LoanSerializer(query_data, data=request.data, partial=True)
        if serializer.is_valid():
                serializer.save()
                return Response({'msg': 'Loan approved successfully'}, status=status.HTTP_200_OK)
        return Response({"message": "No Loan found"}, status=status.HTTP_404_NOT_FOUND)
    



@api_view(['POST'])
def LoanFilter(request):
    data=request.data
    if request.method == 'POST':
        query_data = Loandetails.objects.filter(useremail=data.get('email'))
        if query_data.exists():
            task_data=LoanSerializer(query_data, many=True)
            return Response(task_data.data, status=status.HTTP_200_OK)
        return Response({"message": "No User found"}, status=status.HTTP_404_NOT_FOUND)




        


# ===============================================================================================================
# ===============================================================================================================
# ===============================================================================================================
# ===============================================================================================================
# ===============================================================================================================
# ===============================================================================================================
# ===============================================================================================================
# ===============================================================================================================
# ===============================================================================================================

# @api_view(['POST', 'GET'])
# def task_view(request):
#     if request.method=='POST':
#         data=request.data
#         serializer=UserTaskSerializer(data=data)
#         if serializer.is_valid():
#             print("sdasdasd")
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response({
#             "message":"Data is not valid"
#         }, status=status.HTTP_400_BAD_REQUEST)
    
#     elif request.method=='GET':
#         print("check1")
#         query_data=UserTask.objects.all()
#         if query_data.exists():
#             task_data=UserTaskSerializer(query_data, many=True)
#             return Response(task_data.data, status=status.HTTP_200_OK)
#         return Response({"message": "No User found"}, status=status.HTTP_404_NOT_FOUND)
    



# @api_view(['POST', 'GET'])
# def fetch_task(request):
#     data=request.data
#     # print(data)
#     email2=data.get('email')
#     if request.method=='POST':
#         query_data=UserTask.objects.filter(useremail=email2)
#         if query_data.exists():
#             task_data=UserTaskSerializer(query_data, many=True)
#             return Response(task_data.data, status=status.HTTP_200_OK)
#         return Response({"message": "No tasks found for the provided email"}, status=status.HTTP_404_NOT_FOUND)
#     return Response({
#             "message":"Data is not valid"
#          }, status=status.HTTP_400_BAD_REQUEST)
    



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




# @api_view(['POST', 'GET'])
# def delete_task(request):
#     data=request.data
#     id=data.get('id')
#     if request.method=='POST':
#         query_data=UserTask.objects.get(id=id)
#         if query_data:
#             query_data.delete()
#             return Response("Delete Succesfull", status=status.HTTP_200_OK)
#         return Response({"message": "No tasks found for the provided id"}, status=status.HTTP_404_NOT_FOUND)
#     return Response({
#             "message":"Data is not valid"
#          }, status=status.HTTP_400_BAD_REQUEST)
    