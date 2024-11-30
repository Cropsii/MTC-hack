from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/data', methods=['GET'])
def get_data():
    try:
        with open('data.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"detail": "Not Found"}), 404

if __name__ == '__main__':
    app.run(port=8008)
