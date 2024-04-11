from flask import Flask

from .routes import social_media_blueprint
from .db import db

DATABASE_URL = 'sqlite:///main.db'

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False    

db.init_app(app)

app.register_blueprint(social_media_blueprint, url_prefix='/api/social-media-groups')

with app.app_context():
    db.create_all()
