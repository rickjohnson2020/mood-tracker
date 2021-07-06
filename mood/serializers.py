from rest_framework import serializers
from mood.models import Mood


class MoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mood
        fields = ['id', 'date', 'mood']

class DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mood
        fields = ['id', 'date', 'mood', 'note']
