#!/bin/bash

sudo rm -r .git
echo "venv/" > .gitignore
echo ".sass-cache/" >> .gitignore
echo "__pycache__/" >> .gitignore

python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
pip freeze > requirements.txt
export FLASK_APP=app
flask run
