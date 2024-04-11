import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename

from .db import db
from .models import SocialMediaGroup, Mentor, NewsletterUser, Skill

social_media_blueprint = Blueprint("social-media-groups", __name__)


@social_media_blueprint.route("/", methods=["GET"])
def get_social_media_groups():
    return jsonify(
        [group.to_dict() for group in db.session.query(SocialMediaGroup).all()]
    )


@social_media_blueprint.route("/", methods=["POST"])
def create_social_media_group():
    group = db_create_social_media_group(request.json)
    return jsonify(group.to_dict())


def db_create_social_media_group(json: dict) -> SocialMediaGroup:
    group = SocialMediaGroup(**json)
    db.session.add(group)
    db.session.commit()
    return group


mentor_blueprint = Blueprint("mentors", __name__)


@mentor_blueprint.route("/", methods=["GET"])
def get_mentors():
    return jsonify([mentor.to_dict() for mentor in db.session.query(Mentor).all()])


@mentor_blueprint.route("/", methods=["POST"])
def add_mentor():
    name = request.json["name"]
    email = request.json["email"]
    skills = [str(skill).strip() for skill in request.json.get("skills").split(",")]
    phone_number = request.json["phonenumber"]

    mentor = Mentor(
        name=name,
        email=email,
        phone_number=phone_number,
    )

    db.session.add(mentor)

    for skill_name in skills:
        skill, _ = Skill.get_or_create(skill_name)
        mentor.skills.append(skill)

    db.session.commit()

    return jsonify(mentor.to_dict())


newsletter_user_blueprint = Blueprint("newsletter-users", __name__)


@newsletter_user_blueprint.route("/", methods=["POST"])
def add_newsletter_user():
    email = request.json.get("email")
    name = request.json.get("name")
    skills = [str(skill).strip() for skill in request.json.get("skills").split(",")]

    user = NewsletterUser(email=email, name=name)

    db.session.add(user)

    for skill_name in skills:
        skill, _ = Skill.get_or_create(skill_name)
        user.skills.append(skill)

    db.session.commit()

    return jsonify(user.to_dict())
