from django.urls import path
from .views import register_view, Loanview, LoanFilter, Login,delete_user

urlpatterns = [
    path('register_view/', register_view),
    path('loan_view/', Loanview),
    path('loan_filter/', LoanFilter),
    path('Login/', Login),

    # path('task_view/', task_view),
    # path('fetch_task/', fetch_task),
    path('delete_user/', delete_user),
    # path('delete_task/', delete_task),
    
    # Add other URLs as needed
    ]