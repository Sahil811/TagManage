/**
 * This schema represents the message schema for promo used
 * @author Sahil Siddiqui
 * @since 29 september, 2021
 */

 import { Schema } from 'mongoose';
 import database from '../db';
 
 const Tag = new Schema({
     userRef: { type: Schema.Types.ObjectId, required: true },
     name: { type: String },
     deleted: { type: Boolean, default: false },
     deletedOn: Date,
 }, {
     timestamps: true,
 });
 
 export default database.model('Taq', Tag);
 