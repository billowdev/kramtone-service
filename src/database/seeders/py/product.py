import uuid
import random
import json

group_list = [
 {
	"id": "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
},
{
	"id": "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
},
{
	"id": "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",

},
{
	"id": "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
	
},


{"id": "08a2634f-8b17-4fac-ae54-361c4053a149"}, 
{"id": "8254ebed-4dbe-4a97-bcf4-248feb06965f"}, 
{"id": "f2045ed4-f966-4d48-ab51-959c0f210e03"}, 
{"id": "0a566d64-a0e5-41b0-a600-2af2bfe24da8"}, 
{"id": "aba80c0a-6afe-497d-8961-f20153def756"}, 
{"id": "480a97f1-d284-45a7-a7f3-54bb061a8674"}, 
{"id": "7d8f8110-e956-45cf-bc28-592c6992c677"}, 
{"id": "3c46db95-7b63-4eed-8125-287d9b43c3b4"}, 
{"id": "b27ca123-72a9-47c7-b881-8c88f6d4d059"}, 
{"id": "0ba274ab-719d-4a7f-a5e9-15b48c7eb02f"}, 
{"id": "f422a474-e83d-4e24-bfef-4f23c80f3fc5"}, 
{"id": "b3ae2366-39bf-4fe5-b4a8-d2ac41079e39"}, 
{"id": "3ec93540-a233-4cbc-9d28-7cb80a7237ad"}, 
{"id": "b932fb5e-8eb7-42c1-8e11-af27e5ef2187"}, 
{"id": "0946cb39-39a1-44e5-ae69-8e79eac5783a"}, 
{"id": "85f130e2-407b-4249-8c12-312bb822f532"}, 
{"id": "9345f5d7-77f0-4184-9440-d889399cc539"}, 
{"id": "5039808a-41ca-498a-95f9-ba1a73738949"}, 
{"id": "c9871b52-165a-4722-adbc-ff8803ac726b"}, 
{"id": "e7d88519-d13f-416e-86ac-b69085cfde8e"}, 
{"id": "790de0f3-bef3-4097-831b-3ba1953089fc"}, 
{"id": "26d10aaa-b69c-4b2d-a325-18ed7dfbf5bf"}, 
{"id": "f44ec50b-c77e-479d-8520-56649e5fb184"}, 
{"id": "55f32c44-469e-4f84-ac9d-1cf783345620"}, 
{"id": "7a0fbad5-15fd-470c-bb47-ff588f7455bc"}, 
{"id": "487db541-70cf-4afd-9561-1413a99078c1"}, 
{"id": "8f22a5f7-d929-4089-b192-44d955f1fae1"}, 
{"id": "bbe5460e-85c2-4c20-b9a7-0f9c7cb5166d"}, 
{"id": "dbcca73b-7ba4-4c09-887d-3cce750402a1"}, 
{"id": "95873350-8a06-4f83-a90c-952950c9765e"}, 
{"id": "ffb1b395-4a4e-435c-99ac-b69997f9783f"}, 
{"id": "3209513c-e669-4d14-aecd-a4aab0f52f1c"}, 
{"id": "b427579d-4e4a-4c91-af69-b8d3c103a34c"}, 
{"id": "51877bc2-9642-45a7-a2b2-8dd14f9b7f5b"}, 
{"id": "22021a34-5dfd-4a68-ae10-f5b40473a16d"}, 
{"id": "8d556b71-0e1f-4d9a-944a-c49940ee12cb"}, 
{"id": "7e708017-f359-4193-b7d3-e9b59970dbf6"}, 
{"id": "f2da3409-9e69-40b0-92f9-06a5a307f003"}, 
{"id": "1bb424b7-5bc5-4f09-a61d-afdc44d4b707"}, 
{"id": "1e49a1b9-62cc-4c3d-813f-cb35ec91a04b"}, 
{"id": "218e53ea-3ac0-4272-a197-867ff4acb6f6"}, 
{"id": "4391f7d0-fbd2-4ab2-833b-4bb216d62518"}, 
{"id": "c6a7825b-e325-40fb-9a44-4ead098c303c"}, 
{"id": "761745ae-312e-41d6-9627-a653cc39f04d"}, 
{"id": "ff29a7f6-cf9b-4b01-b324-3fc649c3811b"}, 
{"id": "f4fb3077-f17b-42a8-9fd4-15c1260888f4"}, 
{"id": "bd216e19-13f6-4afb-98a3-59dc96cfaf63"}, 
{"id": "9859e30c-ba94-44f4-abe7-25aa42e81755"}, 
{"id": "5f558c3d-54e8-4c16-a4e7-4d46c65ec10e"}, 
{"id": "8bfb3f12-0348-4fb2-9890-5769ecfe3358"}, 
{"id": "8d19394e-f5a4-4942-aa9f-d7f60f89b1d1"}, 
{"id": "a9c54f4c-4039-48f4-9c3a-8a24b6ab1365"}, 
{"id": "c8891f5f-c412-4500-bb21-70b40f3cc36a"}, 
{"id": "27b274dc-9767-4948-bd33-dcf654cd422a"}, 
{"id": "ed24e207-c4c7-4cfc-96f4-6868973adb81"}, 
{"id": "a572a428-78b7-478a-a81d-04a26a1a502e"}, 
{"id": "247e20aa-e74a-4379-b11a-aabf586bae91"}, 
{"id": "ed05b86d-580b-4818-8722-88c193915e43"}, 
{"id": "d920b40f-3b80-43ed-91e9-7a0b97a259fa"}, 
{"id": "b50cf3c8-1d9d-4f79-af27-3052b3583c62"}, 
{"id": "7de83363-1d36-48f7-9fa5-c1c99a747ed9"}, 
{"id": "3064f538-019e-4a79-9760-c83ac75206e5"}, 
{"id": "1678a6a0-36bf-4060-8b37-83807868f95e"}, 
{"id": "5bc3e7fa-f2e5-4f8c-84e0-f84715f3c844"}, 
{"id": "524d0a71-b5c9-4c89-84d5-ee859314f015"}, 
{"id": "0ddc2912-4e91-45ec-8ab5-5357a21dbae6"}, 
{"id": "d6734dce-9c4b-42d6-9180-51b4c1fe540d"}, 
{"id": "d89454f3-f679-4b36-a06f-91eb5fac28f8"}, 
{"id": "bf9bfc35-c22f-4bfe-a5f8-00a729a29bcc"}, 
{"id": "bc6ecde1-ed90-477a-bd03-418bbdccd00b"}, 
{"id": "61942a18-e181-4a98-b878-dee26778845a"}, 
{"id": "b5c0afa8-6418-4233-aea5-a629c9236d4e"}, 
{"id": "3751740f-339d-40e1-af94-4063d8276c73"}, 
{"id": "19f3f05c-ba42-4993-9af1-5151c72f271c"}, 
{"id": "798be380-3d8d-43fb-b689-c8b07855a6b2"}, 
{"id": "a6f8f182-b68b-461a-a119-d7a85de52ac6"}, 
{"id": "f92240c4-d9b9-4c31-8344-9bc0dd3650a0"}, 
{"id": "14e0d8ee-c7dd-4ab7-94c1-f01892d1917c"}, 
{"id": "951d5a7b-c09b-4c38-b09f-a6a91d523c33"}, 
{"id": "7f235917-ba7d-499e-be21-5a5f8d436020"}, 
{"id": "f4ba9db5-9e8a-47f1-92fb-4cd9d89bf2e9"}, 
{"id": "58fedf4e-8358-4bad-9903-710e44b16097"}, 
{"id": "e32bf44d-c8cc-4f85-9802-8df2befb8787"}, 
{"id": "a90452bd-5016-4917-8f89-677d42024305"}, 
{"id": "57a0b050-f095-4a46-ab8a-d5469eca1127"}, 
{"id": "42725f7c-f890-4367-b999-d724c43d11cd"}, 
{"id": "c0b06111-ccab-45ea-8169-f34a22079067"}, 
{"id": "c4f3ecb4-181f-4500-8ba8-919f116e105c"}, 
{"id": "2def7245-3486-47d5-8865-0d01a7f31aa3"}, 
{"id": "ff779ca3-7455-49e1-9228-3c212805572b"}, 
{"id": "67bbe88a-a72d-46d5-a6e6-9be6f482e418"}, 
{"id": "de455e4e-6911-4bb4-b7f5-3b2944330e06"}, 
{"id": "01ce5a54-2a31-4b8b-b73f-bd0a6974b288"}, 
{"id": "070131be-61a2-4de6-a9ff-1f8d9d1a0e48"}, 
{"id": "eb396d51-59af-4274-9342-fffc4035c570"}, 
{"id": "6186fb8a-3ad7-40df-aef4-a4c4c2774b8f"}, 
{"id": "74c1808b-b8af-491c-affe-703b7240c5af"}, 
{"id": "a5385280-2e36-4a79-b72e-cd2166b50ee0"}, 
{"id": "082abd3d-0927-48d1-b5c7-c3c788d7285e"}, 
{"id": "911a55ef-da59-4944-8191-6e2a62644d0c"}, 
{"id": "524da505-3413-4df8-8c2f-963928704efb"}, 
{"id": "dc10cb72-f535-4051-abbf-4004cb256488"}, 
{"id": "c2c9d519-d0fe-4620-9cb8-eb8d53bf0ed2"}, 
{"id": "6462726d-c523-4743-82bb-26e8559dc011"}, 

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
        "recommend":random.choice([True, False]),
        "publish":True,
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
