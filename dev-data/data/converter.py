import csv
import json

input_csv = "input.csv"
output_json = "output.json"


def safe_int(value):
    try:
        return int(value)
    except (ValueError, TypeError):
        return None


def safe_float(value):
    try:
        return float(value)
    except (ValueError, TypeError):
        return None


data_by_zone = {}

with open(input_csv, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)

    for row in reader:
        zone = row.get("Zone", "Unknown")

        # Safely convert numeric fields
        row["Serial"] = safe_int(row.get("Serial"))
        row["Establishment Year"] = safe_int(row.get("Establishment Year"))
        row["time needed to visit in hrs"] = safe_float(row.get("time needed to visit in hrs"))
        row["Google review rating"] = safe_float(row.get("Google review rating"))
        row["Entrance Fee in INR"] = safe_int(row.get("Entrance Fee in INR"))
        row["Number of google review in lakhs"] = safe_float(row.get("Number of google review in lakhs"))

        # Normalize empty strings
        for key, value in row.items():
            if value == "" or value == "Unknown":
                row[key] = None

        # Remove Zone from inner object
        row.pop("Zone", None)

        if zone not in data_by_zone:
            data_by_zone[zone] = []

        data_by_zone[zone].append(row)

# Write JSON output
with open(output_json, "w", encoding="utf-8") as jsonfile:
    json.dump(data_by_zone, jsonfile, indent=2, ensure_ascii=False)

print("✅ CSV converted to JSON successfully!")
