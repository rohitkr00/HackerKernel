from django.urls import path
from .views import register_view, task_view, fetch_task, delete_user, delete_task

urlpatterns = [
    path('register_view/', register_view),
    path('task_view/', task_view),
    path('fetch_task/', fetch_task),
    path('delete_user/', delete_user),
    path('delete_task/', delete_task),
    
    # Add other URLs as needed
    ]