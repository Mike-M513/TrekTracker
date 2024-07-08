from django.db import models

class Activity(models.Model):
    activity_name = models.CharField(max_length=50, unique=True)
    activity_code = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.activity_name