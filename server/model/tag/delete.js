/* eslint-disable import/named */
import TagModel from '../../schemas/tag';
/**
 * @description tag model function to handle the deletion of a tag.
 * @author Sahil Siddiqui
 * @since 03 octomber 2021
 */

export default ({
	id,
	tagRef,
}) => new Promise(async (resolve, reject) => {
	try {
		if (!tagRef) {
			return reject(res.status(404).json({ message: 'Missing Property tagRef!' }));
		}

        const TagCreator = await TagModel.findOne({ _id: tagRef, userRef: id, deleted: false });

        if( id !== TagCreator.userRef ) {
			return reject(res.status(403).json({ message: 'You do not have access to delete this tag!' }));
        }
		
		const tagDeleted = await TagModel
			.findOneAndUpdate({ _id: tagRef, userRef: id, deleted: false }, { deleted: true });
		if (!tagDeleted) {
			return reject(res.status(404).json({ message: 'No such tag found!' }));
		}

		return resolve(res.status(200).json({ message: 'Tag has been deleted successfully!' }));
	} catch (err) {
		return reject(res.status(404).json({ message: err.message, error: err }));
	}
});
