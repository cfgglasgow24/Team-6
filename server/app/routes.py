from flask import Blueprint, request
from .db import  db
from .models import SocialMediaGroup

social_media_blueprint = Blueprint("social-media-groups", __name__)

@social_media_blueprint.route('/', methods=['GET'])
def get_social_media_groups():
    return db.session.query(SocialMediaGroup).all()

@social_media_blueprint.route('/', methods=['POST'])
def create_social_media_group():      
    group = SocialMediaGroup(**request.json)
    db.session.add(group)
    db.session.commit()
    return group

    
    
    