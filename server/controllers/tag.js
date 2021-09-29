/**
 * @description
 * This is the controller for the tag
 * @author Sahil Siddiqui
 * @since 29 september, 2021
 */

 import { TagModel } from '../model';
 import { ModelResolver } from './resolvers';
 
 export default {
    add: (req, res) => ModelResolver(req, res, TagModel.Add),
 };
 