# IMPORTS
from flask import Flask, request, render_template, send_from_directory
import gunicorn

# CONFIG
app = Flask(__name__, static_url_path="", static_folder="static/", template_folder="templates/")




# APP
@app.route("/")
def index():
  return render_template("index.html"), 200


# ADITIONAL ROUTES
# 404
@app.errorhandler(404)
def page_not_found(error):
  return render_template('404.html'), 404

# robots.txt & humans.txt
@app.route('/robots.txt')
@app.route('/humans.txt')
def static_from_root():
  return send_from_directory("static/global/", request.path[1:])




# INIT
if __name__ == "__main__": app.run()
