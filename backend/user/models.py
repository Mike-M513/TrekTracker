from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = models.EmailField(unique= True, blank= False, null= False)

    class Meta:
        swappable = 'AUTH_USER_MODEL'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)