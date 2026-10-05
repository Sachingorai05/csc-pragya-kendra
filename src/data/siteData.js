const siteData = {
  businessName: 'Kajal Store',
  serviceCentreName: 'Kajal Digital Seva Kendra',
  tagline: 'Digital Seva Centre',

  owner: 'Kajal Chandra Gorai',
  coOwner: 'Sachin Gorai',

  phone: '+919798418640',
  displayPhone: '+91 97984 18640',

  whatsapp: '919798418640',

  mapsUrl: 'https://maps.app.goo.gl/kQqbBFsmyG6syWxE9',

  address: {
    line1: 'Vill- Penada, Near Shiv Mandir Penada',
    line2: 'Main Road Boram',
    city: 'Jamshedpur',
    district: 'East Singhbhum',
    state: 'Jharkhand',
    pincode: '832105',
  },

  openingHours: {
    weekdays: '8:00 AM - 8:00 PM',
    sunday: '8:00 AM - 8:00 PM',
  },

  services: [
    {
  title: 'Government & ID Services',
  description:
    'Assistance with essential government, identity and welfare-related services.',
  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdcrWYtLLEsM4o5_WCupJTLdhYjV4uSp4EQaT111ULKJXiF9g/viewform',
  items: [
        'Aadhaar',
        'PAN',
        'Voter ID',
        'Ration Card',
        'Ayushman Card',
        'Labour Card',
        'PM Kisan',
      ],
    },

    {
      title: 'Certificates & Documents',
      description:
        'Assistance with important certificates and educational documentation.',
  formUrl:
    'https://forms.gle/1fN4JMMqusMXVhNt9',

      items: [
        'Income Certificate',
        'Caste Certificate',
        'Residential Certificate',
        'Educational Certificate Applications',
        'Document Upload & Submission',
      ],
    },

    {
      title: 'Education & Student Services',
      description:
        'Online assistance for students, admissions, examinations and scholarships.',
      items: [
        'All Types of Educational Online Forms',
        'Scholarship Forms',
        'Pre-Matric Scholarship',
        'Post-Matric Scholarship',
        'School Admission Forms',
        'College & University Admission Forms',
        'Entrance Examination Forms',
        'Competitive Examination Forms',
        'University Examination Forms',
        'Semester Examination Forms',
        'Exam Registration',
        'Admit Card Download & Print',
        'Result Download & Print',
        'Marksheet & Certificate Download',
        'Counselling & Admission Registration',
        'Student Online Registration',
      ],
    },

    {
      title: 'Job & Employment Services',
      description:
        'Online assistance with employment, recruitment and competitive examination applications.',
      items: [
        'Government Job Application Forms',
        'Private Job Application Forms',
        'Recruitment Forms',
        'Employment Registration',
        'Job Portal Registration',
        'SSC Application Forms',
        'Railway Application Forms',
        'Banking Exam Application Forms',
        'Police & Defence Recruitment Forms',
        'Teaching Recruitment Forms',
        'Competitive Exam Registration',
        'Admit Card Download & Print',
        'Exam Result Download & Print',
        'Answer Key Download',
        'Online Application Correction',
        'Application Status Checking',
        'Document Upload & Submission',
      ],
    },

    {
      title: 'Online Application Services',
      description:
        'Convenient assistance with online registrations, applications and digital submissions.',
      items: [
        'All Types of Online Forms',
        'Online Registration',
        'Online Application',
        'Document Upload',
        'Application Correction',
        'Application Status Checking',
        'Online Payment Assistance',
      ],
    },

    {
      title: 'Print & Document Services',
      description:
        'Convenient document printing, copying, scanning and finishing services.',
      items: [
        'Print',
        'Photocopy',
        'Scanning',
        'Lamination',
        'Passport Size Photo',
        'Document Printing',
      ],
    },

    {
      title: 'Banking & Payments',
      description:
        'Everyday digital payment, banking and recharge assistance.',
      items: [
        'Banking Services',
        'Bill Payments',
        'Mobile Recharges',
        'DTH Recharges',
        'Digital Payment Assistance',
      ],
    },
  ],

  navigation: [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Payments', path: '/payments' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
],
}

export default siteData