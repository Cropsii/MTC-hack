import pandas as pd
import json

def read_spreadsheet_to_json(file_path, json_output_path):
    # Read the spreadsheet
    df = pd.read_excel(file_path)

    # Convert the DataFrame to a list of dictionaries
    data = df.to_dict(orient='records')

    # Convert the list of dictionaries to a JSON string
    json_data = json.dumps(data, ensure_ascii=False, indent=4)

    # Save the JSON string to a file
    with open(json_output_path, 'w', encoding='utf-8') as f:
        f.write(json_data)

if __name__ == "__main__":
    read_spreadsheet_to_json('data/employees.xlsx', 'data.json')

