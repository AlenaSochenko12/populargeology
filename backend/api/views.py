from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import (
    Article, Location, Video, Exhibit, Earth, Reconstruction
)
from .serializers import (
    ArticleSerializer, LocationSerializer, VideoSerializer,
    ExhibitSerializer, EarthSerializer, ReconstructionSerializer
)


class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class VideoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

class ExhibitViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Exhibit.objects.all()
    serializer_class = ExhibitSerializer

class EarthViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Earth.objects.all()
    serializer_class = EarthSerializer

class ReconstructionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Reconstruction.objects.all()
    serializer_class = ReconstructionSerializer


class BigBangAPIView(APIView):
    def get(self, request):
        time_param = request.query_params.get('time', 'bigBang')

        video = Video.objects.filter(time=time_param).first()
        articles = Article.objects.filter(time=time_param)
        exhibits = Exhibit.objects.filter(time=time_param)

        return Response({
            "video": VideoSerializer(video).data if video else None,
            "articles": ArticleSerializer(articles, many=True).data,
            "gallery": ExhibitSerializer(exhibits, many=True).data,
        })
        
class MoonAPIView(APIView):
    def get(self, request):
        time = request.query_params.get('time', 'moonFormation')
        video = Video.objects.filter(time=time).first()
        articles = Article.objects.filter(time=time)
        gallery = Exhibit.objects.filter(time=time)
        
        return Response({
            'video': VideoSerializer(video).data if video else None,
            'articles': ArticleSerializer(articles, many=True).data,
            'gallery': ExhibitSerializer(gallery, many=True).data
        })
        
class SolarSystemAPIView(APIView):
    def get(self, request):
        time = request.query_params.get('time', 'solarSystem')
        video = Video.objects.filter(time=time).first()
        articles = Article.objects.filter(time=time)
        gallery = Exhibit.objects.filter(time=time)
        
        return Response({
            'video': VideoSerializer(video).data if video else None,
            'articles': ArticleSerializer(articles, many=True).data,
            'gallery': ExhibitSerializer(gallery, many=True).data
        })
        
class EarthsAPIView(APIView):
    def get(self, request):
        title_param = request.query_params.get('title', None)

        if title_param:
            earths = Earth.objects.filter(title=title_param)
        else:
            earths = Earth.objects.all()

        if not earths.exists():
            return Response({"error": "Earth not found"}, status=404)

        earth_serializer = EarthSerializer(earths, many=True)

        response_data = []
        for earth in earths:
            time = earth.time
            video = Video.objects.filter(time=time).first()
            articles = Article.objects.filter(time=time)
            exhibits = Exhibit.objects.filter(time=time)

            earth_data = {
                "earth": EarthSerializer(earth).data,
                "video": VideoSerializer(video).data if video else None,
                "articles": ArticleSerializer(articles, many=True).data,
                "gallery": ExhibitSerializer(exhibits, many=True).data,
            }
            response_data.append(earth_data)

        if title_param:
            return Response(response_data[0] if response_data else {"error": "Earth not found"}, status=200 if response_data else 404)
        return Response(response_data, status=200)
