from .db import db

class SocialMediaGroup(db.Model):
    __tablename__ = 'social_media_group'
    url = db.Column(db.String, primary_key=True)
    name = db.Column(db.String)
    type = db.Column(db.String)
    description = db.Column(db.String)
    creator = db.Column(db.String)
    purpose = db.Column(db.String)
        
    def __repr__(self):
        return f'<SocialMediaGroup {self.name} by {self.creator} for {self.purpose}>'
