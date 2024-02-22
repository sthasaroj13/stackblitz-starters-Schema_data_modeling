import mongoose from 'mongoose'
const hospitalHourSchema = new mongoose.Schema({
  type: mongoose.Schema.Types.ObjectId,
  ref:'Hospital',
})
 const doctorSchema = new mongoose.Schema({
  name:{
    type:String,
    required :true,
  },
  salary:{
    type: String,
    required:true,

  },
  qualification:{
    type: String,
    required:true,
  },
  expirenceInYears:{
    type: Number,
    required:true,
    default :0
  },
  worksInHospitals:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Hospital'
    },
    {
      type:[hospitalHourSchema]
    }
   
  ],

 },{timestamps:true})


 export  const Doctor = mongoose.model('Doctor',doctorSchema)