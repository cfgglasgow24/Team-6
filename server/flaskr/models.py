from sqlalchemy import Column, Integer, String, ForeignKey, Table
from flaskr.db import Base

class SocialMediaGroup(Base):
    __tablename__ = 'social_media_group'
    url = Column(String, primary_key=True)
    name = Column(String)
    type = Column(String)
    description = Column(String)
    creator = Column(String)
    purpose = Column(String)
    # TODO: creator = Column(String, ForeignKey('user.email'))
        
    def __repr__(self):
        return f'<SocialMediaGroup {self.name} by {self.creator} for {self.purpose}>'
