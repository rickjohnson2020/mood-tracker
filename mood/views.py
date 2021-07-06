from rest_framework import generics

from .models import Mood
from .serializers import MoodSerializer, DetailSerializer

from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os


class MoodListAPIView(generics.ListAPIView):
    """リスト一覧を取得"""
    queryset = Mood.objects.order_by('-date')
    serializer_class = MoodSerializer


class MoodRetrieveAPIView(generics.RetrieveAPIView):
    """詳細を取得"""
    queryset = Mood.objects.all()
    serializer_class = DetailSerializer


class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
