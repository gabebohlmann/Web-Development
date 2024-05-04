This is the Lab Asset Management System (LabAMS) Application . It is a simple web app that keeps track of the users and tools in a reaserch lab. The webapp has a Flask(Python) and MongoDB backend with a ReactJS frontend that allows the user to do simple CRUD operations.

Below is a link to the LabAMS GitHub page if you downloaded this project from elsewhere.  
https://github.com/gabebohlmann/web-development/tree/main/LabAMS


# Local Setup Instructions

## Tool Installation

1. Install a text editor or IDE of your choosing, VS Code is recommended.
2. Install the necessary technologies and frameworks. This project requires Python, Node.js, and MongoDB to be installed. All package installs are covered in the guide below.

## Backend Setup

1. Start your MongoDB server. The method for doing this can vary depending on your operating system.
    - On windows it is recommended to use MongoDB compass and connect to the default URI
        ```
        mongodb://localhost:27017
         ```

2. Clone the web-development repository to your local machine. Open terminal/cmd and run:
    ```
    git clone https://github.com/gabebohlmann/web-development.git
    ```

2. Navigate to the Flask backend directory:
    ```
    cd "your_directory/web-development/LabAMS/backend"
    ```

3. Set up a virtual environment and activate it:
    
    For Mac and Linux
    ```
    python -m venv venv
    source venv/bin/activate
    ```

    For Windows
    ```
    python -m venv venv
    venv\Scripts\activate
    ```

4. Install the required Python dependencies from `requirements.txt`:
    ```
    pip install -r requirements.txt
    ```

5. (optional: wsgi.py makes an env variable unneccessary) Set the FLASK_APP environment variable:

    For Mac and Linux
    ```
    export FLASK_APP=backend
    ```
    
    For Windows
    ```
    set FLASK_APP=backend
    ```

6. Ensure your Flask backend is set up to connect to your running MongoDB server. In LabAMS/backend/__init__.py the URI is set to  ```"mongodb://localhost:27017"``` by default and the database name is ```"LabAMS_DB"```

6. Run the Flask server:
    ```
    flask run
    ```
    This will start the Flask server on http://localhost:5000.

7. Open http://localhost:5000 in your browser. Click on the users and assets links. You should be directed to a page with just two []. This is not an error, it is just showing that your MongoDB database is empty. We will now add data to our database. In MongoDB compass add a database named ```LabAMS_DB``` with a collection named ```users```. Click on the users collection when it is created and go to ```ADD DATA``` and then ```Import JSON or CSV file``` from here you should select the ```users.json``` file in  the ```LabAMS/backend/database``` folder. Repeat the same process to add the data from ```assets.json``` into the MongoDB database. Reload http://localhost:5000 and the users and assets data should now appear.

## Frontend Setup

1. Open a new terminal/cmd window and navigate to the React frontend directory:
    ```
    cd "your_directory/web-development/LabAMS/frontend"
    ```

2. Install the required npm packages:
    ```
    npm install
    ```

3. Run the React application:
    ```
    npm start
    ```
    This will start the frontend react application on http://localhost:3000. You can now interact with the LabAMS app from this page.


