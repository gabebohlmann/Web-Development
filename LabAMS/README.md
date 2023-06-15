This is the Lab Asset Management System (LabAMS) Application . It is a simple web app that keeps track of the users and tools in a reaserch lab. The webapp has a Flask(Python) and MongoDB backend with a ReactJS frontend that allows the user to do simple CRUD operations.



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
    ```
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

4. Install the required Python dependencies from `requirements.txt`:
    ```
    pip install -r requirements.txt
    ```

5. Set the FLASK_APP environment variable:
    ```
    export FLASK_APP=backend  # On Windows, use `set FLASK_APP=backend`
    ```
6. Ensure your Flask backend is set up to connect to your running MongoDB server. In /backend/__init__.py the the URI is set to  ```"mongodb://localhost:27017"``` by default and the database name is ```"LabAMS_DB"```

6. Run the Flask server:
    ```
    flask run
    ```
    This will start the Flask server on http://localhost:5000.

## Frontend Setup

1. Open a new terminal/cmd window and navigate to the React frontend directory:
    ```
    cd your_directory/web-development/LabAMS/frontend
    ```

2. Install the required npm packages:
    ```
    npm install
    ```

3. Run the React application:
    ```
    npm start
    ```
    This will start the frontend react application on http://localhost:3000. The user can interact with the LabAMSfrom this page.


