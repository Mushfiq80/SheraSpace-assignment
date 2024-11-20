# Expense Tracker
A full-stack Expense Tracker application that allows users to input their expenses and view them in a table. The frontend is built using React with Vite, and the backend is powered by Flask with a SQLite database.

# Features
Add expenses with User Name, Expense Note, and Amount.
Automatically records the time of the expense.
Displays expenses in a table with columns: Time, User Name, Note, and Expense.
Full-stack integration with a React frontend and Flask backend.
Prerequisites
Before running this project, ensure you have the following installed on your machine:

*** Node.js (16.x or later) and npm ***
*** Python (3.10 or later) with pip ***

# Installation Instructions
- Step 1: Clone the Repository

git clone https://github.com/<your-username>/expense-tracker.git
cd expense-tracker

- Step 2: Setup the Backend
Navigate to the backend directory:


cd backend
Create and activate a virtual environment (optional but recommended):


python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
Install backend dependencies:


pip install -r requirements.txt
Run the backend server:

python app.py
The backend will be available at http://127.0.0.1:5000.

- Step 3: Setup the Frontend
Open a new terminal and navigate to the frontend directory:


cd frontend
Install frontend dependencies:

npm install
Create a .env file in the frontend directory and add the following:


VITE_API_BASE_URL=http://127.0.0.1:5000
Start the frontend development server:


npm run dev
The frontend will be available at http://localhost:5173.

- Step 4: Test the Application
Open your browser and navigate to http://localhost:5173.
Add some expenses using the form.
Verify that the table updates with the new expense data.



