'use strict';
import { QueryInterface } from "sequelize";
type ProductImageType = {
	id: string,
	image: string;
	product_id: string;
	created_at: Date,
	updated_at: Date

}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const productImageData: Array<ProductImageType> = [
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a5",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a6",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a7",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a5",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a8",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a6",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a9",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a7",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec81e011a0",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a8",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a1",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a9",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a2",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a1",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a3",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a2",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a4",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a3",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a5",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a4",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a6",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a5",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a7",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a5",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a8",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a6",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a9",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a7",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e012a1",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a8",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e012a2",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a9",
				created_at: new Date(),
				updated_at: new Date(),
			},




			{"id": "8277ebd5-f417-487a-ba80-8cb948728f57", "image": "default_image.png", "product_id": "a53cbce7-fb79-4286-9f07-325d5a24c976", "created_at": new Date(), "updated_at": new Date()},
			{"id": "63dbe65f-c1f1-401a-8120-d11e36f9fdc6", "image": "img_3", "product_id": "3eeda804-d3e6-487c-9eaa-a5da66a8deb8", "created_at": new Date(), "updated_at": new Date()},
			{"id": "09346307-9da9-497c-96dd-7ad5b437e65d", "image": "img_3", "product_id": "c0e802cc-6362-484e-842b-7813e10a88b8", "created_at": new Date(), "updated_at": new Date()},
			{"id": "3f933b7b-6b4d-46ff-a1f2-8822442e9c1f", "image": "img_9", "product_id": "be8edb88-c424-4d29-9158-895b40a15da7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "862dec33-767d-458c-876c-3acf1ae4e34f", "image": "img_9", "product_id": "cef2387c-6092-4c92-9f1a-d944ffe0de80", "created_at": new Date(), "updated_at": new Date()},
			{"id": "65abf435-d7f9-4f36-8996-078216967e33", "image": "img_2", "product_id": "153abcae-6490-4fb2-be4d-9f878793ddd6", "created_at": new Date(), "updated_at": new Date()},
			{"id": "328b9a8d-bc55-4864-b5e7-db3252f18163", "image": "img_6", "product_id": "730b341a-6439-4a2c-adcd-6322433fb0c9", "created_at": new Date(), "updated_at": new Date()},
			{"id": "e8dd8d9e-a1be-4d0f-b701-c0f0b204b1f7", "image": "img_6", "product_id": "79a474cb-ead2-4e86-afa0-e79cdc552ac5", "created_at": new Date(), "updated_at": new Date()},
			{"id": "c647e485-ad6d-4edc-9777-59dc85fad148", "image": "img_9", "product_id": "9899ca83-1cc4-4695-a5bc-15292d336915", "created_at": new Date(), "updated_at": new Date()},
			{"id": "6a6142e7-0dfc-4d27-a4fe-448d67c498bb", "image": "img_2", "product_id": "f02fa43b-c3b5-4f36-99a2-7a6f72e88341", "created_at": new Date(), "updated_at": new Date()},
			{"id": "39359401-0e46-4bf4-bdda-2203032329ac", "image": "img_9", "product_id": "18c94933-ef6a-4442-b8b0-508853504f2e", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f2834e5c-64b5-4024-8b02-30bea9b8bbef", "image": "img_7", "product_id": "bcefd3a3-411a-4140-9664-093ea9f542c4", "created_at": new Date(), "updated_at": new Date()},
			{"id": "a846f167-cb6b-441a-ab85-729cd8a2fc7a", "image": "img_7", "product_id": "45c22f18-5706-4fdf-920a-95b90536eaf7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "a5049f63-5549-4aec-9239-7cf765d8f8c6", "image": "img_6", "product_id": "552db0f3-2b4e-44d4-9af6-6c6f04832d29", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f7ed752a-756b-4ca7-a141-9d64467e56d9", "image": "img_6", "product_id": "02144dbb-9cd8-4a4d-83a4-bc4181fc3b43", "created_at": new Date(), "updated_at": new Date()},
			{"id": "57ab1313-1461-4c35-94af-4e2544631966", "image": "img_3", "product_id": "21b1e01b-4f48-4dbc-8f82-0492410151ca", "created_at": new Date(), "updated_at": new Date()},
			{"id": "0f5429e2-2036-42f4-94c9-4778efb820f1", "image": "img_3", "product_id": "b27acb9e-a7de-4c2f-9eca-3d0de3aa1e5c", "created_at": new Date(), "updated_at": new Date()},
			{"id": "bea5d82c-3b4f-4e89-b909-079bf0c935aa", "image": "img_9", "product_id": "6c36ed7f-3fd2-4d98-8da6-a8eacf4b78ea", "created_at": new Date(), "updated_at": new Date()},
			{"id": "e46fa957-2255-45a9-9018-9f2ad72bb2e0", "image": "img_6", "product_id": "09570e2c-2d16-4acd-bd55-871919218afb", "created_at": new Date(), "updated_at": new Date()},
			{"id": "a28b080e-0e4e-455a-97e6-d736e0febdc9", "image": "img_3", "product_id": "2d2a423e-fe90-460d-911a-0030a69fc3c1", "created_at": new Date(), "updated_at": new Date()},
			{"id": "61845b6c-cc2e-46b8-92d2-3206f00a97e1", "image": "img_7", "product_id": "b0cd8c4b-2297-4df1-aee5-acbb9118e8a0", "created_at": new Date(), "updated_at": new Date()},
			{"id": "15e0f3b7-f22f-4b2a-8fef-233871f7b01c", "image": "img_1", "product_id": "aa10aabe-3992-417f-a205-7f74e5f81c72", "created_at": new Date(), "updated_at": new Date()},
			{"id": "60e9bcae-ff36-4025-89fc-901f73bfbd01", "image": "img_3", "product_id": "5cd63505-8a68-46f8-bd77-f9ec01e025dd", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f90f1e15-79b9-4838-b65e-12cc6d14994d", "image": "img_10", "product_id": "cfd45b6a-3023-4995-a0c2-24f8cb4dd71f", "created_at": new Date(), "updated_at": new Date()},
			{"id": "a16697c0-58a5-4fbf-afe7-95fcf4ec71af", "image": "img_1", "product_id": "b7c932ad-230e-4234-b29d-cb2ec53b5b8f", "created_at": new Date(), "updated_at": new Date()},
			{"id": "774383c2-1d1d-4e5d-823e-d78fb7979d26", "image": "img_9", "product_id": "816e1980-6b23-45c3-879d-66b9611a6dcc", "created_at": new Date(), "updated_at": new Date()},
			{"id": "8f377e86-177e-47a1-9fe3-a4870f798c73", "image": "img_2", "product_id": "26a2062c-a9d2-4a35-91bb-72a692a760b5", "created_at": new Date(), "updated_at": new Date()},
			{"id": "c5ec9a8e-5d01-435d-b40f-825b4cdfe61e", "image": "img_10", "product_id": "9bb1e91f-22ce-4be6-a1ef-0acfaa6925ac", "created_at": new Date(), "updated_at": new Date()},
			{"id": "eec9b251-eeed-45ee-94d6-b5107c25829e", "image": "img_1", "product_id": "49b422a2-19ce-47b7-aaf4-e29679c62c19", "created_at": new Date(), "updated_at": new Date()},
			{"id": "847ecbff-7bb8-4a2f-8ee2-42d875d26e18", "image": "img_8", "product_id": "3b700521-6f8d-462b-8ea8-7be948eaf4db", "created_at": new Date(), "updated_at": new Date()},
			{"id": "469ad884-f9f5-42bc-81f5-dc0f7411d518", "image": "img_2", "product_id": "2ad97c26-be19-4608-96ad-32ef0106fcd1", "created_at": new Date(), "updated_at": new Date()},
			{"id": "8f8f9dbd-0ee6-46d9-a432-37c27039e00f", "image": "img_3", "product_id": "6284961c-a49c-4362-b3ba-32a17f19e0c7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b68f62fe-ff7c-4769-b36d-2d402598596a", "image": "img_10", "product_id": "77f7da04-ea0d-465c-a7b2-a46f83057f07", "created_at": new Date(), "updated_at": new Date()},
			{"id": "896cb87e-40ae-4297-a1bc-3c7691f9bddf", "image": "img_1", "product_id": "043c4327-0ae1-485e-afcc-e71ca7f51af0", "created_at": new Date(), "updated_at": new Date()},
			{"id": "75c822aa-1e58-4748-bd7a-302fb508a999", "image": "img_4", "product_id": "840b1750-f030-40cb-bd51-f00bffaa04b8", "created_at": new Date(), "updated_at": new Date()},
			{"id": "638b1c12-612f-47f2-84e5-d3f37a3b006f", "image": "img_10", "product_id": "6c141345-3748-4252-bd26-d2880b199d5c", "created_at": new Date(), "updated_at": new Date()},
			{"id": "0550adb7-aecf-43f0-abac-131ee07878d3", "image": "img_1", "product_id": "b67b5f42-b3bc-40c9-a1dd-04c251e4ea75", "created_at": new Date(), "updated_at": new Date()},
			{"id": "8be6f9e2-fc23-4bcb-b40e-e41ad98c58c9", "image": "img_9", "product_id": "79153f7b-d119-441a-bb84-bdda388e5c4c", "created_at": new Date(), "updated_at": new Date()},
			{"id": "daed3216-4d28-4fa9-aa3c-4692e21d3476", "image": "img_8", "product_id": "4edee06a-b3bf-485b-837a-5f62782b672e", "created_at": new Date(), "updated_at": new Date()},
			{"id": "579f702d-2bc8-434b-b3ac-715b30e1ab30", "image": "img_8", "product_id": "99ac62fa-398b-4e0a-931e-cd8815ff683d", "created_at": new Date(), "updated_at": new Date()},
			{"id": "1a245c37-631f-4a2a-8c93-f66fcb66b76e", "image": "img_4", "product_id": "78e84ee6-844f-4922-b7e8-a31745b56891", "created_at": new Date(), "updated_at": new Date()},
			{"id": "778d521b-37dd-442f-9a2b-78f65748e56b", "image": "img_9", "product_id": "cb0803eb-ad1c-4e79-863a-7cf9f1aaa3a9", "created_at": new Date(), "updated_at": new Date()},
			{"id": "964aa7ac-b7c4-4b8b-b867-fc4b71445ea4", "image": "default_image.png", "product_id": "19e4090d-226b-4bf5-8a5f-6782bdbbfd16", "created_at": new Date(), "updated_at": new Date()},
			{"id": "052123bf-0bb1-4c9b-8f88-8e79d93c3e57", "image": "default_image.png", "product_id": "3dd4add7-7010-4a2a-b71f-6727cd3deb9e", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b82732e4-ffb8-4f70-8435-caa63eda29ac", "image": "img_5", "product_id": "062839ee-2bfc-47ba-9b2b-23ff684c56a9", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f0db11cf-ff6c-42bd-8e0d-36391ff24e5a", "image": "img_1", "product_id": "2f6b76ee-eca8-418e-b160-ba7b0bac7a48", "created_at": new Date(), "updated_at": new Date()},
			{"id": "7b86445a-5cf7-46b0-a9a4-c59ac584c353", "image": "img_3", "product_id": "885fa9e1-9c44-42ee-a7e1-dea0bd84fbe1", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b4920a11-848e-43b3-b03f-4cdbb9a3ebe7", "image": "img_5", "product_id": "9af3ba3e-95f7-48c9-9872-541a937f3d3b", "created_at": new Date(), "updated_at": new Date()},
			{"id": "66f90001-9fa0-4db9-bcca-37fc7d74b82c", "image": "img_5", "product_id": "6ac09ee8-075a-4b21-a692-d74217362bd1", "created_at": new Date(), "updated_at": new Date()},
			{"id": "1dcccad4-d4f9-44ca-82b4-4a905223fc68", "image": "img_6", "product_id": "39ed087c-53e3-4cf9-a6bb-91462c48fe1a", "created_at": new Date(), "updated_at": new Date()},
			{"id": "057aa8a5-ff66-497f-8c99-b323b63f866c", "image": "img_2", "product_id": "29b86255-6726-4e36-9316-97057653c6da", "created_at": new Date(), "updated_at": new Date()},
			{"id": "ec62967f-8bb0-4755-a959-72218cee26cc", "image": "img_10", "product_id": "4fdc37b3-210a-46df-a7a8-c2d2b6a10789", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f0aeb0b1-1b2d-4787-ace1-9c450cc1ab8d", "image": "img_6", "product_id": "bdc5937a-b687-466e-8ec1-97393e257ceb", "created_at": new Date(), "updated_at": new Date()},
			{"id": "713a0be6-19e1-440a-808e-8e72b88a590b", "image": "img_7", "product_id": "b33184ca-dbf7-4070-8c85-2e94ff378ac8", "created_at": new Date(), "updated_at": new Date()},
			{"id": "78fa9503-1401-422f-92dd-04138493988f", "image": "img_10", "product_id": "4210ffa2-0542-46f0-837f-872bfb1ad282", "created_at": new Date(), "updated_at": new Date()},
			{"id": "45f6c330-02d7-49e8-9bb9-88803aa31e33", "image": "img_9", "product_id": "e73c99a1-1853-4482-aaa2-f39065be80b9", "created_at": new Date(), "updated_at": new Date()},
			{"id": "c93960fd-f4e1-4831-9d2b-b2f7948c35fd", "image": "img_2", "product_id": "a3479beb-36a8-48a6-acf1-44e6445d2f21", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b93f901f-6770-4d5c-b7a9-9b108ad1e2b0", "image": "img_10", "product_id": "e5a3f8bd-10a4-4e54-af7d-07d8f4b46953", "created_at": new Date(), "updated_at": new Date()},
			{"id": "964ebbf4-a612-417f-af13-82f4e1532809", "image": "img_3", "product_id": "536a3788-be8f-4eb2-abee-61cc701491a5", "created_at": new Date(), "updated_at": new Date()},
			{"id": "3de2fe7c-2126-46f8-9edc-009fba88348e", "image": "img_4", "product_id": "1eece93c-923f-4cae-9473-4822e178919c", "created_at": new Date(), "updated_at": new Date()},
			{"id": "97239622-458c-4dae-b72c-e7c1cc123af1", "image": "img_5", "product_id": "46edb8e0-cf48-468c-b9d7-a21d4a67d128", "created_at": new Date(), "updated_at": new Date()},
			{"id": "67e95bb2-71b0-433e-a978-2ee32029cb77", "image": "img_3", "product_id": "138b6dba-7f53-4bcd-8b08-b185104cdbcc", "created_at": new Date(), "updated_at": new Date()},
			{"id": "a21dc435-f171-4670-b499-707258a61d2e", "image": "default_image.png", "product_id": "39c05ce4-9f26-4006-8440-db7bdb201772", "created_at": new Date(), "updated_at": new Date()},
			{"id": "cd85c111-f626-46aa-8460-b21a49bbb974", "image": "img_3", "product_id": "8b0ae4ab-ac92-411c-a92c-d550c42d08c6", "created_at": new Date(), "updated_at": new Date()},
			{"id": "72a0bef8-8585-4aed-bc7c-2a4867a365bc", "image": "default_image.png", "product_id": "c8c4e6a8-71a9-4cb5-aaee-68176f52d74f", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f1f8da09-221c-4e2f-9068-3fb45dbe833e", "image": "img_7", "product_id": "8ef750ea-c6d2-4548-9c59-a86ac4246083", "created_at": new Date(), "updated_at": new Date()},
			{"id": "6870f565-b05f-435a-93f0-3ece0b74dd51", "image": "img_9", "product_id": "d72d11c2-09b1-4e89-810c-1145f740ceba", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f157c436-c3dc-46cb-b5c0-a878de03c4a0", "image": "img_4", "product_id": "24ce16a7-8a99-4409-8020-d15eddb1b6c3", "created_at": new Date(), "updated_at": new Date()},
			{"id": "183d504c-8e69-4077-ac1e-7f0d659ee652", "image": "img_7", "product_id": "70d87f49-4923-4e55-b3a7-9fa525d54a3f", "created_at": new Date(), "updated_at": new Date()},
			{"id": "598cb725-1fa0-4ac6-a5ee-b29419c74d62", "image": "img_7", "product_id": "416e4feb-c5ef-4368-92c3-861fed74f28b", "created_at": new Date(), "updated_at": new Date()},
			{"id": "5b70b7f4-7cf6-4f7d-bb07-18163efa577c", "image": "img_6", "product_id": "683005f6-ab69-4ecb-bcf7-dae6003b2cba", "created_at": new Date(), "updated_at": new Date()},
			{"id": "6b9ce0c6-0839-4a6a-b6f1-a86d6962ab90", "image": "img_3", "product_id": "c998c202-df9b-4046-a958-4ffadc689791", "created_at": new Date(), "updated_at": new Date()},
			{"id": "58148564-265e-4769-8754-62a8c4a9b997", "image": "default_image.png", "product_id": "8c5f1491-dd86-4337-a4c3-30616298e231", "created_at": new Date(), "updated_at": new Date()},
			{"id": "29b29934-06f1-4fa4-8e38-4f1a40b9ae97", "image": "img_4", "product_id": "55e627e6-062a-40b9-bd52-d8cf68e8288b", "created_at": new Date(), "updated_at": new Date()},
			{"id": "603a036d-b041-4674-94bb-8589a4adf199", "image": "img_1", "product_id": "94341c7d-32a5-424c-8708-638c56b29d45", "created_at": new Date(), "updated_at": new Date()},
			{"id": "cbd7a069-b9e0-4b35-9f57-b3877a20be77", "image": "img_4", "product_id": "cec0c90e-8562-4dc0-952f-df421c778cdd", "created_at": new Date(), "updated_at": new Date()},
			{"id": "880d1115-8243-4cfb-82fe-5b21e3b98f48", "image": "img_4", "product_id": "c83d784f-fe47-48a1-ba65-59d2c8414230", "created_at": new Date(), "updated_at": new Date()},
			{"id": "644d3d7b-959f-4947-8f34-b8e83f6ba292", "image": "img_3", "product_id": "aaddac8a-1b04-412a-9f26-f1eab788fe23", "created_at": new Date(), "updated_at": new Date()},
			{"id": "3aab85aa-cd6c-4295-b150-7768017c8236", "image": "img_3", "product_id": "674e1ada-f2fd-4b1e-a9e8-90e65fa4924b", "created_at": new Date(), "updated_at": new Date()},
			{"id": "9554c13c-ad9b-40dd-b116-bc8974ca0fd6", "image": "img_6", "product_id": "c3baa573-d50d-4db8-94a5-c5a976453e53", "created_at": new Date(), "updated_at": new Date()},
			{"id": "2747600d-799d-4ccd-8a59-32acdbba5a71", "image": "img_9", "product_id": "8aec33d9-b845-4033-bbab-a33abe706066", "created_at": new Date(), "updated_at": new Date()},
			{"id": "58688f02-113e-4398-894f-18022fea5374", "image": "img_3", "product_id": "5627f649-769e-43d8-a1ff-dce38a203dcd", "created_at": new Date(), "updated_at": new Date()},
			{"id": "93121f6e-44cf-4a28-bdb6-e9bd1dd669ef", "image": "img_6", "product_id": "66eed35f-7db4-49d4-a633-5c3f302ee33c", "created_at": new Date(), "updated_at": new Date()},
			{"id": "91558f69-03a7-48ab-87df-14143f6fbef3", "image": "img_9", "product_id": "7c9ff7f1-4156-45e4-a587-1b5ddbda4df1", "created_at": new Date(), "updated_at": new Date()},
			{"id": "e540c4e7-eb34-4213-af3d-eccfbb22b5c8", "image": "img_2", "product_id": "5fa2238f-3933-4d25-b0ff-bdc49fe2db4e", "created_at": new Date(), "updated_at": new Date()},
			{"id": "cc676464-8391-4b84-9d09-9336f33057a1", "image": "img_9", "product_id": "68a6c4fd-ff24-43ba-9ef1-d49ff439b1dc", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f93a119b-d511-4e3c-b414-f7c1a1d288be", "image": "img_7", "product_id": "8e6d3f0a-53cf-466c-88dc-f03086a0f2b4", "created_at": new Date(), "updated_at": new Date()},
			{"id": "86e96472-1b1c-4d7d-908f-dd9231002036", "image": "img_6", "product_id": "08eb88ed-4edc-4c30-9b16-421bffe3e694", "created_at": new Date(), "updated_at": new Date()},
			{"id": "6470d506-111d-41ee-a24a-ce1bddd05204", "image": "img_4", "product_id": "ea7dddd7-3544-46a8-b190-cf0beadfd715", "created_at": new Date(), "updated_at": new Date()},
			{"id": "1f3f6758-2d0a-4679-ad06-cc00f8f56fd0", "image": "img_6", "product_id": "de47af7c-05a1-460f-812f-95f931b582a2", "created_at": new Date(), "updated_at": new Date()},
			{"id": "98838ccb-36b0-42df-b687-185e299609b1", "image": "img_7", "product_id": "a63d08f2-5dcd-4e84-9120-d0ac18b2e6ba", "created_at": new Date(), "updated_at": new Date()},
			{"id": "d4cacaee-4459-4d2d-b48c-f161262ebd84", "image": "img_3", "product_id": "a8108f62-6398-4c13-a327-65956b1d71bd", "created_at": new Date(), "updated_at": new Date()},
			{"id": "52214658-a241-4657-96de-6cb99d7201f1", "image": "img_10", "product_id": "f636c67e-0600-4365-a3ac-149c9de3dd32", "created_at": new Date(), "updated_at": new Date()},
			{"id": "3dcad32f-4324-4694-aa2a-05050ff06460", "image": "img_1", "product_id": "3e7ffe82-7d5c-4364-b971-187640672b3e", "created_at": new Date(), "updated_at": new Date()},
			{"id": "ac26a3f2-7251-4bd7-9f09-946ce4a103d7", "image": "img_1", "product_id": "abaa9002-f13f-4d22-853b-7079cf82dc8c", "created_at": new Date(), "updated_at": new Date()},
			{"id": "46b42984-c0d3-4207-8c43-7628f53723c5", "image": "img_7", "product_id": "beee796d-952c-4153-8bf8-3c1f0eac14a9", "created_at": new Date(), "updated_at": new Date()},
			{"id": "bfe462b9-a02e-4f4d-b2be-61308dd956f9", "image": "img_4", "product_id": "ea038835-580b-454a-8432-2dd07dc3e435", "created_at": new Date(), "updated_at": new Date()},
			{"id": "e01fbcc2-194e-4c0f-9806-548a55c894f3", "image": "img_3", "product_id": "22bb9552-6909-4197-8ea5-a10a115b870a", "created_at": new Date(), "updated_at": new Date()},
			{"id": "65511a10-37ba-453b-8cd6-b0da42d8d970", "image": "img_2", "product_id": "d2aef2b2-efc2-47bc-81d7-cc6ba0e6b089", "created_at": new Date(), "updated_at": new Date()},
			{"id": "fa08c81d-648e-4ec6-b707-bf6acdd1bdbf", "image": "img_1", "product_id": "1a09f907-8947-4661-9b83-305132789e79", "created_at": new Date(), "updated_at": new Date()},
			
			
			
		]

		return queryInterface.bulkInsert('product_image', productImageData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('product_image', null, {})
	}
};
