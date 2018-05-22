from django.urls import path
from . import views

app_name = 'dashboard'


urlpatterns = [
    path('', views.index, name='index'),
    path('student/', views.StudentIndexView.as_view(), name='student-index'),
    path('student/teams/', views.TeamView.as_view(), name='teams'),
    path('teacher/', views.TeacherIndexView.as_view(), name='teacher-index'),
]
