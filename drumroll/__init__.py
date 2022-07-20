""" flask app """

from flask import Flask, render_template

APP_HOST = "127.0.0.1"
APP_PORT = 5000

app = Flask(__name__)


@app.route("/", methods=["GET"])
def home():
    """ homepage"""

    return render_template("index.html")


if __name__ == "__main__":

    app.run(
        host=APP_HOST,
        port=APP_PORT,
        debug=True,
        load_dotenv=False
    )
