import uuid
from datetime import datetime
from enum import Enum
import json
from geopy import Point
from geopy.distance import distance
import random
center = Point(17.388624383482064, 103.72185412555663)

def generate_random_point(center, range_km):
    """
    Generate a random point within a given range (in km) of a center point.
    Returns a tuple of latitude and longitude.
    """
    # convert the range from km to degrees
    range_degrees = distance(kilometers=range_km).kilometers / 111

    # generate a random point within the range of the center point
    while True:
        # generate a random latitude and longitude within the range of the center point
        lat = random.uniform(center.latitude - range_degrees, center.latitude + range_degrees)
        lng = random.uniform(center.longitude - range_degrees, center.longitude + range_degrees)
        point = Point(lat, lng)

        # calculate the distance between the center point and the generated point
        dist = distance(center, point).km

        # check if the distance is within the range
        if dist <= range_km:
            break

    # return the latitude and longitude as a tuple
    return lat, lng

class Role(Enum):
    MEMBER = "member"

def generate_user_data(group_id):
    user_id = str(uuid.uuid4())
    username = "u" + str(uuid.uuid4())[:8]
    hash_password = "1234" # Replace this with actual password hashing function
    email = username + "@gmail.com"
    activated = True
    name = username
    surname = username
    phone = str(uuid.uuid4().int)[:10]
    removed = False
    role = Role.MEMBER.value
    created_at = "new Date()"
    updated_at = "new Date()"

    user_data = {
        "id": user_id,
        "username": username,
        "hash_password": hash_password,
        "email": email,
        "activated": activated,
        "name": name,
        "surname": surname,
        "phone": phone,
        "removed": removed,
        "role": role,
        "group_id": group_id,
        "created_at": created_at,
        "updated_at": updated_at,
    }

    return user_data

def get_subdistrict(address):
    try:
        if "ตำบล" in address:
            subdistrict = address.split("ตำบล")[1].strip()
        elif "ต." in address:
            subdistrict = address.split("ต.")[1].strip()
        else:
            subdistrict = ""

        # Extract just the first word from the sub-district name
        subdistrict_words = subdistrict.split()
        if subdistrict_words:
            subdistrict = subdistrict_words[0]

        return subdistrict
    except:
        return ""

user_stk = []
group_stk = []

# Load the workbook
# workbook = openpyxl.load_workbook('otop_kram.xlsx')
import pandas as pd

df = pd.read_excel('otop_kram.xlsx')
# print(df.head())
# print(df.iloc[1])
for idx, data in enumerate(df.iloc):
    gid = str(uuid.uuid4())
    if(idx>1 and idx<= 118):
        no = data[0]
        groupName = str(data[1])
        # if(idx >=35 and idx<=40):
        #     print(groupName)
        if groupName  == 'nan':
            # print(groupName)
            continue
        product = data[2]
        agency = data[3]
        district = data[4]
        time = data[5]
        groupType = data[6]
        address = data[7]

        subdistrict = get_subdistrict(address)
        # print(subdistrict)
        # จุดกึ่งกลาง
        center = Point(13.812075143604403, 100.50499488728185)
        # ช่วงระยะระดับกิโลเมตร
        range_km = 30
        lat, lng = generate_random_point(center, range_km)
        group_data = {
            "id": gid,
            "group_name": groupName,
            "group_type": "group",
            "agency": agency,
            "phone": "",
            "email": "",
            "logo": "logo.png",
            "banner": "banner.png",
            "verified": "true",
            "hno": "",
            "village": "",
            "lane": "",
            "road": "",
            "subdistrict": subdistrict,
            "district": district,
            "province": "จังหวัดสกลนคร",
            "zip_code": "",
            "lat": str(lat),
            "lng": str(lng),
            "created_at": "new Date()",
            "updated_at": "new Date()"
        }
        user_data = generate_user_data(gid)
        group_stk.append(group_data)
        if not user_stk:
            user_stk.append(user_data)
        else:
            for user in user_stk:
                if user_data['id'] == user['id']:
                    break
                if user_data['username'] == user['username']:
                    break
                if user_data['email'] == user['email']:
                    break
            else:
                user_stk.append(user_data)

# print(user_stk)
# print(group_stk)

# group_id = str(uuid.uuid4())
# user_data = generate_user_data(group_id)
#
# print(user_data['id'])

# user_stk = []
# for i in range(4):
#     group_id = str(uuid.uuid4())
#     user_data = generate_user_data(group_id)
#     if not user_stk:
#         user_stk.append(user_data)
#     else:
#         for user in user_stk:
#             if user_data['id'] == user['id']:
#                 break
#         else:
#             user_stk.append(user_data)
#


for i in user_stk:
    print(json.dumps(i, ensure_ascii=False), end=",\n")

print("\n\n")

for i in group_stk:
    print(json.dumps(i, ensure_ascii=False), end=",\n")
