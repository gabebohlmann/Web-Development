from flask_mongoengine import MongoEngine
from LabAMS import db

class User(db.Document):
    username = db.StringField(required=True, unique=True)
    password = db.StringField(required=True)  # Consider using password hashing here
    email = db.StringField(required=True, unique=True)
