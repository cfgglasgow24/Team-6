from flask import Blueprint, request, jsonify
from .db import  db
from .models import SocialMediaGroup

social_media_blueprint = Blueprint("social-media-groups", __name__)

@social_media_blueprint.route('/', methods=['GET'])
def get_social_media_groups():
    return jsonify([group.to_dict() for group in db.session.query(SocialMediaGroup).all()])


@social_media_blueprint.route('/', methods=['POST'])
def create_social_media_group():
    group = db_create_social_media_group(request.json)
    return jsonify(group.to_dict())
    
    
def db_create_social_media_group(json: dict) -> SocialMediaGroup:
    group = SocialMediaGroup(**json)
    db.session.add(group)
    db.session.commit()
    return group