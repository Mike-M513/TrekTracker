from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework import status
import requests
from dotenv import load_dotenv
import os
# Create your views here.
load_dotenv()

class AllParks(APIView):

    def get(self, request):
        base_url = "https://developer.nps.gov/api/v1/parks"
        params = {
            "limit": 500,
            "api_key": os.environ["NPS_API_KEY"],
        }

        response = requests.get(base_url, params=params)

        if response.status_code == 200:
            data = response.json()
            parks = data['data']
            park_dict = {}
            for park in parks:
                if park['designation'] == "National Park":
                    park_dict[park['parkCode']] = park['fullName']
                else:
                    pass
            return Response({'result': park_dict})