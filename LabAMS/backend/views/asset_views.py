from flask import Blueprint, request, jsonify
from backend import db
from bson.objectid import ObjectId

asset_views = Blueprint('asset_views', __name__)

from datetime import datetime

@asset_views.route('/assets', methods=['GET', 'POST'])
def assets():
    if request.method == 'POST':
        asset_data = request.get_json()
        if 'name' not in asset_data or 'description' not in asset_data or 'location' not in asset_data:
            return jsonify({"error": "Missing required field"}), 400
        result = db.assets.insert_one(asset_data)
        return jsonify({'message': 'Asset added', 'id': str(result.inserted_id)}), 201
    elif request.method == 'GET':
        assets = db.assets.find()
        asset_list = []
        for asset in assets:
            asset['_id'] = str(asset['_id'])
            for key, value in asset.items():
                if isinstance(value, datetime):
                    asset[key] = str(value)
            asset_list.append(asset)
        return jsonify(asset_list), 200

@asset_views.route('/assets/<id>', methods=['GET', 'PUT', 'DELETE'])
def asset(id):
    _id = ObjectId(id)
    if request.method == 'GET':
        asset = db.assets.find_one({'_id': _id})
        return jsonify(asset), 200
    elif request.method == 'PUT':
        updated_data = request.get_json()
        db.assets.update_one({'_id': _id}, {"$set": updated_data})
        return jsonify(updated_data), 200
    elif request.method == 'DELETE':
        db.assets.delete_one({'_id': _id})
        return jsonify({'message': 'Asset deleted'}), 200