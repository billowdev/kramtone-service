import { Request } from 'express';
// import { extname } from 'path';

export const imageFileFilter = (
	req: Request,
	file: Express.Multer.File,
	callback
) => {
	if (!file.originalname.match(/\.(jpg|jpeg|png|PNG|gif)$/)) {
		return callback(
			new Error('Only image files are allowed!'),
			false
		);
	}
	callback(null, true);
};

