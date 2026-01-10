import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { invoices, customers, revenue, users, inventory, equipment, projects, sites, clients } from '../lib/placeholder-data';

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
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      sku VARCHAR(255) NOT NULL UNIQUE,
      category VARCHAR(255) NOT NULL,
      quantity NUMERIC NOT NULL,
      unit VARCHAR(255) NOT NULL,
      project_id UUID REFERENCES projects(id),
      location_id UUID REFERENCES sites(id),
      price_per_unit NUMERIC(12,2) NOT NULL
    );
  `;

  const insertedInventory = await Promise.all(
    inventory.map(
      (inv) => sql`
        INSERT INTO inventory (id, name, sku, category, quantity, unit, project_id, location_id, price_per_unit)
        VALUES (${inv.id}, ${inv.name}, ${inv.sku}, ${inv.category}, ${inv.quantity}, ${inv.unit}, ${inv.project_id}, ${inv.location_id}, ${inv.price_per_unit})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedInventory;
}

async function seedEquipment() {
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS equipment (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      serial_number VARCHAR(255) NOT NULL UNIQUE,
      type VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      project_id UUID REFERENCES projects(id),
      location_id UUID REFERENCES sites(id),
      purchase_price NUMERIC(12,2),
      purchase_date DATE NOT NULL,
      last_maintenance DATE NOT NULL
    );
  `;

  const insertedEquipment = await Promise.all(
    equipment.map(
      (eq) => sql`
        INSERT INTO equipment (id, name, serial_number, type, status, category, project_id, location_id, purchase_price, purchase_date, last_maintenance)
        VALUES (${eq.id}, ${eq.name}, ${eq.serial_number}, ${eq.type}, ${eq.status}, ${eq.category}, ${eq.project_id}, ${eq.location_id}, ${eq.purchase_price}, ${eq.purchase_date}, ${eq.last_maintenance})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedEquipment;
}

async function seedProjects() {
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS projects (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      client_id UUID REFERENCES clients(id) NOT NULL,
      parent_id UUID REFERENCES projects(id)
    );
  `;

  const insertedProjects = await Promise.all(
    projects.map(
      (project) => sql`
        INSERT INTO projects (id, title, description, client_id, parent_id)
        VALUES (${project.id}, ${project.title}, ${project.description}, ${project.client_id}, ${project.parent_id})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedProjects;
}

async function seedSites() {
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS sites (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address TEXT NOT NULL,
      project_id UUID REFERENCES projects(id)
    );
  `;

  const insertedSites = await Promise.all(
    sites.map(
      (site) => sql`
        INSERT INTO sites (id, name, address, project_id)
        VALUES (${site.id}, ${site.name}, ${site.address}, ${site.project_id})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedSites;
}

async function seedClients() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS clients (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedClients = await Promise.all(
    clients.map(
      (client) => sql`
        INSERT INTO clients (id, name, email, image_url)
        VALUES (${client.id}, ${client.name}, ${client.email}, ${client.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedClients;
}


export async function GET() {
  try {
    const result = await sql.begin(async (sql) => {
      // 1️⃣ create tables (no data yet)
      await seedUsers();
      await seedClients();
      await seedProjects();   // needs clients
      await seedSites();      // needs projects
      await seedCustomers();
      await seedInvoices();   // needs customers
      await seedRevenue();

      // 2️⃣ now create tables that reference the above
      await seedInventory();  // needs projects & sites
      await seedEquipment();  // needs projects & sites

      // 3️⃣ optionally insert data after all tables exist
      // (your seed* functions already insert data after creation)
    });

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
