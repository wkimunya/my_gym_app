# config/config.py
import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://gym_mw66_user:nXgFYXB7MmEwh8D8xAXJRlcjL3xUtvph@dpg-cmv4tk2cn0vc73amn00g-a.oregon-postgres.render.com/gym_mw66'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'your_secret_key_here'
    JWT_EXPIRATION_HOURS = 24  # Set the expiration time for JWT tokens
