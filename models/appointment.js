const mongoose=require('mongoose')

const appointmentSchema= new mongoose.Schema({
    patientname:{type:String,required:true},
    doctorname:{type:String,required:true},
    appointmentTime:{type:Date,required:true},
    reason:{type:String,required:true},
    
})

const Appointment=mongoose.model('Apointment',appointmentSchema)

module.exports=Appointment