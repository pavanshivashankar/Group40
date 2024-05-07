import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
// animal specialist
import AnimalDashboard from "./pages/animalDatabase/AnimalDashboard";
import Add_animal from "./pages/animalDatabase/Add_animal";
import Message from "./pages/animalDatabase/Message";
import Edit_Animal from "./pages/animalDatabase/Edit_Animal";
import Reply from "./pages/animalDatabase/Reply";
//animal caretaker
import ReportAnimalStatus from "./pages/animalCaretaker/ReportAnimalStatus";
import Employees from "./pages/animalCaretaker/Employees";
import Animal from "./pages/animalCaretaker/Animal";
import AssignShift from "./pages/animalCaretaker/AssignShift";
import UpdateShift from "./pages/animalCaretaker/UpdateShift";
// Employee account
import EmployeeAccount from "./pages/employees/EmployeeAccount";
import ChangeShift from "./pages/employees/ChangeShift";
import Employee_Profile from "./pages/employees/Employee_Profile";
import EditEmployeeProfile from "./pages/employees/EditEmployeeProfile";
import EventControl from './pages/employees/EventControl'
import CustomerSupport from './pages/employees/CustomerSupport';
import ReplyEnquiry from './pages/employees/ReplyEnqiry'

// visitors account
import Visitor_Landing from "./pages/visitors/Visitor_Landing";
import Events from "./pages/visitors/Events";
import Feedback from "./pages/visitors/Feedback";
import ZooAnimal from "./pages/visitors/ZooAnimal";
import Map from "./pages/visitors/Map";
import Add_MedicalRecordsl from "./pages/animalDatabase/Add_MedicalRecords";
import AnimalDataForMedicalRecords from "./pages/animalDatabase/AnimalDataForMedicalRecords";
import MedicalRecords from "./pages/animalDatabase/MedicalRecords";
import Edit_MedicalRecord from "./pages/animalDatabase/Edit_MedicalRecord";
import Enquiry from './pages/visitors/Enquiry';
import PaymentCard from "./pages/visitors/PaymentCard";
import PaymentSuccess from "./pages/visitors/PaymentSuccess";
import EventRegistrations from "./pages/visitors/EventRegistration";
import PaymentFailed from "./pages/visitors/PaymentFailed";

//adminDashBoard
import AdminDashboard from './pages/adminDashBoard/staff_management/AdminDashboard';
import AllStaff from './pages/adminDashBoard/staff_management/AllStaff';
import AddStaff from './pages/adminDashBoard/staff_management/AddStaff';

import AllAnimals from './pages/adminDashBoard/animal_management/AllAnimals';
import AddAnimal from './pages/adminDashBoard/animal_management/AddAnimal';

import AllEvents from './pages/adminDashBoard/content_management/AllEvents';
import UpdateEvent from './pages/adminDashBoard/content_management/UpdateEvent';
import AddEvent from './pages/adminDashBoard/content_management/AddEvent';
import Online_Event_Reg from './pages/adminDashBoard/content_management/Online_Event_Reg';

import AllAnnouncement from './pages/adminDashBoard/content_management/AllAnnouncement';
import EditAnnouncement from './pages/adminDashBoard/content_management/EditAnnouncement';
import AddAnnouncement from './pages/adminDashBoard/content_management/AddAnnouncement';

import AdminProfile from './pages/adminDashBoard/Admin_Profile/AdminProfile';
import EditAdminProfile from './pages/adminDashBoard/Admin_Profile/EditProfile';
import EditStaff from "./pages/adminDashBoard/staff_management/EditStaff";
import EditAnimal from "./pages/adminDashBoard/animal_management/EditAnimal";
import AttendancePage from "./pages/employees/AttendancePage";
import AttendanceSpecialist from "./pages/animalDatabase/AttendanceSpecialist";
import AttendanceCaretaker from "./pages/animalCaretaker/AttendanceCaretaker";
import AdminFeedback from "./pages/adminDashBoard/feedback/Feedback";


function App() {
  return (
    <>
      <Routes>
        {/* ANIMAL SPECIALIST */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/animal/dashboard" element={<AnimalDashboard />} />
        <Route path="/animal/addAnimal" element={<Add_animal />} />
        <Route
          path="/animal/MedicalRecord"
          element={<AnimalDataForMedicalRecords />}
        />
        <Route
          path="/animal/addMedicalRecord/:id"
          element={<Add_MedicalRecordsl />}
        />
        <Route
          path="/animal/editMedicalRecord/:id"
          element={<Edit_MedicalRecord />}
        />
        <Route
          path="/animal/allMedicalRecords/:id"
          element={<MedicalRecords />}
        />
        <Route path="/animal/message" element={<Message />} />
        <Route path="/animal/attendance" element={<AttendanceSpecialist />} />
        <Route path="/animal/editAnimal/:id" element={<Edit_Animal />} />
        <Route path="/animal/message/reply/:id" element={<Reply />} />

        {/*ANIMAL CARETAKER */}
        {/* <Route path='/caretaker/dashboard' element={<CaretakerDashboard/>} /> */}
        <Route path="/caretaker/employee" element={<Employees />} />
        <Route
          path="/caretaker/report/animalStatus/:id"
          element={<ReportAnimalStatus />}
        />
        <Route path="/caretaker/animal" element={<Animal />} />
        <Route path="/caretaker/attendance" element={<AttendanceCaretaker />} />
        <Route
          path="/caretaker/employee/assignShift/:id"
          element={<AssignShift />}
        />
        <Route
          path="/caretaker/employee/updateShift/:id"
          element={<UpdateShift />}
        />

        {/* EMPLOYEE ROUTES */}
        <Route path="/employee" element={<EmployeeAccount />} />
        <Route path="/employee/changeShift/:id" element={<ChangeShift />} />
        <Route path="/employee/profile" element={<Employee_Profile />} />
        <Route path="/employee/attendence" element={<AttendancePage />} />
        <Route
          path="/employee/profile/edit/:id"
          element={<EditEmployeeProfile />}
        />
        <Route path="/employee/eventControl"  element={<EventControl />} />
        <Route path="/employee/support"  element={<CustomerSupport />} />
        <Route path="/employee/replyChat/:id"  element={<ReplyEnquiry />} />


        {/* VISITOR ROUTES */}
        <Route path="/visitor" element={<Visitor_Landing />} />
        <Route path="/visitor/event" element={<Events />} />
        <Route path="/visitor/feedback" element={<Feedback />} />
        <Route path="/visitor/animals" element={<ZooAnimal />} />
        <Route path="/visitor/map" element={<Map />} />
        <Route path="/visitor/inquiry/:id" element={<Enquiry />} />
        <Route path="/visitor/payment/:id" element={<PaymentCard />} />
        <Route path="/visitor/payment/success" element={<PaymentSuccess />} />
        <Route path="/visitor/event/registration" element={<EventRegistrations />} />
        <Route path="/failed" element={<PaymentFailed />} />

        {/*  ADMIN ROUTES */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/staffs" element={<AllStaff />} />
        <Route path="/admin/editStaff/:id" element={<EditStaff />} />
        <Route path="/admin/addStaff" element={<AddStaff />} />

        <Route path="/admin/allAnimals" element={<AllAnimals />} />
        <Route path="/admin/addAnimal" element={<AddAnimal />} />
        <Route path="/admin/editAnimal/:id" element={<EditAnimal />} />

        <Route path="/admin/allEvents" element={<AllEvents />} />
        <Route path="/admin/updateEvent/:id" element={<UpdateEvent />} />
        <Route path="/admin/addEvent" element={<AddEvent />} />
        <Route
          path="/admin/eventRegistrations"
          element={<Online_Event_Reg />}
        />

        <Route path="/admin/announcement" element={<AllAnnouncement />} />
        <Route
          path="/admin/announcement/edit/:id"
          element={<EditAnnouncement />}
        />
        <Route path="/admin/announcement/add" element={<AddAnnouncement />} />

        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/profile/edit/:id" element={<EditAdminProfile />} />
        <Route path="/admin/feedback" element={<AdminFeedback />} />
       
      </Routes>
    </>
  );
}

export default App;
