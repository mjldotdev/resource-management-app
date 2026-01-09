import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { invoices, customers, revenue, users, inventory, equipment } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedInvoices() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedInvoices;
}

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
}

async function seedInventory() {
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS inventory (
      name VARCHAR(255) NOT NULL,
      sku VARCHAR(255) PRIMARY KEY,
      category VARCHAR(255) NOT NULL,
      quantity NUMERIC NOT NULL,
      location VARCHAR(255) NOT NULL,
      price_per_unit NUMERIC(12,2) NOT NULL
    );
  `;

  const insertedInventory = await Promise.all(
    inventory.map(
      (inventory) => sql`
        INSERT INTO inventory (name, sku, category, quantity, location, price_per_unit)
        VALUES (${inventory.name}, ${inventory.sku}, ${inventory.category}, ${inventory.quantity}, ${inventory.location}, ${inventory.price_per_unit})
        ON CONFLICT (sku) DO NOTHING;
      `,
    ),
  );

  return insertedInventory;
}

async function seedEquipment() {
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS equipment (
      name VARCHAR(255) NOT NULL,
      serial_number VARCHAR(255) PRIMARY KEY,
      type VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      purchase_date DATE NOT NULL,
      last_maintenance DATE NOT NULL
    );
  `;

  const insertedEquipment = await Promise.all(
    equipment.map(
      (equipment) => sql`
        INSERT INTO equipment (name, serial_number, type, status, location, purchase_date, last_maintenance)
        VALUES (${equipment.name}, ${equipment.serial_number}, ${equipment.type}, ${equipment.status}, ${equipment.location}, ${equipment.purchase_date}, ${equipment.last_maintenance})
        ON CONFLICT (serial_number) DO NOTHING;
      `,
    ),
  );

  return insertedEquipment;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedCustomers(),
      seedInvoices(),
      seedRevenue(),
      seedInventory(),
      seedEquipment(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
