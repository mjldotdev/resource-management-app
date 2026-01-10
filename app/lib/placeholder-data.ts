// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Admin',
    email: 'admin@email.com',
    password: 'admin',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const inventory = [
  {
    id: '1a292ba2-56bd-424c-88b3-e5709466666a',
    name: "Concrete Mix – 25 kg bag",
    sku: "CONC-25KG-001",
    category: "Materials",
    quantity: 120,
    unit: 'bag',
    project_id: '40e11098-b5d0-4491-93f0-903f7e651549',
    location_id: 'af856939-9bb9-4bad-876b-54b06ef3d9da',
    price_per_unit: 7.50,
  },
  {
    id: 'ccb9400b-8f64-4777-8a5e-3a3f8d93ea8d',
    name: "Rebar – 12 mm",
    sku: "REB-12MM-002",
    category: "Materials",
    quantity: 350,
    unit: "piece",
    project_id: '7f6f18d6-a96d-4770-93f7-5060b5e5be8a',
    location_id: '04ab4925-9b64-4c15-a33c-4e424ddfdb6b',
    price_per_unit: 1.20,
  },
  {
    id: '3cbe1001-cd43-4c83-b12c-1e86724b5e9f',
    name: "Safety Helmet",
    sku: "SAFE-HELM-003",
    category: "Safety",
    quantity: 45,
    unit: "unit",
    project_id: '5f62b858-7b9f-4ffe-9ebd-68f7e5ca9ff8',
    location_id: 'f1181091-e2d3-411a-92e2-17b3ab089b2d',
    price_per_unit: 22.00,
  },
  {
    id: 'ff2e5e3a-c60a-462d-aa8f-77edac0129d0',
    name: "Insulation Roll – 5 m",
    sku: "INSUL-5M-004",
    category: "Materials",
    quantity: 80,
    unit: "roll",
    project_id: '40e11098-b5d0-4491-93f0-903f7e651549',
    location_id: 'af856939-9bb9-4bad-876b-54b06ef3d9da',
    price_per_unit: 15.75,
  },
  {
    id: '2bd8fc14-4303-448d-9b89-59cf14570dc8',
    name: "Fire Extinguisher – ABC 5 kg",
    sku: "FIRE-ABC-005",
    category: "Safety",
    quantity: 30,
    unit: "unit",
    project_id: '40e11098-b5d0-4491-93f0-903f7e651549',
    location_id: 'af856939-9bb9-4bad-876b-54b06ef3d9da',
    price_per_unit: 45.00,
  },
];

const equipment = [
  {
    id: 'e99abbd6-deb6-4f29-9835-c7b517ef24c4',
    name: "Excavator – CAT 320",
    serial_number: "EXC-CAT-320-001",
    type: "Heavy Machinery",
    status: "Available",
    category: "Excavation",
    project_id: '40e11098-b5d0-4491-93f0-903f7e651549',
    location_id: 'af856939-9bb9-4bad-876b-54b06ef3d9da',
    purchase_price: 85_000.00,
    purchase_date: "2022-03-15",
    last_maintenance: "2024-11-01",
  },
  {
    id: 'a15e85c4-85ed-4ec8-a038-a8ff9afa9c6e',
    name: "Cranes – Liebherr LTM 1100",
    serial_number: "CRN-LIE-1100-002",
    type: "Heavy Machinery",
    status: "In Use",
    category: "Lifting",
    project_id: '7f6f18d6-a96d-4770-93f7-5060b5e5be8a',
    location_id: '04ab4925-9b64-4c15-a33c-4e424ddfdb6b',
    purchase_price: 210_000.00,
    purchase_date: "2021-07-22",
    last_maintenance: "2024-09-10",
  },
  {
    id: 'b3b2fd10-81cf-423f-bbe4-16c512b0edea',
    name: "Laser Level",
    serial_number: "LAS-LEVEL-003",
    type: "Tool",
    status: "Available",
    category: "Survey",
    project_id: '5f62b858-7b9f-4ffe-9ebd-68f7e5ca9ff8',
    location_id: 'f1181091-e2d3-411a-92e2-17b3ab089b2d',
    purchase_price: 480.00,
    purchase_date: "2023-01-05",
    last_maintenance: "2024-12-12",
  },
  {
    id: '2e31ccf5-9953-4240-aaaf-6ffcf1093941',
    name: "Scissor Lift – Genie",
    serial_number: "SL-GENIE-004",
    type: "Equipment",
    status: "Maintenance",
    category: "Access",
    project_id: '40e11098-b5d0-4491-93f0-903f7e651549',
    location_id: 'c6641fe0-30c0-4548-85bc-b4b965a9ebe9',
    purchase_price: 12_300.00,
    purchase_date: "2020-09-30",
    last_maintenance: "2024-08-20",
  },
  {
    id: '480ce3d1-3b87-44f0-ac62-58ce521437aa',
    name: "Concrete Mixer – Portable",
    serial_number: "CMX-PORT-005",
    type: "Equipment",
    status: "Available",
    category: "Mixing",
    project_id: '7f6f18d6-a96d-4770-93f7-5060b5e5be8a',
    location_id: 'af856939-9bb9-4bad-876b-54b06ef3d9da',
    purchase_price: 3_750.00,
    purchase_date: "2022-11-11",
    last_maintenance: "2024-10-05",
  },
];

const projects = [
  {
    id: '40e11098-b5d0-4491-93f0-903f7e651549',
    title: "Downtown Office Tower",
    description: "30‑story mixed‑use tower in the city centre.",
    client_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    parent_id: null,
  },
  {
    id: '7f6f18d6-a96d-4770-93f7-5060b5e5be8a',
    title: "Riverfront Warehouse Complex",
    description: "Logistics hub with 5 000 sqm storage space.",
    client_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    parent_id: null,
  },
  {
    id: '5f62b858-7b9f-4ffe-9ebd-68f7e5ca9ff8',
    title: "Suburban School Renovation",
    description: "Upgrade of classrooms and facilities for a K‑12 school.",
    client_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    parent_id: null,
  },
];

const sites = [
  {
    id: 'af856939-9bb9-4bad-876b-54b06ef3d9da',
    name: "Office Tower – Site A",
    address: "123 Main St, Metropolis, NY 10001",
    project_id: '40e11098-b5d0-4491-93f0-903f7e651549',
  },
  {
    id: '04ab4925-9b64-4c15-a33c-4e424ddfdb6b',
    name: "Warehouse Complex – Site B",
    address: "456 River Rd, Rivertown, TX 75002",
    project_id: '7f6f18d6-a96d-4770-93f7-5060b5e5be8a',
  },
  {
    id: 'f1181091-e2d3-411a-92e2-17b3ab089b2d',
    name: "School Renovation – Site C",
    address: "789 Oak Ave, Suburbia, CA 90210",
    project_id: '5f62b858-7b9f-4ffe-9ebd-68f7e5ca9ff8',
  },
  {
    id: 'c6641fe0-30c0-4548-85bc-b4b965a9ebe9',
    name: "Company Headquarters",
    address: "101 Corporate Plaza, Capital City, DC 20001",
    project_id: null, // office not tied to a specific project
  },
  {
    id: '235abf94-341a-4b45-8743-21d59c7be8af',
    name: "Central Warehouse",
    address: "202 Distribution Ln, Industrial Park, IL 60007",
    project_id: null, // general storage location
  },
];

const clients = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

export { users, customers, invoices, revenue, inventory, equipment, projects, sites, clients };
