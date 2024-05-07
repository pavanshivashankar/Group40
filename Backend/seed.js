// Import necessary modules and dependencies
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import userModel from './models/userModel.js';
import staffModel from './models/staffModel.js';
import animalMessageModel from './models/animalMessageModel.js';
import animalModel from './models/animalModel.js';
import announcementModel from './models/announcementModel.js';
// import attendance from './models/attendance.js';
import attendanceModel from './models/attendanceModel.js';
import eventModel from './models/eventModel.js';
import feedbackModel from './models/feedbackModel.js';
import habitatModel from './models/habitatModel.js';
import medicalRecordModel from './models/medicalRecordModel.js';
import organizer from './models/organizer.js';
import registration from './models/registration.js';
import shiftChangeModel from './models/shiftChangeModel.js';
import shiftModel from './models/shiftModel.js';
import speciesModel from './models/speciesModel.js';
import ticket from './models/ticket.js';
import visitor from './models/visitor.js';


import dotenv from 'dotenv';

dotenv.config()

const UsersSeedData = [
    { userName: "john_doe123", name: "John Doe", email: "john@example.com", password: "password123", role: "Visitor" },
    { userName: "jane_smith456", name: "Jane Smith", email: "jane@example.com", password: "password456", role: "Visitor" },
    { userName: "sam_wilson789", name: "Sam Wilson", email: "sam@example.com", password: "password789", role: "Admin" },
    { userName: "emily_jones101", name: "Emily Jones", email: "emily@example.com", password: "password101", role: "Visitor" },
    { userName: "alex_garcia202", name: "Alex Garcia", email: "alex@example.com", password: "password202", role: "AnimalSpecialist" },
    { userName: "sara_taylor303", name: "Sara Taylor", email: "sara@example.com", password: "password303", role: "Visitor" },
    { userName: "michael_lee404", name: "Michael Lee", email: "michael@example.com", password: "password404", role: "Visitor" },
    { userName: "lisa_wang505", name: "Lisa Wang", email: "lisa@example.com", password: "password505", role: "Employee" },
    { userName: "ryan_jackson606", name: "Ryan Jackson", email: "ryan@example.com", password: "password606", role: "Visitor" },
    { userName: "amy_thomas707", name: "Amy Thomas", email: "amy@example.com", password: "password707", role: "Visitor" }
  ];
  

  const staffSeedData = [
    { name: "John Doe", role: "Admin", email: "john@example.com", phoneNumber: "1234567890", shift: "Morning" },
    { name: "Jane Smith", role: "AnimalSpecialist", email: "jane@example.com", phoneNumber: "2345678901", shift: "Afternoon" },
    { name: "Sam Wilson", role: "AnimalCaretaker", email: "sam@example.com", phoneNumber: "3456789012", shift: "Evening" },
    { name: "Emily Jones", role: "Employee", email: "emily@example.com", phoneNumber: "4567890123", shift: "Morning" },
    { name: "Alex Garcia", role: "Admin", email: "alex@example.com", phoneNumber: "5678901234", shift: "Afternoon" },
    { name: "Sara Taylor", role: "AnimalSpecialist", email: "sara@example.com", phoneNumber: "6789012345", shift: "Evening" },
    { name: "Michael Lee", role: "AnimalCaretaker", email: "michael@example.com", phoneNumber: "7890123456", shift: "Morning" },
    { name: "Lisa Wang", role: "Employee", email: "lisa@example.com", phoneNumber: "8901234567", shift: "Afternoon" },
    { name: "Ryan Jackson", role: "Admin", email: "ryan@example.com", phoneNumber: "9012345678", shift: "Evening" },
    { name: "Amy Thomas", role: "AnimalSpecialist", email: "amy@example.com", phoneNumber: "0123456789", shift: "Morning" }
  ];

  const animalMessageSeedData = [
    { message: "Simba seems to be enjoying his meal today.", animal: "612345678901234567890123", user: "612345678901234567890124" },
    { message: "Dumbo looks happy playing with his toys.", animal: "612345678901234567890125", user: "612345678901234567890126" },
    { message: "The lions are resting in the shade.", animal: "612345678901234567890127", user: "612345678901234567890128" },
    { message: "The elephants are having a bath.", animal: "612345678901234567890129", user: "612345678901234567890130" },
    { message: "The monkeys are swinging from tree to tree.", animal: "612345678901234567890131", user: "612345678901234567890132" },
    { message: "The giraffes are munching on leaves.", animal: "612345678901234567890133", user: "612345678901234567890134" },
    { message: "The tigers are prowling around their enclosure.", animal: "612345678901234567890135", user: "612345678901234567890136" },
    { message: "The bears are playing with each other.", animal: "612345678901234567890137", user: "612345678901234567890138" },
    { message: "The penguins are waddling around.", animal: "612345678901234567890139", user: "612345678901234567890140" },
    { message: "The parrots are showing off their colorful feathers.", animal: "612345678901234567890141", user: "612345678901234567890142" }
  ];
  
  const animalSeedData = [
    { name: "Simba", speciesName: "Lion", age: 5, gender: "Male", habitatName: "Savannah", zookeeper: "John", caretaker: "Emily", note: "Loves to roar" },
    { name: "Dumbo", speciesName: "Elephant", age: 8, gender: "Male", habitatName: "Jungle", zookeeper: "Jane", caretaker: "Alex", note: "Enjoys bathing" },
    { name: "Rex", speciesName: "Tiger", age: 4, gender: "Female", habitatName: "Forest", zookeeper: "Sam", caretaker: "Sara", note: "Very agile" },
    { name: "Charlie", speciesName: "Giraffe", age: 6, gender: "Male", habitatName: "Savannah", zookeeper: "Emily", caretaker: "John", note: "Tallest giraffe in the zoo" },
    { name: "Milo", speciesName: "Monkey", age: 3, gender: "Male", habitatName: "Rainforest", zookeeper: "Alex", caretaker: "Jane", note: "Mischievous and playful" },
    { name: "Bella", speciesName: "Bear", age: 5, gender: "Female", habitatName: "Forest", zookeeper: "Sara", caretaker: "Sam", note: "Loves to climb trees" },
    { name: "Penny", speciesName: "Penguin", age: 2, gender: "Female", habitatName: "Arctic", zookeeper: "John", caretaker: "Emily", note: "Great swimmer" },
    { name: "Oscar", speciesName: "Otter", age: 4, gender: "Male", habitatName: "River", zookeeper: "Jane", caretaker: "Alex", note: "Likes to play with rocks" },
    { name: "Rio", speciesName: "Parrot", age: 7, gender: "Male", habitatName: "Tropical", zookeeper: "Sam", caretaker: "Sara", note: "Can mimic human speech" },
    { name: "Luna", speciesName: "Lemur", age: 3, gender: "Female", habitatName: "Jungle", zookeeper: "Emily", caretaker: "John", note: "Very curious and sociable" }
  ];
  
  const announcementSeedData = [
    { topic: "New Exhibit Opening", dept: "Events", description: "Join us for the grand opening of our new exhibit featuring exotic birds from around the world.", date: new Date("2024-05-15") },
    { topic: "Animal Feeding Schedule Update", dept: "Operations", description: "Please note the updated feeding schedule for all animals in the zoo. Check the boards near each exhibit for details.", date: new Date("2024-05-20") },
    { topic: "Zookeeper Appreciation Day", dept: "Human Resources", description: "Let's show our appreciation for the hard work and dedication of our zookeepers. Join us for a special celebration on June 1st.", date: new Date("2024-06-01") },
    { topic: "Volunteer Orientation", dept: "Volunteer Services", description: "Interested in volunteering at the zoo? Attend our orientation session on May 30th to learn more about available opportunities.", date: new Date("2024-05-30") },
    { topic: "Educational Workshop Series", dept: "Education", description: "Our educational workshop series continues with a session on conservation efforts for endangered species. Don't miss out!", date: new Date("2024-06-10") },
    { topic: "Temporary Exhibit Closure", dept: "Operations", description: "Please note that the primate exhibit will be closed for maintenance from May 25th to May 28th. We apologize for any inconvenience.", date: new Date("2024-05-25") },
    { topic: "Summer Camp Registration", dept: "Education", description: "Registration for our summer camp program is now open! Sign up your kids for a fun and educational experience at the zoo.", date: new Date("2024-06-05") },
    { topic: "Special Event: Zoo Night", dept: "Events", description: "Experience the zoo after hours at our special event on June 15th. Enjoy live music, food trucks, and animal encounters under the stars.", date: new Date("2024-06-15") },
    { topic: "Conservation Fundraiser", dept: "Conservation", description: "Support wildlife conservation efforts by attending our fundraiser gala on June 20th. Together, we can make a difference for endangered species.", date: new Date("2024-06-20") },
    { topic: "Animal Enrichment Day", dept: "Animal Care", description: "Join us for a day of enriching activities for our animals on June 8th. Watch as they interact with special toys and treats designed to stimulate their minds.", date: new Date("2024-06-08") }
  ];
  
  const attendanceSeedData = [
    { staff: "612345678901234567890123", date: new Date("2024-05-01"), status: "Present", notes: "Regular shift", reasonForAbsence: null },
    { staff: "612345678901234567890124", date: new Date("2024-05-01"), status: "Present", notes: "On time", reasonForAbsence: null },
    { staff: "612345678901234567890125", date: new Date("2024-05-01"), status: "Absent", notes: "Sick leave", reasonForAbsence: "Fever" },
    { staff: "612345678901234567890126", date: new Date("2024-05-01"), status: "Present", notes: "Late arrival", reasonForAbsence: null },
    { staff: "612345678901234567890127", date: new Date("2024-05-01"), status: "Present", notes: "Worked extra hours", reasonForAbsence: null },
    { staff: "612345678901234567890128", date: new Date("2024-05-01"), status: "Present", notes: "Completed assigned tasks", reasonForAbsence: null },
    { staff: "612345678901234567890129", date: new Date("2024-05-01"), status: "Absent", notes: "Personal leave", reasonForAbsence: "Family emergency" },
    { staff: "612345678901234567890130", date: new Date("2024-05-01"), status: "Present", notes: "Covered for colleague", reasonForAbsence: null },
    { staff: "612345678901234567890131", date: new Date("2024-05-01"), status: "Present", notes: "Training session", reasonForAbsence: null },
    { staff: "612345678901234567890132", date: new Date("2024-05-01"), status: "Absent", notes: "Vacation", reasonForAbsence: "Traveling" }
  ];
  
  
  const eventSeedData = [
    { name: "Zoo Night", date: new Date("2024-06-15"), location: "Zoo", capacity: 200, registrationRequired: true, registrationOpen: true, registrationStartDate: new Date("2024-05-01"), registrationEndDate: new Date("2024-06-10"), description: "Experience the zoo after hours with live music, food trucks, and animal encounters under the stars." },
    { name: "Animal Enrichment Day", date: new Date("2024-06-08"), location: "Zoo", capacity: 150, registrationRequired: false, registrationOpen: false, registrationStartDate: null, registrationEndDate: null, description: "Join us for a day of enriching activities for our animals. Watch as they interact with special toys and treats designed to stimulate their minds." },
    { name: "Zookeeper Talk", date: new Date("2024-06-01"), location: "Zoo", capacity: 100, registrationRequired: false, registrationOpen: false, registrationStartDate: null, registrationEndDate: null, description: "Learn about the daily care and responsibilities of zookeepers. Meet our dedicated staff and get an insider's view of the zoo." },
    { name: "Conservation Fundraiser Gala", date: new Date("2024-06-20"), location: "Grand Ballroom", capacity: 300, registrationRequired: true, registrationOpen: true, registrationStartDate: new Date("2024-05-01"), registrationEndDate: new Date("2024-06-15"), description: "Support wildlife conservation efforts by attending our fundraiser gala. Enjoy an elegant evening of dining, dancing, and silent auctions." },
    { name: "Summer Camp Orientation", date: new Date("2024-06-05"), location: "Education Center", capacity: 50, registrationRequired: true, registrationOpen: true, registrationStartDate: new Date("2024-05-01"), registrationEndDate: new Date("2024-06-03"), description: "Get ready for an exciting summer at the zoo! Attend our orientation session to meet the camp counselors, learn about the schedule, and get important information for parents and campers." },
    { name: "Animal Encounter Day", date: new Date("2024-06-22"), location: "Zoo", capacity: 100, registrationRequired: false, registrationOpen: false, registrationStartDate: null, registrationEndDate: null, description: "Get up close and personal with some of our favorite animal ambassadors. Meet our knowledgeable staff and learn fascinating facts about these amazing creatures." },
    { name: "Junior Zookeeper Program", date: new Date("2024-06-12"), location: "Zoo", capacity: 20, registrationRequired: true, registrationOpen: true, registrationStartDate: new Date("2024-05-01"), registrationEndDate: new Date("2024-06-10"), description: "Calling all aspiring zookeepers! Join our junior zookeeper program and get hands-on experience caring for animals, preparing food, and assisting with daily tasks." },
    { name: "Bird Watching Tour", date: new Date("2024-06-18"), location: "Zoo", capacity: 30, registrationRequired: true, registrationOpen: true, registrationStartDate: new Date("2024-05-01"), registrationEndDate: new Date("2024-06-15"), description: "Explore the diverse world of birds with our expert guides. Bring your binoculars and join us for a morning of bird watching around the zoo." },
    { name: "Art in the Wild Workshop", date: new Date("2024-06-25"), location: "Education Center", capacity: 40, registrationRequired: true, registrationOpen: true, registrationStartDate: new Date("2024-05-01"), registrationEndDate: new Date("2024-06-20"), description: "Unleash your creativity with our art workshop inspired by nature. Learn techniques for sketching, painting, and creating masterpieces inspired by the animals and landscapes of the zoo." },
    { name: "Behind-the-Scenes Tour", date: new Date("2024-06-29"), location: "Zoo", capacity: 15, registrationRequired: true, registrationOpen: true, registrationStartDate: new Date("2024-05-01"), registrationEndDate: new Date("2024-06-25"), description: "Go behind the scenes and discover the hidden world of the zoo. Get exclusive access to off-exhibit areas, meet our animal care team, and learn about the inner workings of a modern zoo." }
  ];

  const feedbackSeedData = [
    { visitor: "612345678901234567890123", rating: 4, comment: "Great experience at the zoo!", suggestion: null, submittedAt: new Date("2024-05-01") },
    { visitor: "612345678901234567890124", rating: 5, comment: "The staff was very helpful and knowledgeable.", suggestion: "More interactive exhibits would be appreciated.", submittedAt: new Date("2024-05-03") },
    { visitor: "612345678901234567890125", rating: 3, comment: "Enjoyed seeing the animals, but the food options were limited.", suggestion: "Add more food stalls offering a variety of cuisines.", submittedAt: new Date("2024-05-05") },
    { visitor: "612345678901234567890126", rating: 5, comment: "Had a wonderful time with my family!", suggestion: null, submittedAt: new Date("2024-05-07") },
    { visitor: "612345678901234567890127", rating: 4, comment: "The zoo is well-maintained and clean.", suggestion: "Provide more guided tours for visitors.", submittedAt: new Date("2024-05-10") },
    { visitor: "612345678901234567890128", rating: 2, comment: "Disappointed with the lack of signage and information about the animals.", suggestion: "Improve signage and provide more educational materials.", submittedAt: new Date("2024-05-12") },
    { visitor: "612345678901234567890129", rating: 5, comment: "One of the best zoos I've visited!", suggestion: null, submittedAt: new Date("2024-05-15") },
    { visitor: "612345678901234567890130", rating: 4, comment: "The exhibits were impressive, especially the new ones.", suggestion: "Increase the frequency of animal shows.", submittedAt: new Date("2024-05-18") },
    { visitor: "612345678901234567890131", rating: 3, comment: "Had a good time overall, but the ticket prices are a bit high.", suggestion: "Offer discounts for families or group bookings.", submittedAt: new Date("2024-05-20") },
    { visitor: "612345678901234567890132", rating: 5, comment: "Absolutely loved the conservation efforts and educational programs.", suggestion: null, submittedAt: new Date("2024-05-22") }
  ];
 
  const habitatSeedData = [
    { name: "Savannah", description: "Grassy plains with scattered trees and shrubs", climate: "Hot and dry", terrain: "Flat with occasional hills" },
    { name: "Rainforest", description: "Dense forest with high rainfall and humidity", climate: "Warm and wet", terrain: "Variety of vegetation layers, including canopy and understory" },
    { name: "Desert", description: "Arid region with minimal vegetation and extreme temperatures", climate: "Hot and dry, with cold nights", terrain: "Sandy dunes, rocky outcrops, and sparse vegetation" },
    { name: "Tundra", description: "Treeless biome with permafrost and short growing seasons", climate: "Cold and dry", terrain: "Flat, icy plains with low-growing vegetation" },
    { name: "Aquatic", description: "Water-based habitat ranging from freshwater to marine environments", climate: "Varies depending on location", terrain: "Water bodies such as lakes, rivers, oceans, and wetlands" },
    { name: "Mountain", description: "High-altitude terrain with steep slopes and rocky surfaces", climate: "Cool to cold, with temperature variations based on altitude", terrain: "Rocky peaks, snow-capped summits, and alpine meadows" },
    { name: "Grassland", description: "Open landscape dominated by grasses and herbaceous plants", climate: "Moderate, with seasonal variations in temperature and precipitation", terrain: "Flat or gently rolling plains" },
    { name: "Forest", description: "Densely wooded area with a variety of tree species", climate: "Temperate or tropical, depending on location", terrain: "Thick canopy with understory vegetation and forest floor" },
    { name: "Wetland", description: "Ecosystem characterized by water saturation and unique plant species", climate: "Varies from tropical to polar regions", terrain: "Marshes, swamps, bogs, and floodplains" },
    { name: "Arctic", description: "Frozen landscape with snow and ice cover throughout the year", climate: "Extremely cold, with long winters and short summers", terrain: "Icebergs, glaciers, and frozen tundra" }
  ];
  
  const medicalRecordSeedData = [
    { date: new Date("2024-04-15"), description: "Annual check-up", medications: [], diagnosis: "Healthy", status: "Active", animal: "612345678901234567890123" },
    { date: new Date("2024-04-20"), description: "Treatment for minor injury", medications: ["Pain reliever", "Antibiotic ointment"], diagnosis: "Sprained ankle", status: "Active", animal: "612345678901234567890124" },
    { date: new Date("2024-04-25"), description: "Dental cleaning", medications: [], diagnosis: "Good oral health", status: "Active", animal: "612345678901234567890125" },
    { date: new Date("2024-05-01"), description: "X-ray for suspected fracture", medications: [], diagnosis: "Fractured rib", status: "Active", animal: "612345678901234567890126" },
    { date: new Date("2024-05-05"), description: "Treatment for gastrointestinal issues", medications: ["Antacid", "Probiotics"], diagnosis: "Stomach infection", status: "Active", animal: "612345678901234567890127" },
    { date: new Date("2024-05-10"), description: "Surgery to remove foreign object", medications: ["Pain medication", "Antibiotics"], diagnosis: "Foreign body ingestion", status: "Active", animal: "612345678901234567890128" },
    { date: new Date("2024-05-15"), description: "Vaccination and deworming", medications: [], diagnosis: "Preventive care", status: "Active", animal: "612345678901234567890129" },
    { date: new Date("2024-05-20"), description: "Treatment for respiratory infection", medications: ["Antibiotics", "Bronchodilator"], diagnosis: "Respiratory infection", status: "Active", animal: "612345678901234567890130" },
    { date: new Date("2024-05-25"), description: "Physical therapy for mobility issues", medications: [], diagnosis: "Arthritis", status: "Active", animal: "612345678901234567890131" },
    { date: new Date("2024-05-30"), description: "Consultation with specialist", medications: [], diagnosis: "Referral for further evaluation", status: "Active", animal: "612345678901234567890132" }
  ];
  
  const organizerSeedData = [
    { name: "John Doe", email: "john@example.com", phoneNumber: "123-456-7890", organization: "Zoo Events", role: "Event Coordinator" },
    { name: "Jane Smith", email: "jane@example.com", phoneNumber: "987-654-3210", organization: "Wildlife Foundation", role: "Fundraising Manager" },
    { name: "Michael Johnson", email: "michael@example.com", phoneNumber: "456-789-0123", organization: "Conservation Society", role: "Program Director" },
    { name: "Emily Brown", email: "emily@example.com", phoneNumber: "789-012-3456", organization: "Animal Rescue", role: "Volunteer Coordinator" },
    { name: "David Wilson", email: "david@example.com", phoneNumber: "234-567-8901", organization: "Environmental Coalition", role: "Outreach Coordinator" },
    { name: "Sarah Thompson", email: "sarah@example.com", phoneNumber: "567-890-1234", organization: "Nature Education Center", role: "Education Coordinator" },
    { name: "Christopher Lee", email: "christopher@example.com", phoneNumber: "890-123-4567", organization: "Wildlife Rehabilitation", role: "Facility Manager" },
    { name: "Jessica Martinez", email: "jessica@example.com", phoneNumber: "345-678-9012", organization: "Animal Sanctuary", role: "Operations Director" },
    { name: "Daniel Garcia", email: "daniel@example.com", phoneNumber: "901-234-5678", organization: "Green Living Initiative", role: "Project Manager" },
    { name: "Amy Wilson", email: "amy@example.com", phoneNumber: "012-345-6789", organization: "Wilderness Foundation", role: "Community Outreach Coordinator" }
  ];
  
  const registrationSeedData = [
    { event: "612345678901234567890123", visitor: "612345678901234567890001", registrationDate: new Date("2024-05-01"), registrationType: "Single", paymentStatus: "Pending" },
    { event: "612345678901234567890124", visitor: "612345678901234567890002", registrationDate: new Date("2024-05-02"), registrationType: "Single", paymentStatus: "Paid" },
    { event: "612345678901234567890125", visitor: "612345678901234567890003", registrationDate: new Date("2024-05-03"), registrationType: "Single", paymentStatus: "Paid" },
    { event: "612345678901234567890126", visitor: "612345678901234567890004", registrationDate: new Date("2024-05-04"), registrationType: "Group", paymentStatus: "Pending" },
    { event: "612345678901234567890127", visitor: "612345678901234567890005", registrationDate: new Date("2024-05-05"), registrationType: "Single", paymentStatus: "Cancelled" },
    { event: "612345678901234567890128", visitor: "612345678901234567890006", registrationDate: new Date("2024-05-06"), registrationType: "Single", paymentStatus: "Paid" },
    { event: "612345678901234567890129", visitor: "612345678901234567890007", registrationDate: new Date("2024-05-07"), registrationType: "Group", paymentStatus: "Pending" },
    { event: "612345678901234567890130", visitor: "612345678901234567890008", registrationDate: new Date("2024-05-08"), registrationType: "Single", paymentStatus: "Paid" },
    { event: "612345678901234567890131", visitor: "612345678901234567890009", registrationDate: new Date("2024-05-09"), registrationType: "Single", paymentStatus: "Pending" },
    { event: "612345678901234567890132", visitor: "612345678901234567890010", registrationDate: new Date("2024-05-10"), registrationType: "Single", paymentStatus: "Pending" }
  ];
  
  const shiftChangeSeedData = [
    { staff: "612345678901234567890001", shift: "Morning", reason: "Requested time off" },
    { staff: "612345678901234567890002", shift: "Afternoon", reason: "Covering for a colleague" },
    { staff: "612345678901234567890003", shift: "Evening", reason: "Personal emergency" },
    { staff: "612345678901234567890004", shift: "Night", reason: "Training session" },
    { staff: "612345678901234567890005", shift: "Morning", reason: "Health reasons" },
    { staff: "612345678901234567890006", shift: "Afternoon", reason: "Scheduling conflict" },
    { staff: "612345678901234567890007", shift: "Evening", reason: "Family event" },
    { staff: "612345678901234567890008", shift: "Night", reason: "Vacation leave" },
    { staff: "612345678901234567890009", shift: "Morning", reason: "Medical appointment" },
    { staff: "612345678901234567890010", shift: "Afternoon", reason: "Unexpected absence" }
  ];
  
  const shiftSeedData = [
    { staff: "612345678901234567890001", date: new Date("2024-05-01"), startTime: new Date("2024-05-01T08:00:00"), endTime: new Date("2024-05-01T16:00:00"), location: "Main Zoo", notes: "Regular shift" },
    { staff: "612345678901234567890002", date: new Date("2024-05-02"), startTime: new Date("2024-05-02T09:00:00"), endTime: new Date("2024-05-02T17:00:00"), location: "Wildlife Park", notes: "Special event coverage" },
    { staff: "612345678901234567890003", date: new Date("2024-05-03"), startTime: new Date("2024-05-03T10:00:00"), endTime: new Date("2024-05-03T18:00:00"), location: "Aviary", notes: "Shift swap with colleague" },
    { staff: "612345678901234567890004", date: new Date("2024-05-04"), startTime: new Date("2024-05-04T12:00:00"), endTime: new Date("2024-05-04T20:00:00"), location: "Aquarium", notes: "Training session" },
    { staff: "612345678901234567890005", date: new Date("2024-05-05"), startTime: new Date("2024-05-05T13:00:00"), endTime: new Date("2024-05-05T21:00:00"), location: "Reptile House", notes: "Overtime shift" },
    { staff: "612345678901234567890006", date: new Date("2024-05-06"), startTime: new Date("2024-05-06T14:00:00"), endTime: new Date("2024-05-06T22:00:00"), location: "Primate Enclosure", notes: "Regular shift" },
    { staff: "612345678901234567890007", date: new Date("2024-05-07"), startTime: new Date("2024-05-07T15:00:00"), endTime: new Date("2024-05-07T23:00:00"), location: "Big Cat Pavilion", notes: "Temporary assignment" },
    { staff: "612345678901234567890008", date: new Date("2024-05-08"), startTime: new Date("2024-05-08T08:00:00"), endTime: new Date("2024-05-08T16:00:00"), location: "Main Zoo", notes: "Regular shift" },
    { staff: "612345678901234567890009", date: new Date("2024-05-09"), startTime: new Date("2024-05-09T09:00:00"), endTime: new Date("2024-05-09T17:00:00"), location: "Wildlife Park", notes: "Special event coverage" },
    { staff: "612345678901234567890010", date: new Date("2024-05-10"), startTime: new Date("2024-05-10T10:00:00"), endTime: new Date("2024-05-10T18:00:00"), location: "Aviary", notes: "Shift swap with colleague" }
  ];
 
  const speciesSeedData = [
    { name: "Lion", classification: "Mammal", description: "The lion is a large cat species and a member of the Felidae family. It is known for its majestic appearance and powerful roar." },
    { name: "Tiger", classification: "Mammal", description: "The tiger is the largest cat species and a member of the Felidae family. It is known for its striped coat and powerful build." },
    { name: "Elephant", classification: "Mammal", description: "The elephant is the largest land animal and a member of the Elephantidae family. It is known for its long trunk and tusks." },
    { name: "Giraffe", classification: "Mammal", description: "The giraffe is the tallest land animal and a member of the Giraffidae family. It is known for its long neck and distinct coat pattern." },
    { name: "Zebra", classification: "Mammal", description: "The zebra is a member of the Equidae family and is known for its black and white striped coat." },
    { name: "Penguin", classification: "Bird", description: "The penguin is a flightless bird species found in the Southern Hemisphere. It is known for its black and white plumage and tuxedo-like appearance." },
    { name: "Crocodile", classification: "Reptile", description: "The crocodile is a large reptile species found in tropical regions. It is known for its armored body and powerful jaws." },
    { name: "Kangaroo", classification: "Mammal", description: "The kangaroo is a marsupial species found in Australia. It is known for its large hind legs and ability to hop." },
    { name: "Panda", classification: "Mammal", description: "The panda is a bear species found in China. It is known for its black and white coat and bamboo diet." },
    { name: "Hippopotamus", classification: "Mammal", description: "The hippopotamus is a large mammal found in sub-Saharan Africa. It is known for its barrel-shaped body and semi-aquatic lifestyle." }
  ];
  
  const ticketSeedData = [
    { visitor: "612345678901234567890001", event: "612345678901234567890123", purchaseDate: new Date("2024-05-01"), barcode: "A123456789", qrCode: "QWERTYUIOP123456", ticketType: "Standard", price: 20 },
    { visitor: "612345678901234567890002", event: "612345678901234567890124", purchaseDate: new Date("2024-05-02"), barcode: "B123456789", qrCode: "ASDFGHJKL1234567", ticketType: "VIP", price: 50 },
    { visitor: "612345678901234567890003", event: "612345678901234567890125", purchaseDate: new Date("2024-05-03"), barcode: "C123456789", qrCode: "ZXCVBNM123456789", ticketType: "Standard", price: 30 },
    { visitor: "612345678901234567890004", event: "612345678901234567890126", purchaseDate: new Date("2024-05-04"), barcode: "D123456789", qrCode: "POIUYTREWQ123456", ticketType: "VIP", price: 60 },
    { visitor: "612345678901234567890005", event: "612345678901234567890127", purchaseDate: new Date("2024-05-05"), barcode: "E123456789", qrCode: "LKJHGFDSA1234567", ticketType: "Standard", price: 25 },
    { visitor: "612345678901234567890006", event: "612345678901234567890128", purchaseDate: new Date("2024-05-06"), barcode: "F123456789", qrCode: "MNBVCXZ123456789", ticketType: "VIP", price: 55 },
    { visitor: "612345678901234567890007", event: "612345678901234567890129", purchaseDate: new Date("2024-05-07"), barcode: "G123456789", qrCode: "0987654321123456", ticketType: "Standard", price: 35 },
    { visitor: "612345678901234567890008", event: "612345678901234567890130", purchaseDate: new Date("2024-05-08"), barcode: "H123456789", qrCode: "5432109876123456", ticketType: "VIP", price: 70 },
    { visitor: "612345678901234567890009", event: "612345678901234567890131", purchaseDate: new Date("2024-05-09"), barcode: "I123456789", qrCode: "6543210987123456", ticketType: "Standard", price: 40 },
    { visitor: "612345678901234567890010", event: "612345678901234567890132", purchaseDate: new Date("2024-05-10"), barcode: "J123456789", qrCode: "1234567890123456", ticketType: "VIP", price: 75 }
  ];
  
  const visitorSeedData = [
    { name: "John Doe", email: "john@example.com", phoneNumber: "123-456-7890", ticketType: "General", ticketsPurchased: [], eventsAttended: [] },
    { name: "Jane Smith", email: "jane@example.com", phoneNumber: "987-654-3210", ticketType: "VIP", ticketsPurchased: [], eventsAttended: [] },
    { name: "Michael Johnson", email: "michael@example.com", phoneNumber: "456-789-0123", ticketType: "General", ticketsPurchased: [], eventsAttended: [] },
    { name: "Emily Brown", email: "emily@example.com", phoneNumber: "789-012-3456", ticketType: "General", ticketsPurchased: [], eventsAttended: [] },
    { name: "David Wilson", email: "david@example.com", phoneNumber: "234-567-8901", ticketType: "VIP", ticketsPurchased: [], eventsAttended: [] },
    { name: "Sarah Thompson", email: "sarah@example.com", phoneNumber: "567-890-1234", ticketType: "General", ticketsPurchased: [], eventsAttended: [] },
    { name: "Christopher Lee", email: "christopher@example.com", phoneNumber: "890-123-4567", ticketType: "VIP", ticketsPurchased: [], eventsAttended: [] },
    { name: "Jessica Martinez", email: "jessica@example.com", phoneNumber: "345-678-9012", ticketType: "General", ticketsPurchased: [], eventsAttended: [] },
    { name: "Daniel Garcia", email: "daniel@example.com", phoneNumber: "901-234-5678", ticketType: "General", ticketsPurchased: [], eventsAttended: [] },
    { name: "Amy Wilson", email: "amy@example.com", phoneNumber: "012-345-6789", ticketType: "VIP", ticketsPurchased: [], eventsAttended: [] }
  ];
  


// Hash passwords for users
const hashPasswords = async () => {
  try {
    const saltRounds = 10;
    for (const user of UsersSeedData) {
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
      user.password = hashedPassword;
    }
  } catch (error) {
    console.error("Error hashing passwords:", error);
  }
};

// Function to seed data
const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // Seed users collection
    await hashPasswords();
    await userModel.insertMany(UsersSeedData);
    console.log('User collection seeded successfully');

    // Seed animals collection
    await staffModel.insertMany(staffSeedData);
    console.log('staff collection seeded successfully');

    await animalMessageModel.insertMany(animalMessageSeedData);
    console.log('staff collection seeded successfully');

    await animalModel.insertMany(animalSeedData);
    console.log('staff collection seeded successfully');

    await announcementModel.insertMany(announcementSeedData);
    console.log('staff collection seeded successfully');

    // await attendance.insertMany(attendanceSeedData);
    // console.log('staff collection seeded successfully');

    await attendanceModel.insertMany(attendanceSeedData);
    console.log('staff collection seeded successfully');

    await eventModel.insertMany(eventSeedData);
    console.log('staff collection seeded successfully');

    await feedbackModel.insertMany(feedbackSeedData);
    console.log('staff collection seeded successfully');

    await habitatModel.insertMany(habitatSeedData);
    console.log('staff collection seeded successfully');

    await medicalRecordModel.insertMany(medicalRecordSeedData);
    console.log('staff collection seeded successfully');

    await organizer.insertMany(organizerSeedData);
    console.log('staff collection seeded successfully');

    await registration.insertMany(registrationSeedData);
    console.log('staff collection seeded successfully');

    await shiftChangeModel.insertMany(shiftChangeSeedData);
    console.log('staff collection seeded successfully');

    await shiftModel.insertMany(shiftSeedData);
    console.log('staff collection seeded successfully');

    await speciesModel.insertMany(speciesSeedData);
    console.log('staff collection seeded successfully');

    await ticket.insertMany(ticketSeedData);
    console.log('staff collection seeded successfully');

    await visitor.insertMany(visitorSeedData);
    console.log('staff collection seeded successfully');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

// Execute seedData function
seedData();
