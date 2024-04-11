from .db import db


class SocialMediaGroup(db.Model):
    __tablename__ = "social_media_group"
    url = db.Column(db.String, primary_key=True)
    name = db.Column(db.String)
    type = db.Column(db.String)
    description = db.Column(db.String)
    creator = db.Column(db.String)
    purpose = db.Column(db.String)

    def __repr__(self):
        return f"<SocialMediaGroup {self.name} by {self.creator} for {self.purpose}>"

    def to_dict(self):
        return {
            "url": self.url,
            "name": self.name,
            "type": self.type,
            "description": self.description,
            "creator": self.creator,
            "purpose": self.purpose,
        }


class Mentor(db.Model):
    __tablename__ = "mentor"
    name = db.Column(db.String)
    email = db.Column(db.String, primary_key=True)
    phone_number = db.Column(db.String)
    region = db.Column(db.String)
    photo = db.Column(db.String)

    def to_dict(self):
        return {
            "name": self.name,
            "email": self.email,
            "phone_number": self.phone_number,
            "region": self.region,
            "photo": self.photo,
        }


user_skills = db.Table(
    "user_skills",
    db.Column(
        "email", db.String, db.ForeignKey("newsletter_user.email"), primary_key=True
    ),
    db.Column("skill_id", db.Integer, db.ForeignKey("skill.id"), primary_key=True),
)


class Skill(db.Model):
    __tablename__ = "skill"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)

    @classmethod
    def get_or_create(cls, skill_name: str):
        skill = cls.query.filter_by(name=skill_name).first()
        if skill:
            return skill, False
        skill = cls(name=skill_name)
        db.session.add(skill)
        db.session.commit()
        return skill, True


class NewsletterUser(db.Model):
    __tablename__ = "newsletter_user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    name = db.Column(db.String)
    skills = db.relationship(
        "Skill",
        secondary=user_skills,
        lazy="subquery",
        backref=db.backref("users", lazy=True),
    )

    def to_dict(self):
        return {
            "email": self.email,
            "name": self.name,
            "skills": [skill.name for skill in self.skills],
        }


class Event(db.Model):
    __tablename__ = "event"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    date = db.Column(db.DateTime)
    location = db.Column(db.String)
    photo = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "date": self.date,
            "location": self.location,
            "photo": self.photo,
        }
