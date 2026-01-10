// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type InventoryItem = {
  id: string;               // UUID
  name: string;
  sku: string;
  category: string;
  quantity: string;         // kept as string to match original data
  unit: string;
  project_id: string | null; // UUID – may be null if not linked
  location_id: string | null; // UUID – may be null if not linked
  price_per_unit: number;
};

export type EquipmentItem = {
  id: string;               // UUID
  name: string;
  serial_number: string;
  type: string;
  status: string;
  category: string;
  project_id: string | null; // UUID
  location_id: string | null; // UUID
  purchase_price: number | null;
  purchase_date: string;    // ISO date (YYYY‑MM‑DD)
  last_maintenance: string; // ISO date
};

export type Project = {
  id: string;               // UUID
  title: string;
  description: string;
  client_id: string;        // UUID referencing client table
  parent_id: string | null; // UUID – self‑reference for sub‑projects
};

export type Site = {
  id: string;               // UUID
  name: string;
  address: string;
  project_id: string | null; // UUID – may be null for non‑project sites
};

export type Client = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};
