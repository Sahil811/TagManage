import {
	TagControllers,
} from '../controllers';

const prefix = '/api/tag/';
/**
 * @description
 * This is the route handler for the tag.
 * @author Sashil Siddiqui
 * @since 29 september, 2021
 */

export default (app) => {
	app.post(`${prefix}add`, TagControllers.add);
};
