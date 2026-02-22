import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';


export interface IItem extends Document {
  item: string;
}


const ItemSchema: Schema = new Schema({
  item: {
    type: String,
    required: true,
  },
});


ItemSchema.pre<IItem>('save', async function () {
  
  // Skip if unmodified
  if (!this.isModified('item')) {
    return;
  }
  
  // Apply hash
  this.item = await bcrypt.hash(this.item, 8);

});

export default mongoose.model<IItem>('Item', ItemSchema);