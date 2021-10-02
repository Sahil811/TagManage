/* eslint-disable import/named */
import {
	TagModel,
} from '../../schemas';

/**
 * @description service model function to handle the creation of a Tag.
 * @param {String} id the unique _id of the user.
 * @param {String} name the name of music.
 * @param {Binary} note the note for club owner.
 * @param {Number} isPlaying playing status of song.
 * @author Sahil Siddiqui
 * @since 29 september 2021
 */

export default ({
	userRef,
	name,
}) => new Promise(async (resolve, reject) => {
	try {
		if (!userRef || !name) {
			return reject(ResponseUtility.GENERIC_ERR({ message: `Missing proprty ${!userRef? '	userRef' : 'name'}.` }));
		}

		const tag = new TagModel({
			userRef: id,
            name,
		});
		await tag.save();

		return res.sendStatus(200).json({ data: tag });
	} catch (err) {
		return res.sendStatus(404).json({ message: err.message, error: err });
	}
});
