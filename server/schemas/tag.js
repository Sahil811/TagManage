/**
 * This schema represents the message schema for promo used
 * @author Sahil Siddiqui
 * @since 29 september, 2021
 */

 import { Schema } from 'mongoose';
 import database from '../db';
 
 const Tag = new Schema({
     bookingRef: { type: Schema.Types.ObjectId },
     promoRef: { type: Schema.Types.ObjectId, required: true },
     userRef: { type: Schema.Types.ObjectId, required: true },
     deleted: { type: Boolean, default: false },
     deletedOn: Date,
 }, {
     timestamps: true,
 });
 
 export default database.model('Taq', Tag);
 