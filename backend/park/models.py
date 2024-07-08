from django.db import models

class Park(models.Model):
    park_name = models.CharField(max_length=255, unique=True)
    park_code = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.park_name