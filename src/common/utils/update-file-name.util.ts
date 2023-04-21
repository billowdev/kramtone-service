import { BadRequestException } from '@nestjs/common';
import { Request } from 'express';
import { extname } from 'path';
import { randomBytes } from 'crypto';

export const updateFileName = (
	req: Request,
	file: Express.Multer.File,
	callback
) => {
	const user: any = req.user
	const userId = user?.uid
	const name = file.originalname.split('.')[0];
	const fileExtName = extname(file.originalname);
	callback(null, `${userId}-${name}${fileExtName}`);
};

export const updateGroupFileName = (
	req: Request,
	file: Express.Multer.File,
	callback
) => {
	const user: any = req.user
	const gid = user?.gid
	const field = file.fieldname
	let prefix
	if(field==='logoFile'){
		prefix = 'logo'
	}else{
		prefix='banner'
	}
	const name = file.originalname.split('.')[0];
	const fileExtName = extname(file.originalname);
	callback(null, `${prefix}-${gid}-${name}${fileExtName}`);

};
export const updateCategoryFileName = (
	req: Request,
	file: Express.Multer.File,
	callback
  ) => {
	const user: any = req.user;
	const gid = user?.gid;
	const name = file.originalname.split('.')[0];
	const fileExtName = extname(file.originalname);
	const randomStr = randomBytes(5).toString('hex'); // Generates a random string of 10 characters
  
	callback(null, `${gid}-${name}-${randomStr}-${fileExtName}`);
  };

export const updateProductFileName = (
	req: Request,
	file: Express.Multer.File,
	callback
) => {
	const productId = req.params.id
	const name = file.originalname.split('.')[0];
	const fileExtName = extname(file.originalname);
	const randomName = Array(4)
		.fill(null)
		.map(() => Math.round(Math.random() * 16).toString(16))
		.join('');
	callback(null, `pid-${productId}-${name}-${randomName}${fileExtName}`);
};