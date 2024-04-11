from flask import Flask
from flask_cors import CORS

from .routes import social_media_blueprint, mentor_blueprint, newsletter_user_blueprint
from .db import db
from .models import SocialMediaGroup

DATABASE_URL = "sqlite:///main.db"

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

populated = False

app.register_blueprint(social_media_blueprint, url_prefix="/api/social-media-groups")
app.register_blueprint(mentor_blueprint, url_prefix="/api/mentors")
app.register_blueprint(newsletter_user_blueprint, url_prefix="/api/newsletter-users")


def populate_db():
    global populated

    if populated:
        return

    print("populate db")
    groups = [
        {
            "name": "Glasgow Afghan United",
            "url": "https://www.facebook.com/GlasgowAfghanUnited/",
            "description": "A page to support the Afghan community in Glasgow and bring them together through events, celebrations (e.g. Afghan national events) and any other activities that will support the Afghan community to engage with local people in Scotland.",
            "purpose": "To support the Afghan community in Glasgow and bring them together through events, celebrations (e.g. Afghan national events) and any other activities that will support the Afghan community to engage with local people in Scotland.",
            "creator": "Glasgow Afghan United",
        },
        {
            "name": "Afghan UK community",
            "url": "https://www.facebook.com/groups/295357232056107",
            "description": "All about Afghan life in in Uk, social and community integration, business, education, immigration and helping those that are vulnerable",
            "purpose": "All about Afghan life in in Uk, social and community integration, business, education",
            "creator": "Afghan UK community",
        },
        {
            "name": "New voices - refugee matters in Scotland",
            "url": "https://www.facebook.com/groups/137588506316658",
            "description": "New Voices covers matters relevant to refugees living in Scotland",
            "purpose": "New Voices covers matters relevant to refugees living in Scotland",
            "creator": "New voices - refugee matters in Scotland",
        },
        {
            "name": "Scottish Refugee Council",
            "url": "https://www.facebook.com/ScottishRefugeeCouncil",
            "description": "An independent charity working to build a better future with refugees",
            "purpose": "An independent charity working to build a better future with refugees",
            "creator": "Scottish Refugee Council",
        },
        {
            "name": "SEINGlasgow",
            "url": "https://www.instagram.com/seinglasgow/?hl=en-gb",
            "description": "A network of community groups and organisations which work across the South East of Glasgow providing services to support community integration",
            "purpose": "A network of community groups and organisations which work across the South East of Glasgow providing services to support community integration",
            "creator": "SEINGlasgow",
        },
    ]

    for group in groups:
        new_group = SocialMediaGroup(
            name=group["name"],
            url=group["url"],
            description=group["description"],
            creator=group["creator"],
            purpose=group["purpose"],
        )
        db.session.add(new_group)

    db.session.commit()

    populated = True


with app.app_context():
    db.create_all()
    # populate_db()
