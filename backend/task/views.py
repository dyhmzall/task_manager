from rest_framework.viewsets import ModelViewSet
from .serializers import TaskModelSerializer
from .models import Task


class TaskViewSet(ModelViewSet):
    serializer_class = TaskModelSerializer
    queryset = Task.objects.all()
