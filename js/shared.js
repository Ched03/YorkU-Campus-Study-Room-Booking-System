// ===== SHARED DATA =====
const ROOMS = [
  { id: 'r101', number: 'Room 101', floor: 'Floor 1', capacity: 1, type: 'Individual', status: 'available', time: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'] },
  { id: 'r102', number: 'Room 102', floor: 'Floor 1', capacity: 1, type: 'Individual', status: 'available', time: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'] },
  { id: 'r103', number: 'Room 103', floor: 'Floor 1', capacity: 4, type: 'Group', status: 'available', time: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'] },
  { id: 'r104', number: 'Room 104', floor: 'Floor 1', capacity: 6, type: 'Group', status: 'booked', time: ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
  { id: 'r105', number: 'Room 105', floor: 'Floor 1', capacity: 1, type: 'Individual', status: 'available', time: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'] },
  { id: 'r201', number: 'Room 201', floor: 'Floor 2', capacity: 1, type: 'Individual', status: 'available', time: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'] },
  { id: 'r202', number: 'Room 202', floor: 'Floor 2', capacity: 1, type: 'Individual', status: 'maintenance', time: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM' ] },
  { id: 'r203', number: 'Room 203', floor: 'Floor 2', capacity: 4, type: 'Group', status: 'available', time: ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
  { id: 'r204', number: 'Room 204', floor: 'Floor 2', capacity: 8, type: 'Group', status: 'available', time: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'] },
  { id: 'r205', number: 'Room 205', floor: 'Floor 2', capacity: 1, type: 'Individual', status: 'booked', time: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'] },
  { id: 'r301', number: 'Room 301', floor: 'Floor 3', capacity: 1, type: 'Individual', status: 'available', time: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'] },
  { id: 'r302', number: 'Room 302', floor: 'Floor 3', capacity: 1, type: 'Individual', status: 'available', time: ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
  { id: 'r303', number: 'Room 303', floor: 'Floor 3', capacity: 6, type: 'Group', status: 'available', time: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'] },
  { id: 'r304', number: 'Room 304', floor: 'Floor 3', capacity: 4, type: 'Group', status: 'available', time: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'] },
  { id: 'r305', number: 'Room 305', floor: 'Floor 3', capacity: 1, type: 'Individual', status: 'available', time: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'] },
];

const BOOKS = [
  { id: 'b1', title: 'Software Systems Architecture', course: 'ITEC 3030', author: 'Addison Wesley', status: 'available' },
  { id: 'b2', title: 'Interaction Design: Beyond Human-Computer Interaction', course: 'ITEC 3230', author: 'Helen Sharp', status: 'available' },
  { id: 'b3', title: 'Business Data Communications and Networking', course: 'ITEC 3210', author: 'J. FitzGerald', status: 'unavailable' },
  { id: 'b4', title: 'Systems Analysis and Design in a Changing World', course: 'ITEC 3010', author: 'John Satzinger', status: 'available' },
];

const COMPUTERS = [
  { id: 'C01', status: 'available' }, { id: 'C02', status: 'in-use' },
  { id: 'C03', status: 'available' }, { id: 'C04', status: 'in-use' },
  { id: 'C05', status: 'available' }, { id: 'C06', status: 'available' },
  { id: 'C07', status: 'available' }, { id: 'C08', status: 'in-use' },
  { id: 'C09', status: 'available' }, { id: 'C10', status: 'available' },
  { id: 'C11', status: 'available' }, { id: 'C12', status: 'in-use' },
];

const USERS = [
  { name: 'John Smith', id: '123456789', email: 'jsmith@yorku.ca', role: 'Student', bookings: 2 },
  { name: 'Sarah Johnson', id: '234567890', email: 'sjohnson@yorku.ca', role: 'Student', bookings: 1 },
  { name: 'Staff Member', id: 'S001', email: 'staff@yorku.ca', role: 'Staff', bookings: 0 },
  { name: 'Admin User', id: 'A001', email: 'admin@yorku.ca', role: 'Admin', bookings: 0 },
];

const BOOKINGS = [
  { room: 'Room 104', floor: 'Floor 1', date: 'Mar 13, 2026', time: '10:00 - 11:00', status: 'Upcoming', student: 'John Smith', studentId: 'Y123456' },
  { room: 'Room 205', floor: 'Floor 2', date: 'Mar 13, 2026', time: '13:00 - 14:00', status: 'Upcoming', student: 'John Smith', studentId: 'Y123456' },
  { room: 'Room 103', floor: 'Floor 1', date: 'Mar 13, 2026', time: '11:00 - 12:00', status: 'Upcoming', student: 'Sarah Johnson', studentId: 'Y234567' },
];

const TIME_SLOTS = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

// ===== SVG ICONS =====
const icons = {
  graduationCap: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`,
  monitor: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" /></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
  logout: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" /></svg>`,
  chart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>`,
  cog: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
  pencil: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" /></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  bell: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>`,
  floor: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>`,
  capacity: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  exclamation: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" /></svg>`,
  idCard: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" /></svg>`,
  envelope: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>`,
  chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>`,
};

// ===== SESSION HELPERS =====
function getCurrentUser() {
  const data = sessionStorage.getItem('yorku_user');
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
  sessionStorage.setItem('yorku_user', JSON.stringify(user));
}

function logout() {
  sessionStorage.removeItem('yorku_user');
  window.location.href = '../../index.html';
}

function requireAuth(expectedRole) {
  const user = getCurrentUser();

  if (!user) {
    window.location.href = '../../index.html';
    return null;
  }

  if (expectedRole && user.role !== expectedRole) {
    alert('Access denied.');
    window.location.href = '../../index.html';
    return null;
  }

  return user;
}

// ===== TOAST =====
function showToast(msg, type = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = 'toast' + (type ? ' ' + type : '');
  void toast.offsetWidth;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ===== STATUS BADGE HELPER =====
function statusBadge(status) {
  const map = {
    available: ['badge-green', 'Available'],
    booked: ['badge-blue', 'Booked'],
    maintenance: ['badge-orange', 'Maintenance'],
    upcoming: ['badge-blue', 'Upcoming'],
    completed: ['badge-green', 'Completed'],
  };
  const [cls, label] = map[status.toLowerCase()] || ['badge-gray', status];
  return `<span class="badge ${cls}">${label}</span>`;
}

// ===== BUILD TOP NAVBAR (student) =====
function buildStudentNav(activePage) {
  const user = getCurrentUser();
  const pages = [
    { label: 'Home', icon: 'home', href: 'home.html' },
    { label: 'My Bookings', icon: 'calendar', href: 'my-bookings.html' },
    { label: 'Textbook Rentals', icon: 'book', href: 'textbook-rentals.html' },
    { label: 'Computer Lab', icon: 'monitor', href: 'computer-lab.html' },
  ];
  const links = pages.map(p => `
    <a href="${p.href}" class="nav-link ${activePage === p.label ? 'active' : ''}">
      ${icons[p.icon]}${p.label}
    </a>`).join('');
  return `
  <nav class="top-nav">
    <a href="home.html" class="nav-brand">
      <div class="nav-logo">${icons.graduationCap}</div>
      <div class="nav-brand-text">
        <div class="brand-name">YorkU</div>
        <div class="brand-sub">Study Rooms</div>
      </div>
    </a>
    <div class="nav-links">${links}</div>
    <div class="nav-right">
      <div class="nav-user">
        <div class="user-name">${user?.name || 'Student'}</div>
        <div class="user-id">${user?.id || ''}</div>
      </div>
      <button class="nav-icon-btn" onclick="window.location.href='profile.html'" title="Profile">${icons.user}</button>
      <button class="nav-icon-btn" onclick="logout()" title="Logout">${icons.logout}</button>
    </div>
  </nav>`;
}

// ===== BUILD SIDEBAR (staff/admin) =====
function buildSidebar(role, activeItem) {
  const user = getCurrentUser();
  let navItems = [];
  let prefix = '';

  if (role === 'Staff') {
    prefix = '../pages/staff/';
    navItems = [
      { label: 'Dashboard', icon: 'chart', href: 'dashboard.html' },
      { label: 'Booking Calendar', icon: 'calendar', href: 'booking-calendar.html' },
      { label: 'Student Check-In', icon: 'users', href: 'student-checkin.html' },
      { label: 'Textbook Rentals', icon: 'book', href: 'textbook-rentals.html' },
    ];
  } else {
    prefix = '../pages/admin/';
    navItems = [
      { label: 'Dashboard', icon: 'chart', href: 'dashboard.html' },
      { label: 'Room Management', icon: 'home', href: 'room-management.html' },
      { label: 'User Management', icon: 'users', href: 'user-management.html' },
      { label: 'System Settings', icon: 'cog', href: 'system-settings.html' },
    ];
  }

  const navHTML = navItems.map(item => `
    <a href="${item.href}" class="sidebar-nav-item ${activeItem === item.label ? 'active' : ''}">
      ${icons[item.icon]}<span>${item.label}</span>
    </a>`).join('');

  return `
  <aside class="sidebar">
    <div class="sidebar-brand">
      <div class="s-logo">${icons.graduationCap}</div>
      <div>
        <div class="s-name">YorkU ${role}</div>
        <div class="s-sub">Study Rooms</div>
      </div>
    </div>
    <nav class="sidebar-nav">${navHTML}</nav>
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="u-avatar">${icons.user}</div>
        <div>
          <div class="u-name">${user?.name || role}</div>
          <div class="u-role">${role.toLowerCase()}</div>
        </div>
      </div>
      <button class="sidebar-logout" onclick="logout()">
        ${icons.logout}<span>Logout</span>
      </button>
    </div>
  </aside>`;
}
