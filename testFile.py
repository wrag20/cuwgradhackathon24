import requests

# IP to be provided during the hackathon
url = "http://x.x.x.x:8099/generate"

# Key to be provided during the Hackathon
api_key = "key2"  
data = "Give me the latest information about..." # Example data passed to the API (prompt)


headers = {"API-Key": api_key}
response = requests.get(url, params={"data": data}, headers=headers)

# Check if the request was successful
if response.status_code == 200:
    generated_text = response.json()["generated_text"]
    print("Generated text:")
    print(generated_text)
else:
    print("Failed to generate text. Status code:", response.status_code)
    print("Error message:", response.text)