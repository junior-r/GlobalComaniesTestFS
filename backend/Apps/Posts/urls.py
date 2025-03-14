from django.urls import path, include

app_name = "Posts"

urlpatterns = [
    path("api/", include("Apps.Posts.API.urls"), name="api"),
]