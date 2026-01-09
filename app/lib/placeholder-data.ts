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
  { name: 'Reinforcing Steel Bars', sku: 'CM-001', category: 'structural', quantity: 1200, unit: 'kg', location: 'Warehouse A', price_per_unit: 1.45 },
  { name: 'Concrete Mix (dry)',     sku: 'CM-002', category: 'structural', quantity: 8000, unit: 'kg', location: 'Warehouse B', price_per_unit: 0.12 },
  { name: 'Portland Cement',        sku: 'CM-003', category: 'structural', quantity: 5000, unit: 'kg', location: 'Warehouse A', price_per_unit: 0.10 },
  { name: 'Sand (river)',           sku: 'CM-004', category: 'aggregate',  quantity: 15000, unit: 'kg', location: 'Warehouse C', price_per_unit: 0.03 },
  { name: 'Gravel (coarse)',        sku: 'CM-005', category: 'aggregate',  quantity: 12000, unit: 'kg', location: 'Warehouse C', price_per_unit: 0.04 },
  { name: 'Bricks (red)',           sku: 'CM-006', category: 'finishing', quantity: 25000, unit: 'pcs', location: 'Warehouse B', price_per_unit: 0.25 },
  { name: 'Drywall Panels',         sku: 'CM-007', category: 'finishing', quantity: 4000, unit: 'pcs', location: 'Warehouse A', price_per_unit: 3.20 },
  { name: 'Insulation Roll',        sku: 'CM-008', category: 'finishing', quantity: 600, unit: 'sqm', location: 'Warehouse B', price_per_unit: 5.10 },
  { name: 'Timber Beams (2x6)',     sku: 'CM-009', category: 'structural', quantity: 350, unit: 'pcs', location: 'Warehouse C', price_per_unit: 12.75 },
];

const equipment = [
  { name: 'Excavator',               serial_number: 'EQ-001', type: 'heavy',      status: 'operational',      location: 'Site Alpha', purchase_date: '2022-04-12', last_maintenance: '2025-11-02' },
  { name: 'Crawler Crane',           serial_number: 'EQ-002', type: 'heavy',      status: 'maintenance due',  location: 'Site Beta',  purchase_date: '2021-09-05', last_maintenance: '2025-09-15' },
  { name: 'Concrete Mixer Truck',    serial_number: 'EQ-003', type: 'vehicle',    status: 'operational',      location: 'Depot',      purchase_date: '2023-01-20', last_maintenance: '2025-12-01' },
  { name: 'Bulldozer',               serial_number: 'EQ-004', type: 'heavy',      status: 'operational',      location: 'Site Gamma', purchase_date: '2020-06-18', last_maintenance: '2025-10-10' },
  { name: 'Tower Crane',             serial_number: 'EQ-005', type: 'heavy',      status: 'operational',      location: 'Site Alpha', purchase_date: '2022-11-30', last_maintenance: '2025-11-20' },
  { name: 'Compactor (Roller)',      serial_number: 'EQ-006', type: 'equipment',  status: 'operational',      location: 'Depot',      purchase_date: '2023-07-14', last_maintenance: '2025-09-05' },
  { name: 'Scissor Lift',            serial_number: 'EQ-007', type: 'equipment',  status: 'maintenance due',  location: 'Site Beta',  purchase_date: '2021-03-22', last_maintenance: '2025-08-28' },
  { name: 'Generator Set',           serial_number: 'EQ-008', type: 'utility',    status: 'operational',      location: 'Depot',      purchase_date: '2020-12-01', last_maintenance: '2025-07-15' },
  { name: 'Laser Level',             serial_number: 'EQ-009', type: 'tool',       status: 'operational',      location: 'Site Gamma', purchase_date: '2024-02-10', last_maintenance: '2025-12-08' },
  { name: 'Survey Total Station',    serial_number: 'EQ-010', type: 'instrument', status: 'operational',      location: 'Office',    purchase_date: '2023-05-05', last_maintenance: '2025-11-30' }
];

export { users, customers, invoices, revenue, inventory, equipment };
