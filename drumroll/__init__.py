"""Creates local instance of flask app"""

from flask import Flask
from flask import render_template
from drumroll.routes import blog
from drumroll.routes import auth


def create_app():
    """Create and configure an instance of the Flask application."""

    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(SECRET_KEY="dev")

    @app.route("/")
    def home():
        return render_template("index.html")

    @app.route("/hello")
    def hello():
        return "Hello, World!"

    # apply the blueprints to the app
    app.register_blueprint(auth.bp)
    app.register_blueprint(blog.bp)

    return app
