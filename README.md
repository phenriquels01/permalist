# Permalist - Persistent Task Manager

## 🎯 Project Description

Never forget a task again! Permalist is a persistent daily organizer that helps you manage your tasks effectively.

## 📦 Deliverables

- Full-stack Node.js/Express application
- PostgreSQL database integration
- CRUD (Create-Read-Update-Delete) operations
- Responsive task interface

## 🚀 Key Features

- ✅ Create and manage unlimited todo items
- ✏️ Edit existing tasks with one click
- 🗑️ Archive completed items

## 🛠️ Technologies Used

| Component              | Technology                          |
|------------------------|-------------------------------------|
| **Backend Framework**  | Node.js + Express.js                |
| **Database**           | PostgreSQL                          |
| **Templating**         | EJS                                 |
| **Styling**            | CSS3                                |


## ⚙️ Installation & Setup

### 1. Clone or Download this Repository

   ```bash
   git clone https://github.com/phenriquels01/permalist.git
   cd permalist
   ```

### 2. Configure Environment Variables

#### 2.1: Create and edit `.env` file
Create a `.env` file in the project root (same directory as `index.js`) and edit the file with the following content:

```
.env
DB_USER=your_postgres_user
DB_HOST=localhost
DB_NAME=permalist
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

**Notes:**
- Replace `your_postgres_user` and `your_postgres_password` with your actual credentials
- Keep `DB_HOST` as `localhost` for local environment

### 3. Database Setup

#### 3.1 Create World Database

```bash
createdb -U postgres permalist
```

#### 3.2 Execute SQL Script

```bash
psql -U postgres -d permalist -f queries.sql
```

**Important Notes:**
- Ensure CSV file is in the `root` directory
- Verify PostgreSQL user has file read permissions
- The queries.sql file contains the database schema and seed data for initial setup. If using a custom data path, update the script accordingly.

### 4. Install Dependencies

In the project root, execute:

```bash
npm install
```

*Development tip:*

```bash
npm install -g nodemon
```

### 5. Run the Application

Start the server:

```bash
nodemon index.js
```

or

```bash
node index.js
```

Once the server is running, open your browser and go to: *http://localhost:3000*



