from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin


@login_required
def index(request):
    if request.user.role == 'T':
        return redirect('dashboard:teacher-index')
    else:
        return redirect('dashboard:student-index')


class StudentIndexView(LoginRequiredMixin, UserPassesTestMixin, TemplateView):
    template_name = 'dashboard/student/student_index.html'

    def test_func(self, *args, **kwargs):
        return self.request.user.role == 'S'


class TeamView(TemplateView):
    template_name = 'dashboard/student/teams.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['channel_list'] = [
            'Subject 1',
            'Mid Exam',
            'Assignment Group',
        ]
        context['student_list'] = [
            'William',
            'Kavin Hart',
            'Instructor',
            'Jay Z',
            'Eminem',
            'Will Smith',
        ]
        context['msg_counts'] = [3, 5, 10, 1, 7, ]
        return context


class TeacherIndexView(LoginRequiredMixin, UserPassesTestMixin, TemplateView):
    template_name = 'dashboard/teacher/teacher_index.html'

    def test_func(self, *args, **kwargs):
        return self.request.user.role == 'T'
