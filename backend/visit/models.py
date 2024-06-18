from django.db import models
from park.models import Park
from activity.models import Activity
from user.models import CustomUser

class Visit(models.Model):
    date = models.DateField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    park = models.ForeignKey(Park, on_delete=models.CASCADE)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)

