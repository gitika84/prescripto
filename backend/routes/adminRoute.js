import express from 'express'
import { addDoctor , loginAdmin , allDoctors , appointmentsAdmin , appointmentCancel , adminDashboard} from '../controllers/adminControllers.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailablity } from '../controllers/doctorControllers.js'


const adminRouter = express.Router()


adminRouter.post('/login' ,loginAdmin)
adminRouter.post('/add-doctor' , authAdmin , upload.single('image') , addDoctor)
adminRouter.post('/all-doctors' , authAdmin , allDoctors)
adminRouter.post('/change-availability' , authAdmin , changeAvailablity)
adminRouter.get('/appointments' , authAdmin , appointmentsAdmin)
adminRouter.post('/cancel-appointment' , authAdmin , appointmentCancel)
adminRouter.get('/dashboard' , authAdmin , adminDashboard)


export default adminRouter