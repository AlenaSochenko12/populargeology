from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from api.views import (
    ArticleViewSet, LocationViewSet, VideoViewSet, ExhibitViewSet,
    EarthViewSet, ReconstructionViewSet, BigBangAPIView, MoonAPIView, SolarSystemAPIView, EarthsAPIView
)

def home(request):
    return HttpResponse("Welcome to Popular Geology API")

router = DefaultRouter()
router.register(r'articles', ArticleViewSet)
router.register(r'locations', LocationViewSet)
router.register(r'videos', VideoViewSet)
router.register(r'exhibits', ExhibitViewSet)
router.register(r'earth', EarthViewSet)
router.register(r'reconstructions', ReconstructionViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/bigbang/', BigBangAPIView.as_view(), name='bigbang'),
    path('api/solarsystem/', SolarSystemAPIView.as_view(), name='solarsystem'),
    path('api/moon/', MoonAPIView.as_view(), name='moon'),
    path('api/earths/', EarthsAPIView.as_view(), name='earths'),
    path('', home, name='home'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)