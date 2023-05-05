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



			{"id": "2c7e619e-315e-43d3-9590-751727ddecc1", "image": "img_10.png", "product_id": "7d53cc2d-d455-4312-a0f2-7d5241f47eaa", "created_at": new Date(), "updated_at": new Date()},
			{"id": "1426f85b-73d4-4b22-810d-220731c15112", "image": "img_5.png", "product_id": "9e99b746-680e-47bf-90a3-d631bf6add00", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f0f9ce69-22f7-4b21-a5ff-8a22b0a02019", "image": "img_9.png", "product_id": "b3ed59f6-5a0e-41dc-b961-367df0ce44ce", "created_at": new Date(), "updated_at": new Date()},
			{"id": "63b1baf5-3ec3-4939-8121-b0f8e5ce96d6", "image": "img_4.png", "product_id": "8a78c724-7ad2-43f2-8729-d6933469f5c4", "created_at": new Date(), "updated_at": new Date()},
			{"id": "58a0d6d3-7b59-481c-a499-56ff60e0142c", "image": "img_5.png", "product_id": "901ccea3-ec42-4561-8750-4d93b8815ebd", "created_at": new Date(), "updated_at": new Date()},
			{"id": "5449cf9e-3c9f-44ba-98da-456c49031fcf", "image": "img_9.png", "product_id": "f25955c7-0223-4c9f-996f-da233ae03827", "created_at": new Date(), "updated_at": new Date()},
			{"id": "12016a65-bc28-4232-891f-b39afbc61eb4", "image": "img_10.png", "product_id": "7c70ef93-27c1-46f0-97b7-9adeed31a75f", "created_at": new Date(), "updated_at": new Date()},
			{"id": "9da73c7b-d8cd-45f5-b308-a3c16096e7a8", "image": "img_6.png", "product_id": "8a5acf80-36fe-4eb5-a4d6-adbb3b6c43a5", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b4ccc2a4-5636-4100-8a24-6a8483650586", "image": "img_8.png", "product_id": "a588cff8-d452-4237-913c-c2aff0dd122c", "created_at": new Date(), "updated_at": new Date()},
			{"id": "6476b8e1-60f1-416f-92aa-343c15544920", "image": "img_8.png", "product_id": "ba3a4b26-cbf0-47b9-bfe6-2e7593f9e16d", "created_at": new Date(), "updated_at": new Date()},
			{"id": "8dd9f735-4a7c-4d4e-9af4-a8227d42f0f8", "image": "img_2.png", "product_id": "4d6e61e5-4ea5-40f1-966f-d3900a85c423", "created_at": new Date(), "updated_at": new Date()},
			{"id": "829724d5-67a2-49e5-b21c-eb8a4f773f37", "image": "img_2.png", "product_id": "446639f5-f1b1-4a50-9fef-3c23a4b338ff", "created_at": new Date(), "updated_at": new Date()},
			{"id": "bd2a5e1c-cba8-4811-8857-17c0c41fc341", "image": "default_image.png", "product_id": "189f94d2-172c-4e5c-9a44-9b7198b6fddd", "created_at": new Date(), "updated_at": new Date()},
			{"id": "c2d48c90-0fa3-4cc6-81d1-56d20dffc1f2", "image": "img_5.png", "product_id": "6fd1d3c7-94aa-4902-ad58-8f5a6c8fd8fc", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b93bf629-dbb5-4ea3-99ad-3404dd2e8819", "image": "img_8.png", "product_id": "4d5c6abe-2698-4ca3-bb8b-668e521a00b4", "created_at": new Date(), "updated_at": new Date()},
			{"id": "a8c07bea-1fee-461c-bb8f-1a2f78c1b040", "image": "img_4.png", "product_id": "b07b8927-8811-4f31-ac2f-c6c55782dac7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "d7cd4d2e-b989-4063-aa30-97c6adcdd73c", "image": "img_2.png", "product_id": "68718d63-3eaf-4f81-886f-be07d8019ed9", "created_at": new Date(), "updated_at": new Date()},
			{"id": "552d8417-549e-4b81-9411-3784347e419c", "image": "img_7.png", "product_id": "4ea17fa6-13cd-4a9e-8e12-f63ebfa8be96", "created_at": new Date(), "updated_at": new Date()},
			{"id": "2f538481-e611-486a-afeb-3e04988211b8", "image": "img_8.png", "product_id": "a3167fca-7e84-4d46-a978-a9953949890a", "created_at": new Date(), "updated_at": new Date()},
			{"id": "0139becc-69a5-4847-b258-d360f3778a0e", "image": "img_6.png", "product_id": "60cadd73-61e7-4a21-81c5-ada4188911b7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "5208b6ed-4372-4a6f-a4b7-72d6733a9f30", "image": "img_4.png", "product_id": "432b70e8-d905-4188-84b6-c74f21f02ff3", "created_at": new Date(), "updated_at": new Date()},
			{"id": "9279e0b0-7a63-4b53-a94d-7e4ce144f021", "image": "img_4.png", "product_id": "9829f79a-4598-4d32-8cf2-4afa0eab85ef", "created_at": new Date(), "updated_at": new Date()},
			{"id": "50aad6c0-d50f-46ed-b52b-5955b141dd1f", "image": "img_10.png", "product_id": "c0198b6e-f1db-4da2-a7ab-702e45986437", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b6a74392-147e-4b32-b0e9-99873985e0e8", "image": "img_1.png", "product_id": "edc48f8a-4b28-4f9e-859d-11c08c5d44d7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "bb6fa030-044a-4b9a-b466-2d344a71e463", "image": "img_7.png", "product_id": "dd2ee6a0-aa3f-4831-8ad3-77d1f80861c3", "created_at": new Date(), "updated_at": new Date()},
			{"id": "021c947e-623c-4849-9a52-11c8639d557b", "image": "img_10.png", "product_id": "d5416855-e6a4-4801-b0d9-dc1671d50b57", "created_at": new Date(), "updated_at": new Date()},
			{"id": "0806771a-e4e1-4720-ad01-c0b19c53dc2f", "image": "img_7.png", "product_id": "416a28b9-4171-4f5d-a3ea-ebd7a3a14aa4", "created_at": new Date(), "updated_at": new Date()},
			{"id": "4053b85b-28dc-4283-8d8b-6d076d00e9af", "image": "img_5.png", "product_id": "745bf905-b14c-47d6-9a58-78405993d46c", "created_at": new Date(), "updated_at": new Date()},
			{"id": "a2731b9d-6ea2-4ba0-a501-87b22e9a5ade", "image": "img_4.png", "product_id": "60759418-7b90-41d6-a9c5-52d07a29a7a2", "created_at": new Date(), "updated_at": new Date()},
			{"id": "1df1dd2b-c866-485a-b923-f82d501cee16", "image": "img_7.png", "product_id": "4bb6f4f7-11af-493a-99f0-9af80bad76ef", "created_at": new Date(), "updated_at": new Date()},
			{"id": "c6633ee0-4313-41dd-81c3-737dd2f30e21", "image": "img_1.png", "product_id": "d7006a1c-8085-4f39-b824-bea135a8b739", "created_at": new Date(), "updated_at": new Date()},
			{"id": "5ac169c7-6580-47ab-b387-7d39427004d7", "image": "img_6.png", "product_id": "b9a04ac6-0177-4b2c-8626-25509542059e", "created_at": new Date(), "updated_at": new Date()},
			{"id": "473ef37a-7431-4888-aca9-f8fb9a52fcd8", "image": "img_2.png", "product_id": "c4a0c81e-3d98-4e06-94a7-c49e20355c61", "created_at": new Date(), "updated_at": new Date()},
			{"id": "dae07294-9cb8-46e7-862c-bfa4afa144d8", "image": "img_10.png", "product_id": "067195e0-f700-431c-b9cf-a1a477b4b2f8", "created_at": new Date(), "updated_at": new Date()},
			{"id": "7dd43e51-e556-4638-8c99-da00c485c229", "image": "img_3.png", "product_id": "ea76ae24-c580-42f2-b892-512c163893e2", "created_at": new Date(), "updated_at": new Date()},
			{"id": "29efc202-7f58-492f-b3cc-e38363da74bf", "image": "img_6.png", "product_id": "0efe2693-c6bb-48bd-8c83-8a86926e3aac", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f5f0ba3c-4223-4b84-9335-0b4160e2d460", "image": "img_2.png", "product_id": "f86e7b7f-5f90-4e89-ba5b-a0babc85ed9e", "created_at": new Date(), "updated_at": new Date()},
			{"id": "98429ff5-e824-4704-8ce5-09cfca09d504", "image": "img_2.png", "product_id": "70149080-c890-49bb-97a0-3890106a4ab5", "created_at": new Date(), "updated_at": new Date()},
			{"id": "ab051f9b-9625-42b0-b26a-83fabf4efd56", "image": "img_8.png", "product_id": "d83e78b3-0773-49fd-b788-3b0f3a4638d5", "created_at": new Date(), "updated_at": new Date()},
			{"id": "e1fa4968-02c6-4aba-8cbb-e6feeb6d67db", "image": "img_10.png", "product_id": "8e823d62-361b-4727-b46e-8086236e2fef", "created_at": new Date(), "updated_at": new Date()},
			{"id": "78d14c76-a57b-4ca5-8d09-d684e221dd4c", "image": "img_5.png", "product_id": "611480b1-7839-4c11-92f6-2e2ddd5c2cee", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b1497ac4-f253-4be1-b348-8cc477c6eabf", "image": "img_4.png", "product_id": "1ed9d251-302f-45e3-b224-00808fc9661d", "created_at": new Date(), "updated_at": new Date()},
			{"id": "655d4620-2e29-4c45-b790-289cabcb3821", "image": "default_image.png", "product_id": "29c49eca-4f2d-4cef-9891-ca1d349a1a3a", "created_at": new Date(), "updated_at": new Date()},
			{"id": "a3b1b29a-7e3d-4132-9084-84c726add06e", "image": "img_8.png", "product_id": "569899d7-4647-4521-ab23-0b17e50ec96b", "created_at": new Date(), "updated_at": new Date()},
			{"id": "69163be2-1c95-4445-bf83-cfa628d1873b", "image": "img_3.png", "product_id": "b95903ad-ae05-4404-be07-264bd4e257ec", "created_at": new Date(), "updated_at": new Date()},
			{"id": "df6243b4-cff1-409b-b91f-d6245686340d", "image": "img_5.png", "product_id": "38e7a4a8-623c-4067-b997-8d0aedb88695", "created_at": new Date(), "updated_at": new Date()},
			{"id": "2d09c2f8-511b-4de9-ac80-c5de6e089271", "image": "img_2.png", "product_id": "678931dc-dfbc-473c-95e8-e8ac50cef544", "created_at": new Date(), "updated_at": new Date()},
			{"id": "d0e96d1f-d75d-46d5-bd28-0b55dc901576", "image": "img_7.png", "product_id": "9ba7a3a1-f54f-41c3-990a-e01f5436567a", "created_at": new Date(), "updated_at": new Date()},
			{"id": "5fcaa911-9df3-470a-8f71-6f3764ff5e70", "image": "img_7.png", "product_id": "884dc04b-9892-46d5-923c-bfe1de26459a", "created_at": new Date(), "updated_at": new Date()},
			{"id": "0221902f-02af-4145-b4ba-a0716ec0d3d1", "image": "img_9.png", "product_id": "d454005d-d06a-4dca-bd8c-5bb5d105031d", "created_at": new Date(), "updated_at": new Date()},
			{"id": "7c04880f-7d41-4149-95de-995dfd271c6e", "image": "img_7.png", "product_id": "4011a4a5-43a8-49d6-b807-eb12ff50a5d7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "a9f7e40f-ac92-4ddb-b90c-eca284224ba3", "image": "default_image.png", "product_id": "b3eff141-ca73-4a15-91da-1c77769909bb", "created_at": new Date(), "updated_at": new Date()},
			{"id": "41cf9619-efda-4925-828c-080a4ab62f9a", "image": "img_6.png", "product_id": "a1a77b31-8e5b-49f9-a4a4-e4d3a8334ead", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f0cb2f33-cd2f-45ae-b4ae-327f1c83d6a2", "image": "img_6.png", "product_id": "1d46d22d-e038-4911-b9f8-3148ef3aea36", "created_at": new Date(), "updated_at": new Date()},
			{"id": "98a95ccd-3afe-4540-80dd-d5c025a77780", "image": "img_3.png", "product_id": "b68970f8-bdbd-4ec9-b9ef-d1297b43b349", "created_at": new Date(), "updated_at": new Date()},
			{"id": "4f38d7b6-6661-4342-abb8-c2e33dea904e", "image": "img_3.png", "product_id": "02e24cf1-fc57-493d-848d-bfae16b2bf81", "created_at": new Date(), "updated_at": new Date()},
			{"id": "55cff9ba-4363-45a2-894b-b4ebc804187a", "image": "default_image.png", "product_id": "6cd55470-8057-4cc1-b740-d0861fa0b683", "created_at": new Date(), "updated_at": new Date()},
			{"id": "11014664-202d-4ebf-8d8c-b1ce56a5f9b2", "image": "img_8.png", "product_id": "d6b94bf7-dffe-42b8-9620-9599d14cd8c7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "787e4846-6194-4cc3-bc5d-46247c6867ba", "image": "img_6.png", "product_id": "9e68edfb-8d08-4e01-b853-c05c2aa85c30", "created_at": new Date(), "updated_at": new Date()},
			{"id": "cbc61b96-f0bf-4dc9-9710-8ea1c6d51d72", "image": "img_6.png", "product_id": "237bc2af-7f1f-49be-b406-f15a717bc802", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b6fab163-77a3-4385-ad5a-98b6fa077b3b", "image": "img_4.png", "product_id": "e001b620-9dd3-482d-ad06-542cc0603281", "created_at": new Date(), "updated_at": new Date()},
			{"id": "c0392286-928c-4a26-aaf5-a9b96ccd0547", "image": "img_3.png", "product_id": "898a32cd-6bcc-40fb-be04-9dd5905c5ade", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b42f4b75-8ba3-4db8-9910-f43b36745d8b", "image": "img_2.png", "product_id": "4c3f9bb6-0fee-48c7-9201-2fa74e4ad4d2", "created_at": new Date(), "updated_at": new Date()},
			{"id": "564f87ed-fc2d-400d-a753-5f8d69e49340", "image": "img_10.png", "product_id": "97849218-550d-4e94-92e4-7754bc063439", "created_at": new Date(), "updated_at": new Date()},
			{"id": "35917303-7d58-44a0-8f6a-a06d2bb24946", "image": "default_image.png", "product_id": "8d4d37d1-fd03-4b98-bf18-eaf16164dd79", "created_at": new Date(), "updated_at": new Date()},
			{"id": "389a2b42-9c4c-482f-83a5-226e46f9070e", "image": "img_7.png", "product_id": "c1bbb5e9-3916-487a-92fd-f09a3688e7ae", "created_at": new Date(), "updated_at": new Date()},
			{"id": "1f1bfcfa-cc6f-4929-9a67-e7e9dae2d25e", "image": "default_image.png", "product_id": "f34a3082-5fef-465d-9e62-a4145c4842a4", "created_at": new Date(), "updated_at": new Date()},
			{"id": "cb16c95d-ac2e-45bd-a161-a3a8d8508c31", "image": "img_10.png", "product_id": "084c1bcb-8dd3-466d-a03f-0874a9fc71e7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "4ef9b6ef-9ed8-450e-8a8b-d0d8151f90bd", "image": "img_6.png", "product_id": "6cc44cc9-f654-430f-a555-baea668a6f27", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f4bab9cd-33ed-4d65-a9a4-c7d64d40a2ac", "image": "default_image.png", "product_id": "822021dc-f443-4831-88ad-b1d4496d9ed8", "created_at": new Date(), "updated_at": new Date()},
			{"id": "296f2ed3-dffc-426a-bc56-4160f51a45ee", "image": "img_9.png", "product_id": "b9bc0191-87ff-497d-803c-55b4db0b181f", "created_at": new Date(), "updated_at": new Date()},
			{"id": "6e42a5b1-f586-4dd6-a3c9-6077d8119302", "image": "img_2.png", "product_id": "afa7d16d-3006-491e-bfa8-2617395002c9", "created_at": new Date(), "updated_at": new Date()},
			{"id": "302fcddb-5249-4c9f-bd0b-52c41f9426bf", "image": "img_10.png", "product_id": "14ee044d-7e1e-4d64-89a1-60c71b361d9c", "created_at": new Date(), "updated_at": new Date()},
			{"id": "ff5d2615-00d0-42e5-a276-df9caec153ef", "image": "img_1.png", "product_id": "c23888b9-fa5d-4880-91f9-17a68da0544d", "created_at": new Date(), "updated_at": new Date()},
			{"id": "db85d828-582e-485f-8f06-085772840887", "image": "img_2.png", "product_id": "68427ba4-88a3-41b1-b1aa-cfb2a7e84920", "created_at": new Date(), "updated_at": new Date()},
			{"id": "6dd00e6d-e588-40ba-b000-26f32c8388ba", "image": "img_5.png", "product_id": "e35d857a-8c6d-4ab1-9841-86f0e275f7e6", "created_at": new Date(), "updated_at": new Date()},
			{"id": "0fdad957-01db-417f-825f-dd3fd5f1363b", "image": "img_9.png", "product_id": "00ab19d7-ea0f-482e-859f-65e52e41ffc3", "created_at": new Date(), "updated_at": new Date()},
			{"id": "b4c4a313-f86b-487f-b872-bd22e15d1e11", "image": "img_1.png", "product_id": "8564ad48-1bf0-4e40-b740-7034334c762b", "created_at": new Date(), "updated_at": new Date()},
			{"id": "acc5e8a9-1429-4b37-999b-dc3ba2f82b71", "image": "img_2.png", "product_id": "f4de4600-8ba2-4eb4-bb5c-f63fbcde191b", "created_at": new Date(), "updated_at": new Date()},
			{"id": "e0f63519-d4a3-47dd-87af-a82ac341ff63", "image": "img_7.png", "product_id": "1adbf7c1-44b7-44a2-bf0b-e6a6a8c52202", "created_at": new Date(), "updated_at": new Date()},
			{"id": "a47886e9-6497-41ae-b7dd-671fb2fc7235", "image": "img_3.png", "product_id": "20244c3e-57dd-445f-9ff3-548b2ebc297e", "created_at": new Date(), "updated_at": new Date()},
			{"id": "396cac5b-dc86-4189-96e9-190bc843e058", "image": "img_6.png", "product_id": "3df067f8-8a0b-4cc6-b618-9586d44a97f4", "created_at": new Date(), "updated_at": new Date()},
			{"id": "7e98df25-b506-4866-9327-8910ed576b57", "image": "img_3.png", "product_id": "a036869c-3fd2-4522-9567-ccbc84285ab7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "7df6164a-7a72-42a4-8c25-e034cecce2e5", "image": "default_image.png", "product_id": "bb431ad1-8369-4279-81bb-e65de138efbb", "created_at": new Date(), "updated_at": new Date()},
			{"id": "78809b7f-4bd2-4225-98a4-3558f6450f6c", "image": "img_3.png", "product_id": "e64843aa-d095-4e6d-b33a-9ae4ad71661a", "created_at": new Date(), "updated_at": new Date()},
			{"id": "e14daaa4-e490-4d09-9e0c-c3bd730faba4", "image": "img_8.png", "product_id": "f5423a75-bb57-4490-975c-12d8b95ba108", "created_at": new Date(), "updated_at": new Date()},
			{"id": "63236fe6-8a3c-4228-9b73-903a0c4d671f", "image": "img_3.png", "product_id": "6e607e12-a898-4e13-9be6-3e1b1df73c09", "created_at": new Date(), "updated_at": new Date()},
			{"id": "9b270b4f-1ff9-4a6b-93d3-1d6cd294fd49", "image": "img_10.png", "product_id": "dc32096b-0f3f-47dc-8cba-3fc60d49d5f7", "created_at": new Date(), "updated_at": new Date()},
			{"id": "63114ddb-b51d-4948-8681-7b6d6a041f08", "image": "img_7.png", "product_id": "434fe7f1-0b90-4aaf-8604-8ba66999d179", "created_at": new Date(), "updated_at": new Date()},
			{"id": "9e712552-4786-4b76-88ad-c03f204118a9", "image": "img_3.png", "product_id": "a7ac04fb-861d-41cd-94f9-0b635fa20bfc", "created_at": new Date(), "updated_at": new Date()},
			{"id": "2864ccc1-1498-46a8-915a-aec743c3e671", "image": "img_9.png", "product_id": "d272c67f-948f-456b-9501-6944f6101458", "created_at": new Date(), "updated_at": new Date()},
			{"id": "49d18c04-bf0f-45c7-ad8f-40328b25a413", "image": "img_10.png", "product_id": "ad2c3e65-8a27-4758-ba6a-a7a4b8c4fc83", "created_at": new Date(), "updated_at": new Date()},
			{"id": "1d3f6abf-776b-4fa8-a609-c11f4e6a20fa", "image": "img_10.png", "product_id": "030aae69-f618-4a78-9f21-9bd89a2e63b8", "created_at": new Date(), "updated_at": new Date()},
			{"id": "f946c102-6251-4eaa-a4b3-5b1a5e366132", "image": "img_10.png", "product_id": "f1079e42-7ea8-4037-9181-0fddaa353410", "created_at": new Date(), "updated_at": new Date()},
			{"id": "548b4bb1-039b-4db8-ae9f-d3dc73b7dc9b", "image": "img_2.png", "product_id": "41cbb296-1b40-4319-853d-52a0fd408b4f", "created_at": new Date(), "updated_at": new Date()},
			{"id": "926e35c1-522c-4472-a798-ee4b362a05e5", "image": "img_6.png", "product_id": "671f99ca-591f-47eb-9b03-72866b1aa756", "created_at": new Date(), "updated_at": new Date()},
			{"id": "ac515585-df6b-479d-9018-0105db307338", "image": "default_image.png", "product_id": "5317b43b-2535-497d-a694-faac0175a39f", "created_at": new Date(), "updated_at": new Date()},
			{"id": "aa888026-100d-480c-9ede-b7d36f9dafd5", "image": "img_10.png", "product_id": "c6a3932a-6777-4bec-bff0-8fd26e9ad2e2", "created_at": new Date(), "updated_at": new Date()},
			{"id": "1fbb3cd6-87bc-466e-af3a-e2d3c0017ecb", "image": "img_10.png", "product_id": "0a41f531-cac2-4b33-9617-d7ef06b247eb", "created_at": new Date(), "updated_at": new Date()},
			{"id": "804a3952-73ca-48fa-84eb-4d25de84e55d", "image": "img_1.png", "product_id": "260ff20a-f38f-46c4-85ce-785d9a4e1ab0", "created_at": new Date(), "updated_at": new Date()},
			
			
		]

		return queryInterface.bulkInsert('product_image', productImageData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('product_image', null, {})
	}
};
