from django.contrib import admin
from django.urls import path, include
from .views import (
    business_user_list, business_user_delete,
    register,
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('users/', business_user_list, name='user-list'),
    path('users/<int:pk>/', business_user_delete, name='user-delete'),
    path('register/', register, name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]