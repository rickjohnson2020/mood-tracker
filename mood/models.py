from django.db import models


class Mood(models.Model):
    date = models.DateField()
    mood = models.CharField(max_length=100)
    note = models.TextField()

    def __str__(self):
        date_str = self.date.strftime('%Y/%m/%d')
        return date_str
