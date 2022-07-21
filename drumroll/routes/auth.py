"""test auth module"""

from flask import Blueprint

bp = Blueprint("auth", __name__, url_prefix="/auth")

# http://127.0.0.1:5000/auth/login
@bp.route("/login")
def login():
    """test auth blueprint"""
    return "login korba?"
