from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

BASE_URL = '' ##here paste the api url generated from weather api

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City parameter is required'}), 400

    url = f"{BASE_URL}&q={city}&aqi=no"
    response = requests.get(url)

    if response.status_code != 200:
        return jsonify({'error': 'Failed to fetch weather data'}), response.status_code

    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    print("Starting Flask app...")
    app.run(debug=True)
