This is the Lab Asset Management System (LabAMS) Application . It is a simple web app that keeps track of the users and tools in a reaserch lab. The webapp has a Flask(Python) and MongoDB backend with a ReactJS frontend that allows the user to do simple CRUD operations.  

# Local Setup Instructions

## Backend Setup

1. Clone the repository to your local machine. Open terminal/cmd and run:
    ```
    git clone https://github.com/gabebohlmann/web-development.git
    ```

2. Navigate to the Flask backend directory:
    ```
    cd your_directory/web-development/LabAMS
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
    export FLASK_APP=<your-flask-app>  # On Windows, use `set FLASK_APP=<your-flask-app>`
    ```

6. Run the Flask server:
    ```
    flask run
    ```
    This will start the Flask server on http://localhost:5000.

## Frontend Setup

1. Open a new terminal/cmd window and navigate to the React frontend directory:
    ```
    cd <path-to-your-repository>/<react-frontend-directory>
    ```

2. Install the required npm packages:
    ```
    npm install
    ```

3. Run the React application:
    ```
    npm start
    ```
    This will start the React application on http://localhost:3000.

## MongoDB Setup

1. Start your MongoDB server. The method for doing this can vary depending on your operating system.

2. Ensure your Flask backend is set up to connect to your running MongoDB server.

With the Flask server running on http://localhost:5000 and the React application running on http://localhost:3000, you should be able to access the web application via your web browser.

Note: This guide assumes MongoDB is running on its default port (27017). If it is not, you will have to update the connection settings in the Flask backend to match your MongoDB server's settings.
