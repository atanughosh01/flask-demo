"""test module"""

from flask import Blueprint

bp = Blueprint("blog", __name__)

# http://127.0.0.1:5000/index
@bp.route("/index")
def test():
    """test blueprint"""
    return "ki bhai shob thik toh?"
