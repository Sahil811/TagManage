/**
 * This module acts as a common handler for model interaction since all the controllers
 * follows almost the same design pattern, making a commong handler function will help to
 * eventually reduce the code base and redundant code.
 * @author Sahil Siddiqui
 * @since 29 september 2021
 *
 * @param {*} req
 * @param {*} res
 * @param {Promise} modelPromise the promise object that will handle the incoming route data
 *
 * @todo Handle authentication middleware injections?
*/
export default (req, res, modelPromise) => {
	const { body } = req;
	modelPromise(body, res).then(
		success => res.status(200).send(success),
		error => res.status(200).send(error),
	);
};
