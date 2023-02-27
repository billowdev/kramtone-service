import { unlink } from "fs"

export const removeExistImage = (imageName: string, imageFolder: string) => {
	const imagePath = `./public/uploaded/images/${imageFolder}`;
	unlink(`${imagePath}/${imageName}`,
		(error: NodeJS.ErrnoException) => {
			if (error) return false
		})
	return true
}
