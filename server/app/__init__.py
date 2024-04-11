from flask import Flask

from .routes import social_media_blueprint, mentor_blueprint, newsletter_user_blueprint
from .db import db

DATABASE_URL = "sqlite:///main.db"

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

app.register_blueprint(social_media_blueprint, url_prefix="/api/social-media-groups")
app.register_blueprint(mentor_blueprint, url_prefix="/api/mentors")
app.register_blueprint(newsletter_user_blueprint, url_prefix="/api/newsletter-users")

with app.app_context():
    db.create_all()
