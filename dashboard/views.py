from django.shortcuts import render
from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'dashboard/index.html'


class TeamView(TemplateView):
    template_name = 'dashboard/teams.html'

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
