import Attendance from '../models/attendanceModel.js';

const takeAttendanceForSelf = async (req, res) => {
  try {
    
    const currentDate = new Date().toISOString().split('T')[0];

    console.log(currentDate)
    const userId = req.userId;

    console.log(userId)

    const existingAttendance = await Attendance.findOne({
      staff: userId,
      date: currentDate,
    });

    if(req.body.status === 'Absent' && !req.body.reasonForAbsence){
      return res.status(400).json({message: "Please write the reason for absent"})
    }

    if(req.body.status === 'Late' && !req.body.reasonForAbsence){
      return res.status(400).json({message: "Please write the reason for late"})
    }

    if (existingAttendance) {
      existingAttendance.status = req.body.status || 'Present'; 
      existingAttendance.notes = req.body.notes || ''; 
      existingAttendance.reasonForAbsence = req.body.reasonForAbsence || '';

      await existingAttendance.save();
    } else {
      
      const newAttendance = new Attendance({
        staff: userId,
        date: currentDate,
        status: req.body.status || 'Absent',
        notes: req.body.notes || '',
        reasonForAbsence: req.body.reasonForAbsence || '',
      });

      await newAttendance.save();
    }

    res.status(200).json({ message: 'Attendance taken successfully' });
  } catch (error) {
    console.error('Error taking attendance for staff member:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAttendanceData = async (req, res) => {
  try {
      const attendanceData = await Attendance.find().populate('staff').lean();
      res.status(200).json(attendanceData);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

export { takeAttendanceForSelf, getAttendanceData };
