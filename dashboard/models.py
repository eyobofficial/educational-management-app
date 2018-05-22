from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    USER_ROLE_OPTION = (
        ('S', 'Student'),
        ('T', 'Teacher'),
    )
    role = models.CharField(
        max_length=1,
        choices=USER_ROLE_OPTION,
        default='S'
    )
    avatar = models.ImageField(
        'Profile picture',
        upload_to='users/avatar/',
        null=True, blank=True
    )
