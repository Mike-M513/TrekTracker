from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework import status
import requests
from dotenv import load_dotenv
import os
# Create your views here.
load_dotenv()

class ParkDetail(APIView):

    def get(self, request, park_code):
        base_url = "https://developer.nps.gov/api/v1/parks"
        params = {
            "limit": 1,
            "api_key": os.environ["NPS_API_KEY"],
            "parkCode": park_code
        }

        response = requests.get(base_url, params=params)

        if response.status_code == 200:
            data = response.json()
            park = data['data']
            return Response({'result': park})
        
class ParkAlerts(APIView):

    def get(self, request, park_code):
        base_url = "https://developer.nps.gov/api/v1/alerts"
        params = {
            "api_key": os.environ["NPS_API_KEY"],
            "parkCode": park_code
        }

        response = requests.get(base_url, params=params)

        if response.status_code == 200:
            data = response.json()
            park = data['data']
            return Response({'result': park})