from django.urls import path, include

from Apps.Posts.API.views import PostsListAPIView, PostDetailAPIView, PostCreateAPIView

app_name = 'API'

urlpatterns = [
    path("posts/", PostsListAPIView.as_view(), name="list"),
    path("posts/register", PostCreateAPIView.as_view(), name="register"),
    path("posts/<str:pk>", PostDetailAPIView.as_view(), name="detail"),
]