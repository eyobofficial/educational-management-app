# Generated by Django 2.0.5 on 2018-05-22 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to='users/avatar/', verbose_name='Profile picture'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='user_type',
            field=models.CharField(choices=[('S', 'Student'), ('T', 'Teacher')], default='S', max_length=1),
        ),
    ]
