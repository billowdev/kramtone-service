import uuid
import random
import json

group_list = [
    {"id": "69beb4aa-726d-4861-a3f3-bb6fcb618b57"},
    {"id": "613c2b8d-1eea-480e-8d99-62ebb8efdb8d"},
    {"id": "d6293c3f-1009-41ea-b78e-e4c932bab6b5"},
    {"id": "acc251d4-fb4c-4cdb-8cb4-3f44a7f350c4"},
    {"id": "1046e6b6-9ca5-4b02-836c-b057c5720ec5"},
    {"id": "81c578f6-33e1-4c60-95b1-56d180a2a876"},
    {"id": "26940ed1-7624-4299-a671-e2620722f176"},
    {"id": "b9b0e5c4-cf52-4e77-8451-74056af38286"},
    {"id": "688a033a-c19c-4620-8eef-c4f9d463ed4c"},
    {"id": "456d71f7-a357-4dd9-92f8-e6c482be370a"},
    {"id": "df022c4b-e6b8-4d04-8844-2910a5814fdb"},
    {"id": "512aeb44-1839-4245-bea0-55323ad87f47"},
    {"id": "0fbe0ceb-cea4-4dd5-8578-dc6765d4c999"},
    {"id": "8bc4f7b5-271f-4c42-955d-28fb702e261c"},
    {"id": "e3d4821b-2c66-4603-971c-7a65cafdfdb9"},
    {"id": "82b060f6-79d2-4ccc-a893-0a9334e46ba7"},
    {"id": "bf6a055a-8771-4142-a20e-eec0aeb6da41"},
    {"id": "20a238b7-c4f1-48d1-b49c-97bd224c796c"},
    {"id": "2f7f5d86-3ad9-4d32-8874-0ec7bf8a9562"},
    {"id": "26774f48-fda0-4380-bd9f-728c2237f081"},
    {"id": "c03f863d-9014-46f6-beef-0baf921fee44"},
    {"id": "b6b72254-83a1-44d3-b6d3-27b5a80a7790"},
    {"id": "828c0ad0-2da4-40b5-8f6b-af5979bb4b91"},
    {"id": "cd94db25-a3e0-4171-bdbd-19b647550f0b"},
    {"id": "8b3d3972-d717-46dd-af9b-002eecb68ce1"},
    {"id": "7e6e6171-c364-4fce-a01d-fa4feba0df91"},
    {"id": "56b4012f-2a0d-4df8-9f25-28d45689f49e"},
    {"id": "14cb2ed2-3f8a-43ee-afd5-44d4fa79511d"},
    {"id": "eabac69b-34c6-4144-89b7-d483f5883fd4"},
    {"id": "31a5fa2b-e59a-4636-9f43-a144d7476bfb"},
    {"id": "bb209da2-e889-4e2d-92d4-7bf6d5f3efa5"},
    {"id": "75f7deb4-793e-4c4f-b4f1-c4f51741c214"},
    {"id": "1bad812e-510c-4aea-9e5b-490c675bd7d5"},
    {"id": "7197b2bc-ce8d-46f7-a52d-bd14ebb344dd"},
    {"id": "9f526904-ce14-4bef-ae07-5ffd9f6fd61c"},
    {"id": "c6d5636b-ef76-42d0-a995-7ff11d7df1ad"},
    {"id": "2dbbc728-dc87-41ec-96c9-a9b163575081"},
    {"id": "336ffa8a-3414-4a99-b751-fc3e9bc300ee"},
    {"id": "a962016a-b536-468a-849b-cec6555f7818"},
    {"id": "0c39525d-a219-47fd-892e-9e94c4118e0f"},
    {"id": "244acbc8-5362-4feb-9bfb-3046714146bd"},
    {"id": "311f2b97-5a3e-4052-a2f7-f6591dc2ef15"},
    {"id": "d5ece288-29e1-43d4-829e-2544db2889d8"},
    {"id": "4d6bc725-dd79-4a94-a11c-85a788fc2e6e"},
    {"id": "918bb4c9-9e80-42f5-a4e3-ed70d366174e"},
    {"id": "24c816b5-834b-4109-b269-1ebfe6c35893"},
    {"id": "b33ba04b-2609-458a-8f83-93d1122a8d87"},
    {"id": "9d74f2c2-cc37-4953-87b4-c3122a2d12f9"},
    {"id": "4c26f76c-5326-4ce5-aa7f-a4ecb5ed254a"},
    {"id": "d18228cb-eed3-4784-b8cb-d7ab503ae2fb"},
    {"id": "39363aef-924a-497d-ac28-24751d56ab22"},
    {"id": "93880e2b-8b2c-41bd-acce-f5c5f4142eda"},
    {"id": "e1a407f7-f895-40c2-ad09-34e39f3eee50"},
    {"id": "38e77ce3-fb45-453d-b980-102d667ec884"},
    {"id": "86482d19-ca40-405c-9c3f-af37ffc65c6a"},
    {"id": "4ab9f2b6-2e76-4fe9-a8c8-698122077659"},
    {"id": "0b4f470b-b4f2-4c1e-bb25-20628dcf9fe2"},
    {"id": "ca93d19a-a764-4dba-835f-6d5552079147"},
    {"id": "087b5148-9dce-4a44-8171-d7e70ee400e7"},
    {"id": "38c2600d-e09f-46b3-bcb5-68a1effe7031"},
    {"id": "92629230-6f7a-47ca-9c89-dbf72b6f6bee"},
    {"id": "1aebcb84-c7a8-4487-9c54-6b86049f24be"},
    {"id": "e33e0f29-da3c-473c-8add-3d18ed8ce784"},
    {"id": "9acecad3-1959-4d0c-a8e2-10de5a42aabd"},
    {"id": "57c721f0-e9c2-4c5e-981b-07421a7522ae"},
    {"id": "bdf003ff-b9bb-432c-a2e2-c729e0b953e7"},
    {"id": "109be60c-9d13-4666-84bc-96e1238c11c6"},
    {"id": "fdb857e6-ef43-4459-9ab7-1cdd3466a210"},
    {"id": "46025612-8bcd-4b88-85ec-1f5021581cb2"},
    {"id": "b398028f-0d5d-4513-9688-18a31d9a2d7a"},
    {"id": "6264b93e-7b22-40d6-ae7a-f3dac250145b"},
    {"id": "14963da7-c68d-48a4-a7dd-8a2f22233b94"},
    {"id": "fb13cb9c-12df-419a-8132-688b2194c6ea"},
    {"id": "1b0536f6-f2d3-4433-bb49-83e2c29d4206"},
    {"id": "d7d56ff9-7f92-402e-bace-9a47b82ace46"},
    {"id": "a1a8c229-1b8f-41c6-ac5b-960bb82f9a29"},
    {"id": "e3d39e7e-8f97-4f26-8024-9ab52a2e84e1"},
    {"id": "53fa32ed-a755-4ac3-81ce-66788762a6cd"},
    {"id": "4dfab815-b4e5-416e-b368-a6f5b4faf4a7"},
    {"id": "9b09054e-63cb-47fe-a359-18cf591cfea0"},
    {"id": "1ed4c5e7-e10d-42a9-bcef-792e28d87ecb"},
    {"id": "d8c332b7-2690-40fc-8026-19a042cf1a0f"},
    {"id": "842b7ea0-1527-464f-bb73-c2441ef92e00"},
    {"id": "b051c1e8-056f-4d7c-8787-6d0a255ec887"},
    {"id": "31cb1630-6e40-4a69-a598-9f40a258d2cb"},
    {"id": "29c449e1-eed0-4a09-8002-a4d0b9af9840"},
    {"id": "e4adb17f-38f7-40a5-aa73-7173c83dd0cd"},
    {"id": "842fca93-c07a-48d3-bf6f-5e63bf1339be"},
    {"id": "4bddcb02-5360-4be5-9a9c-f64c9bf17d25"},
    {"id": "e157e996-9288-4909-8b16-53838a9ad6c9"},
    {"id": "98439ccc-8c47-405d-94d2-3c165135ad60"},
    {"id": "8f000392-bc14-4d59-a74f-5453d0cae4f8"},
    {"id": "ae71a71b-ed79-4978-baa3-cd94eee17b5b"},
    {"id": "07b6ec4d-a5a0-47d6-b16f-29234cdd2a8c"},
    {"id": "d222485a-4133-4dd0-9bcb-1bb55c30be4e"},
    {"id": "7e490dcf-7f6d-4816-8bbf-e5e89d00caa8"},
    {"id": "11e3a4d6-e2fa-49b4-b50a-13d97a4c939d"},
    {"id": "2f78f8eb-d99e-4def-bbc2-cc39b79afa14"},
    {"id": "7f41c8fb-de7e-47c4-b3d2-a0e0b7f8b4fc"},
    {"id": "81d6634c-03b5-435b-811b-4ed35f90beb7"},
    {"id": "600fc323-7bf6-4441-854e-43774c0a0d34"},
    {"id": "b0ae1051-f74d-42ab-bf19-dc452f9a171c"},
    {"id": "a6df73f4-e8b6-4094-bbc0-7c027a82d6c7"},
    {"id": "e27e2fe1-cdc7-4104-b0a2-b75671c8da85"},
]

category_list = [
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a0",
        "name": "ไม่มีหมวดหมู่",
        "desc": "ไม่มีหมวดหมู่",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
        "name": "สินค้าอื่นๆ",
        "desc": "สินค้าอื่นๆ",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
        "name": "เสื้อยืด",
        "desc": "เสื้อยืด",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
        "name": "ผ้าพันคอ",
        "desc": "ผ้าพันคอ",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
        "name": "ผ้าคลุมไหล่",
        "desc": "ผ้าคลุมไหล่",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a5",
        "name": "ผ้าถุง",
        "desc": "ผ้าถุง",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a6",
        "name": "ผ้ายกม้วน",
        "desc": "ผ้ายกม้วน",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a7",
        "name": "ผ้าผืน/ผ้าเมตร",
        "desc": "ผ้าผืน/ผ้าเมตร",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a8",
        "name": "ผ้าตัดชุด",
        "desc": "ผ้าตัดชุด",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a9",
        "name": "เสื้อผ้าคราม",
        "desc": "เสื้อผ้าคราม",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e012a1",
        "name": "เครื่องประดับ",
        "desc": "เครื่องประดับ",
    },
    {
        "id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e012a2",
        "name": "รองเท้าผ้าคราม",
        "desc": "รองเท้าผ้าคราม",
    },
]

color_cheme_list = [
    {"id": "SK1-60"},
    {"id": "SK1-97"},
    {"id": "SK1-85"},
    {"id": "SK1-80"},
    {"id": "SK1-65"},
    {"id": "SK1-116"},
    {"id": "SK2-39"},
    {"id": "SK3-49"},
    {"id": "SK3-45"},
    {"id": "SK3-22"},
    {"id": "SK3-32"},
    {"id": "SK3-20"},
    {"id": "SK4-43"},
    {"id": "SK4-28"},
    {"id": "SK4-27"},
    {"id": "SK4-1"},
    {"id": "SK4-2"},
    {"id": "SK5-37"},
    {"id": "SK5-98"},
    {"id": "SK5-51"},
    {"id": "SK5-13"},
    {"id": "SK5-5"},
    {"id": "SK5-16"},
    {"id": "SK5-15"},
    {"id": "SK5-108"},
    {"id": "SK6-4"},
    {"id": "SK6-6"},
    {"id": "SK6-7"},
    {"id": "SK5-8"},
    {"id": "SK5-10"},
]

image_list = [
    'default_image.png',
    'img_1',
    'img_2',
    'img_3',
    'img_4',
    'img_5',
    'img_6',
    'img_7',
    'img_8',
    'img_9',
    'img_10',
]
def get_category_info(category_list, category_id):
    for category in category_list:
        if category['id'] == category_id:
            return category['name'], category['desc']
    return None, None  # return None if category_id not found in category_list

def generate_cloth_details():
    cloth_names = [
        "เสื้อยืด",
        "กางเกงยีนส์",
        "กระโปรง",
        "เสื้อเชิ้ต",
        "เดรส",
        "ชุดแต่งงาน",
        "ชุดนอน",
        "เสื้อโปโล",
        "เสื้อกล้าม",
        "เสื้อกันหนาว",
        "แจ็คเก็ต",
        "เสื้อคลุม",
        "กางเกงขาสั้น",
        "เสื้อลูกไม้",
        "กระโปรงยาว",
        "ชุดว่ายน้ำ",
        "ชุดกีฬา",
        "เสื้อผ้าฝ้าย",
        "เสื้อเฟ้น",
        "กระโปรงไหม"
    ]

    # Choose a random cloth name
    cloth_name = random.choice(cloth_names)

    cloth_description = f"นี่คือ {cloth_name} ที่มีคุณภาพดี"
    cloth_price = random.randint(300, 3000)
    cloth_detail = {
        "name": cloth_name,
        "desc": cloth_description,
        "price": cloth_price
    }

    return cloth_detail

def create_product(group_list, category_list):
    product_id = str(uuid.uuid4())
    group_id = group_list[random.randint(0, len(group_list)-1)]["id"]
    category_id = category_list[random.randint(0, len(category_list)-1)]["id"]
    name, desc = get_category_info(category_list, category_id)
    color_scheme_id = color_cheme_list[random.randint(0, len(color_cheme_list)-1)]["id"]
    reload_count = random.randint(100, 1000)
    # created_at = datetime.now()
    # updated_at = datetime.now()
    cloth_details = generate_cloth_details()
    # print(cloth_details['name'])
    product = {
        "id": product_id,
        "name": name,
        "desc": desc,
        "price": cloth_details['price'],
        "group_id": group_id,
        "category_id": category_id,
        "color_scheme_id": color_scheme_id,
        "reload_count": reload_count,
        "created_at": "2023-04-28T09:57:33.991Z",
        "updated_at": "2023-04-28T09:57:33.991Z"
    }

    return product

def create_product_image(product_id):
    product_image_id = str(uuid.uuid4())
    # image_url = "default_image.png"
    # created_at = datetime.now()
    # updated_at = datetime.now()
    image_url = random.choice(image_list)
    product_image = {
        "id": product_image_id,
        "image": image_url,
        "product_id": product_id,
        "created_at": "2023-04-28T09:57:33.991Z",
        "updated_at": "2023-04-28T09:57:33.991Z"
    }

    return product_image

product_stk = []
product_image_stk = []


for i in range(100):
    product = create_product(group_list, category_list)
    product_image = create_product_image(product["id"])
    product_stk.append(product)
    product_image_stk.append(product_image)

for i in product_stk:
    print(json.dumps(i, ensure_ascii=False), end=",\n")

print("\n\n")

for i in product_image_stk:
    print(json.dumps(i, ensure_ascii=False), end=",\n")
