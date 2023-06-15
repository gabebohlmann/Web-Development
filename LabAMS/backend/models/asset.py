from flask_mongoengine import Document
from mongoengine.fields import StringField, IntField, DateTimeField
from datetime import datetime

class Asset(Document):
    meta = {'collection': 'assets'}
    
    name = StringField(required=True, max_length=200)
    description = StringField(required=True)
    quantity = IntField(required=True)
    date_added = DateTimeField(default=datetime.utcnow)
    date_updated = DateTimeField(default=datetime.utcnow)

