from django.urls import path
from django.views.generic import TemplateView

from . import views


app_name = 'mood'
urlpatterns = [
    path('', views.MoodListAPIView.as_view(), name="list"),
    path('<int:pk>/', views.MoodRetrieveAPIView.as_view(), name="detail"),
]
