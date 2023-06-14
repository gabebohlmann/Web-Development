from flask import Blueprint, request, jsonify
from backend import db

user_views = Blueprint('user_views', __name__)

from bson.objectid import ObjectId
from bson.json_util import dumps


@user_views.route('/users', methods=['GET', 'POST'])
def users():
    if request.method == 'GET':
        users = db.users.find()
        user_list = []
        for user in users:
            user['_id'] = str(user['_id'])  # Convert ObjectId to string
            user_list.append(user)
        return jsonify(user_list), 200
    elif request.method == 'POST':
        user_data = request.get_json()
        result = db.users.insert_one(user_data)
        return jsonify({'message': 'User added', 'id': str(result.inserted_id)}), 201


@user_views.route('/users/<id>', methods=['GET', 'PUT', 'DELETE'])
def user(id):
    _id = ObjectId(id)
    if request.method == 'GET':
        user = db.users.find_one({'_id': _id})
        return jsonify(user), 200
    elif request.method == 'PUT':
        updated_data = request.get_json()
        db.users.update_one({'_id': _id}, {"$set": updated_data})
        return jsonify(updated_data), 200
    elif request.method == 'DELETE':
        db.users.delete_one({'_id': _id})
        return jsonify({'message': 'User deleted'}), 200
