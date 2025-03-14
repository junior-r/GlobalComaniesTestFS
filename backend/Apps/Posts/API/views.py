from django.http import JsonResponse
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny
import json
import os
import django
from rest_framework.views import APIView

from Apps.Posts.models import Post
from Apps.Posts.serializers import PostSerializer


class PostsListAPIView(ListAPIView):
    model = Post
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]


class PostDetailAPIView(RetrieveAPIView):
    model = Post
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostCreateAPIView(APIView):
    model = Post
    permission_classes = [AllowAny]

    def dispatch(self, request, *args, **kwargs):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data = json.load(file)
                for post in data.get("data"):
                    Post.objects.create(author=post.get("username"), text=post.get("text"), likes=post.get("likes"), comments=post.get("comments"), shares=post.get("shares"), createdAt=post.get("created_at"))
        except json.JSONDecodeError as e:
            return JsonResponse({"error": f"Error al leer el JSON: {str(e)}"}, status=400)
        except FileNotFoundError:
            return JsonResponse({"error": "Archivo data.json no encontrado"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

        return super().dispatch(request, *args, **kwargs)

