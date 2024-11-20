from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///expenses.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Expense model
class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100), nullable=False)
    note = db.Column(db.String(200), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.datetime.utcnow)

# Create the database and tables
with app.app_context():
    db.create_all()

# Route to add expense
@app.route('/add_expense', methods=['POST'])
def add_expense():
    try:
        data = request.get_json()
        if 'amount' not in data or data['amount'] <= 0:
            return jsonify({"error": "Amount must be greater than 0"}), 400
        if not all(k in data for k in ('user_name', 'note')):
            return jsonify({"error": "Missing required fields"}), 400
        new_expense = Expense(
            user_name=data['user_name'],
            note=data['note'],
            amount=data['amount']
        )
        db.session.add(new_expense)
        db.session.commit()
        return jsonify({"message": "Expense added successfully!"}), 201
    except Exception as e:
        print("Error occurred:", e)
        return jsonify({"error": "Internal server error"}), 500

# Route to get expenses
@app.route('/get_expenses', methods=['GET'])
def get_expenses():
    expenses = Expense.query.all()
    result = [
        {
            "id": exp.id,
            "user_name": exp.user_name,
            "note": exp.note,
            "amount": exp.amount,
            "timestamp": exp.timestamp
        }
        for exp in expenses
    ]
    return jsonify(result)

# Test route to check database
@app.route('/test_db', methods=['GET'])
def test_db():
    try:
        test_entry = Expense.query.first()
        return jsonify({"test_entry": test_entry.user_name if test_entry else "No data"}), 200
    except Exception as e:
        print("Database Error:", e)
        return jsonify({"error": "Database error"}), 500

if __name__ == '__main__':
    app.run(debug=True)
