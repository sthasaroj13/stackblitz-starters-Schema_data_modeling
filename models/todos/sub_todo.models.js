import mongoose from "mongoose"

 const  subTOdoSchema = new mongoose.Schema({

  content :{
    type :String,
    required : true,

  },
  complete :{
  type : Boolean,
  default : false,

  },
  createBy :{

  type : mongoose.Schema.Types.ObjectId,
  ref: "User"
  }
 },{timestamps});

 export const SubTodo = mongoose.model('SubTodo', subTOdoSchema)