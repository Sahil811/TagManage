/**
 * @description
 * This is the controller for the tag
 * @author Sahil Siddiqui
 * @since 29 september, 2021
 */

 import TagModelAdd from '../model/tag/add';
 import TagModelList from '../model/tag/list';
 import TagModelDelete from '../model/tag/delete';
 import ModelResolver from './resolvers/model';
 
 export default {
   add: (req, res) => ModelResolver(req, res, TagModelAdd),
   list: (req, res) => ModelResolver(req, res, TagModelList),
   delete: (req, res) => ModelResolver(req, res, TagModelDelete),
 };
 