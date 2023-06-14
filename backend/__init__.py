from flask import Flask
from pymongo import MongoClient
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "http://localhost:5000"]}})

# client = MongoClient('localhost', 27017)  # Connect to your MongoDB server
client = MongoClient('mongodb://localhost:27017/')
db = client['LabAMS_DB']


from .views import user_views, asset_views  # Import your views

app.register_blueprint(user_views.user_views)
app.register_blueprint(asset_views.asset_views)



