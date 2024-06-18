from django.db import models

class Park(models.Model):
    park_code = models.CharField(max_length=50, unique=True)
