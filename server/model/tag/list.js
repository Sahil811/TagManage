/* eslint-disable import/named */
import TagModel from '../../schemas/tag';
import { PAGINATION_LIMIT } from '../../constants';

/**
 * @description tag model function to handle the listing of all tag for user.
 * @author Sahil Siddiqui
 * @since 3 octomber 2021
 */

export default ({
	id,
    userRef,
	page = 1,
	limit = PAGINATION_LIMIT,
}, res) => new Promise(async (resolve, reject) => {
	try {
		const list = await TagModel
			.find({ userRef: userRef || id, deleted: false }, { __v: 0 })
			.sort({ name: 1 }).skip((page - 1) * limit).limit(limit);
		const total = await TagModel.countDocuments({ deleted: false, userRef: userRef || id });
		return resolve(res.status(200).json({
			data: {
				list: list,
				total,
				page,
				limit,
				size: list.length,
				hasMore: list.length <= limit,
			},
		}));
	} catch (err) {
		return reject(res.status(404).json({ message: err.message, error: err }));
	}
});
