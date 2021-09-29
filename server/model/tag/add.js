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
	id,
	businessRef,
	name,
	note = "",
}) => new Promise(async (resolve, reject) => {
	try {
		if (!name || !businessRef) {
			return reject(ResponseUtility.GENERIC_ERR({ message: `Missing proprty ${!businessRef ? 'businessRef' : 'name'}.` }));
		}

		const music = new MusicModel({
			userRef: id,
			businessRef,
            name,
            note
		});
		await music.save();

		return resolve(ResponseUtility.SUCCESS({ data: music }));
	} catch (err) {
		return reject(ResponseUtility.GENERIC_ERR({ message: err.message, error: err }));
	}
});
