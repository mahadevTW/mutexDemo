from flask import Flask
app = Flask(__name__)


@app.route("/")
def hello():
    return "Welcome!"


@app.route("/hello")
def hi():
    return "Hello word"


if __name__ == "__main__":
    app.run(host="127.0.0.1",debug=True,port=8080

