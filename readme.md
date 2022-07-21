# flask-demo

A sample python-flask drumroll application

## Instructions to setup and run the application locally

- `python --version` should be `>=3` and `<=3.10`

Download or clone

    # clone the repository
    $ git clone https://github.com/atanughosh01/flask-demo
    $ cd flask-demo

Create a virtualenv and activate it

    $ python3 -m venv venv
    $ . venv/bin/activate

Or on Windows cmd

    $ py -3 -m venv venv
    $ venv\Scripts\activate.bat

Or on Windows powershell

    $ python3 -m venv venv
    $ & venv\Scripts\Activate.ps1

Install pip requirements

    $ pip install -U -r requirements.txt


### Run the application

    $ export FLASK_APP=drumroll
    $ export FLASK_ENV=development
    $ flask run

Or on Windows cmd

    > set -x FLASK_APP=drumroll
    > set -x FLASK_ENV=development
    > flask run

Or on Windows powershell

    > $env:FLASK_APP = "drumroll"
    > $env:FLASK_ENV = "development"
    > flask run

### Alternate way to run the application

Create a `.flaskenv` in the `root` directory with the following content

    export FLASK_APP=drumroll
    export FLASK_ENV=development

Make sure that `python-dotenv` is installed
    
    $ pip install python-dotenv==0.20.0

Then execute `flask run` on the terminal.

Open http://127.0.0.1:5000 in a browser.
