from django.db import models

class Activity(models.Model):
    activity_code = models.CharField(max_length=50, unique=True)
