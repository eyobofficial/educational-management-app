from django.shortcuts import render
from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'dashboard/index.html'


class TeamView(TemplateView):
    template_name = 'dashboard/teams.html'