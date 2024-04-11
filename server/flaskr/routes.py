from flask import request

import flaskr.db as db
import flaskr.models as models

def create_routes(app):
    @app.route('/api/social-media-groups', methods=['GET'])
    def get_social_media_groups():
        # print("Get Social Media Groups")
        db_get_social_media_groups()
        return "Get Social Media Groups"

    @app.route('/api/social-media-groups', methods=['POST'])
    def create_social_media_group():      
        db_create_social_media_group(request.json)
        return "Create Social Media Group"

def db_get_social_media_groups(filters=None):
    if filters is None:
        return db.db_session.query(models.SocialMediaGroup).all()
    else:
        return db.db_session.query(models.SocialMediaGroup).filter_by(**filters).all()
    
def db_create_social_media_group(json):
    group = models.SocialMediaGroup(**json)
    db.db_session.add(group)
    db.db_session.commit()