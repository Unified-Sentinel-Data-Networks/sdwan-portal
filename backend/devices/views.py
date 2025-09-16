from rest_framework import generics
from .models import Device
from .serializers import DeviceSerializer

# TODO: Candidate implements this
class DeviceListCreateView(generics.ListCreateAPIView):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
