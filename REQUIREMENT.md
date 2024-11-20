# **Dynamic Entity Management Application**

## **Table of Contents**

1. [Overview](#overview)
2. [System Architecture](#system-architecture)
3. [Backend Requirements (Node.js with Express)](#backend-requirements-nodejs-with-express)
   - [Core Features](#core-features)
   - [Entity Management](#entity-management)
   - [Field Management](#field-management)
   - [Relationship Management](#relationship-management)
   - [CRUD Operations with Hooks](#crud-operations-with-hooks)
   - [Data Querying](#data-querying)
   - [Authentication and Authorization](#authentication-and-authorization)
   - [Entity Metadata](#entity-metadata)
4. [Frontend Requirements (React.js)](#frontend-requirements-reactjs)
   - [SDK Development](#sdk-development)
   - [Entity and Field Management](#entity-and-field-management)
   - [Relationship Management](#relationship-management-1)
   - [Record Management and Querying](#record-management-and-querying)
5. [API Specifications](#api-specifications)
6. [Technical Stack](#technical-stack)
7. [Success Metrics](#success-metrics)

---

## **Overview**

The Dynamic Entity Management Application allows users to:

- Define custom entities dynamically.
- Add fields to these entities.
- Create relationships between entities.
- Perform CRUD operations with hooks for customization.
- Query and display paginated and sorted results.

The application consists of a **backend (Node.js with Express)** and a **frontend (React.js)**, along with a **frontend SDK** to abstract API calls.

---

## **System Architecture**

```plaintext
+----------------------+        +-----------------------+
|  Frontend (React.js) | <----> | Backend (Node.js)     |
|  - User Interface    |        | - REST API           |
|  - SDK for API Calls |        | - Entity Metadata    |
+----------------------+        +-----------------------+
         |
         v
  +-------------------+
  | Database (Postgres|
  | or MongoDB)       |
  +-------------------+
```

---

## **Backend Requirements (Node.js with Express)**

### **Core Features**

#### **1. Entity Management**

- **Endpoints**:
  - `POST /entities`: Create a new entity.
  - `GET /entities`: List all entities.
  - `PUT /entities/:id`: Update an entity.
  - `DELETE /entities/:id`: Delete an entity.
- **Logic**:
  - Maintain metadata in a dedicated table (`entity_metadata`).
  - Create tables/collections dynamically based on entity definitions.

#### **2. Field Management**

- **Endpoints**:
  - `POST /entities/:id/fields`: Add a field to an entity.
  - `PUT /entities/:id/fields/:field_id`: Update a field.
  - `DELETE /entities/:id/fields/:field_id`: Delete a field.
- **Logic**:
  - Support field types: string, integer, float, boolean, date, JSON.
  - Store field configuration (e.g., required, default value, validations).

#### **3. Relationship Management**

- **Endpoints**:
  - `POST /relationships`: Define a relationship.
  - `GET /relationships`: List all relationships.
- **Logic**:
  - Support One-to-One, One-to-Many, and Many-to-Many relationships.
  - Handle cascading CRUD operations.

#### **4. CRUD Operations with Hooks**

- **Endpoints**:
  - `POST /entities/:id/records`: Create a record.
  - `GET /entities/:id/records`: Read records with filters, pagination, and sorting.
  - `PUT /entities/:id/records/:record_id`: Update a record.
  - `DELETE /entities/:id/records/:record_id`: Delete a record.
- **Logic**:
  - Implement pre/post-operation hooks for custom logic.
  - Ensure validation and data integrity.

#### **5. Data Querying**

- **Endpoints**:
  - `GET /entities/:id/records`: Support filtering, sorting, and pagination.
- **Logic**:
  - Implement full-text search and range queries (e.g., date range).
  - Index fields for faster querying.

#### **6. Authentication and Authorization**

- Implement user authentication (e.g., JWT).
- Role-based access control for entity and data-level permissions.

#### **7. Entity Metadata**

**Overview**

The `entity_metadata` table serves as the backbone of the dynamic entity management system. It defines the structure, behavior, and relationships of user-defined entities, enabling dynamic creation and management of data schemas.

---

**Schema Definition**

| **Column**      | **Type**          | **Description**                                                 |
| --------------- | ----------------- | --------------------------------------------------------------- |
| `id`            | UUID/Primary Key  | Unique identifier for the entity.                               |
| `name`          | String            | Name of the entity.                                             |
| `display_name`  | String            | Human-readable name of the entity for UI purposes.              |
| `description`   | String (optional) | Optional description of the entity.                             |
| `fields`        | JSON              | JSON array of field definitions.                                |
| `created_at`    | Timestamp         | Timestamp of when the entity was created.                       |
| `updated_at`    | Timestamp         | Timestamp of when the entity was last updated.                  |
| `relationships` | JSON (optional)   | JSON array defining relationships with other entities (if any). |
| `is_active`     | Boolean           | Indicates whether the entity is active or soft-deleted.         |

---

## **Example: `entity_metadata` Table**

### **Entity: `Product`**

```json
{
  "id": "1a2b3c4d-5678-90ab-cdef-1234567890ab",
  "name": "product",
  "display_name": "Product",
  "description": "Represents a product in the catalog",
  "fields": [
    {
      "name": "name",
      "type": "string",
      "is_required": true,
      "default_value": null,
      "validation": {
        "min_length": 1,
        "max_length": 255
      }
    },
    {
      "name": "price",
      "type": "float",
      "is_required": true,
      "default_value": null,
      "validation": {
        "min_value": 0.01
      }
    },
    {
      "name": "category",
      "type": "string",
      "is_required": false,
      "default_value": "General",
      "validation": null
    },
    {
      "name": "in_stock",
      "type": "boolean",
      "is_required": true,
      "default_value": true,
      "validation": null
    }
  ],
  "relationships": [
    {
      "type": "one-to-many",
      "target_entity": "review",
      "foreign_key": "product_id"
    }
  ],
  "created_at": "2024-11-20T10:00:00Z",
  "updated_at": "2024-11-20T10:00:00Z",
  "is_active": true
}
```

**Use Cases**

1. Dynamically Generating Tables
   The backend can use the entity_metadata to create a corresponding database table for the product entity. The table schema might look like this:

| Field Name | Data Type    | Required | Default   |
| ---------- | ------------ | -------- | --------- |
| id         | UUID         | Yes      | Auto-gen  |
| name       | VARCHAR(255) | Yes      | Null      |
| price      | FLOAT        | Yes      | Null      |
| category   | VARCHAR(255) | No       | "General" |
| in_stock   | BOOLEAN      | Yes      | True      |

2. CRUD Operations

- Create: When adding a new product, the backend validates the input against the fields metadata and inserts it into the product table.
- Read: Fetch product records using pagination and filters (e.g., price range).
- Update: Update specific fields, ensuring validation rules are respected.
- Delete: Soft delete (set is_active to false) or hard delete records.

3. Querying Data

- Using metadata, the backend can dynamically construct queries for operations like:

Filtering products based on price or stock status.
Sorting products alphabetically by name or numerically by price.
Example API query:

```bash
GET /entities/product/data?filter={"price":{"gte":10}}&sort={"price":"asc"}&page=1&page_size=10
```

4. Relationships

The relationships field in the metadata defines links to other entities, like a Review entity. For instance:

- When a product is deleted, cascade the deletion to associated reviews.
- Fetch all reviews for a product using a JOIN query based on the product_id.

---

## **Frontend Requirements (React.js)**

### **SDK Development**

- **Purpose**: Provide an abstraction layer for API communication using the Fetch API.
- **Key Features**:
  - Utility methods for CRUD operations (`createEntity`, `getRecords`, etc.).
  - Error handling and retries for failed requests.
  - Token management for authentication.

#### **SDK Example**:

```javascript
class EntitySDK {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  async request(endpoint, options = {}) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  }

  createEntity(data) {
    return this.request("/entities", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  getEntities() {
    return this.request("/entities");
  }

  // Other CRUD methods...
}
```

---

### **Entity and Field Management**

- **UI Features**:
  - Dynamic forms for creating/editing entities and fields.
  - Validation rules and default value configurations.
- **Integration**:
  - Use SDK for API requests to manage entities and fields.

### **Relationship Management**

- **UI Features**:
  - Visual editor for defining relationships (e.g., drag-and-drop).
  - Display existing relationships (ER diagrams).
- **Integration**:
  - Use SDK for relationship-related API calls.

### **Record Management and Querying**

- **UI Features**:
  - Data table for viewing records with pagination and sorting.
  - Filter options for searching records by field values.
- **Integration**:
  - Use SDK for CRUD operations and querying.

---

## **API Specifications**

### **Entity Management**

- **POST /entities**: Create a new entity.
- **GET /entities**: List all entities.
- **PUT /entities/:id**: Update an entity.
- **DELETE /entities/:id**: Delete an entity.

### **Field Management**

- **POST /entities/:id/fields**: Add a field.
- **PUT /entities/:id/fields/:field_id**: Update a field.
- **DELETE /entities/:id/fields/:field_id**: Delete a field.

### **Relationship Management**

- **POST /relationships**: Create a relationship.
- **GET /relationships**: List all relationships.

### **Record Management**

- **POST /entities/:id/records**: Add a record.
- **GET /entities/:id/records**: Get records (with filters, pagination).
- **PUT /entities/:id/records/:record_id**: Update a record.
- **DELETE /entities/:id/records/:record_id**: Delete a record.

---

## **Technical Stack**

- **Backend**: Node.js (Express.js), Kysely or DrizzleOrm or Prisma
- **Validation**: zod
- **Frontend**: React.js
- **Database**: MySQL or MongoDB
- **Authentication**: JWT
- **Deployment**: Docker, AWS

---

## **Success Metrics**

1. **Functional Metrics**:
   - Number of entities, fields, and relationships supported.
   - Response times for CRUD operations and queries.
2. **User Experience**:
   - Intuitive UI for defining and managing entities.
   - Customization options via hooks.
3. **Scalability**:
   - Performance for datasets with millions of records.
   - Support for concurrent users and API calls.
