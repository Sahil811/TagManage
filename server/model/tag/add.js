/* eslint-disable import/named */
import TagModel from '../../schemas/tag';

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
	id,
	name,
}, res) => new Promise(async (resolve, reject) => {
	try {
		if (!id || !name) {
			return reject(res.status(404).json({ message: `Missing proprty ${!id ? 'userRef' : 'name'}.` }));
		}

		const tag = new TagModel({
			userRef: id,
            name,
		});
		await tag.save();

		return resolve(res.status(200).json({ data: tag }));
	} catch (err) {
		return reject(res.status(404).json({ message: err.message, error: err }));
	}
});
