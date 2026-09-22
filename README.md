<h1 align="center">✨ Shine Clinic — Full-Stack Dermatology Platform 🩺</h1>

<p align="center">
  <em>A modern dermatology platform with consultation booking, dynamic treatment & concern pages, blog CMS, and a secure admin dashboard.</em>
</p>

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.x-000000?style=for-the-badge\&logo=next.js\&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-7.x-2D3748?style=for-the-badge\&logo=prisma\&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17.x-4169E1?style=for-the-badge\&logo=postgresql\&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-FF0055?style=for-the-badge\&logo=framer\&logoColor=white)](https://motion.dev/)

</div>

---

## 🩺 What is Shine Clinic?

**Shine Clinic** is a full-stack dermatology platform built to connect the patient experience with the clinic's internal workflow.

It isn't just a clinic website — the project combines a **patient-facing platform** with a **secure admin system** for managing consultations and publishing content.

### ✦ The Experience

```text
👤 Patient
   │
   ├── Explore Treatments & Concerns
   ├── Read Dermatology Articles
   ├── Learn About the Clinic
   └── Book a Consultation
                    │
                    ▼
             🗄️ PostgreSQL
                    │
                    ▼
             🔐 Admin Dashboard
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
   📅 Consultations       ✍️ Blog CMS
   Manage Requests        Create & Edit
                          Published Content
```

### ⚡ Built Around Three Core Experiences

| 🌐 Patient Experience | 📅 Consultation System | 🔐 Admin Platform     |
| --------------------- | ---------------------- | --------------------- |
| Treatments & concerns | Multi-step booking     | Secure authentication |
| Dynamic content       | Consultation tracking  | Blog management       |
| Dermatology blogs     | Request status         | Rich-text editor      |
| Clinic information    | Patient details        | Content publishing    |

> **One platform. Two sides. One shared database.**

---

## ✨ Features

### 🌐 Patient Experience

* **Dynamic Treatment Pages** — Detailed, data-driven pages for individual dermatology treatments.
* **Concern-Based Navigation** — Dedicated pages for common skin and hair concerns.
* **Multi-Step Consultation Booking** — Guided booking flow from concern selection to request submission.
* **Responsive UI** — Designed for a consistent experience across desktop and mobile.
* **Animated Interactions** — Subtle Framer Motion animations throughout the experience.
* **Dermatology Blog** — Browse articles and open individual dynamic blog pages.

### 🔐 Admin Dashboard

* **Secure Admin Authentication** — Protected dashboard with HTTP-only JWT sessions.
* **Consultation Management** — View consultation requests and update their status.
* **Blog CMS** — Create, edit, publish, and manage dermatology articles.
* **Rich Text Editor** — Tiptap-powered editor for structured blog content.
* **SEO Management** — Blog-level metadata including descriptions, canonical URLs and Open Graph fields.
* **Role-Based Access** — Admin-only access to protected management features.

### ⚙️ Engineering

* **Data-Driven Architecture** — Treatments, concerns, and website content are separated from UI components.
* **Dynamic Routing** — Next.js dynamic routes for treatments, concerns, and blogs.
* **Server Actions** — Server-side mutations for authentication, bookings, consultations, and content management.
* **Prisma + PostgreSQL** — Structured relational data model with indexed entities.
* **Reusable Components** — Shared UI and section components across the platform.

---

## 🌐 Public Website

The public application is the **patient-facing layer of Shine Clinic**, built with Next.js and structured around reusable, data-driven content rather than individually hardcoded pages.

It combines **dynamic treatment and concern pages, a content-driven blog, clinic information, and the consultation workflow** into a single patient experience.

### 🧩 Application Architecture

```mermaid
graph TD
    A["🌐 Public Website"] --> B["🏠 Core Pages"]
    A --> C["🧴 Treatment System"]
    A --> D["🔍 Concern System"]
    A --> E["✍️ Blog System"]
    A --> F["📅 Booking System"]

    B --> B1["Home"]
    B --> B2["About"]
    B --> B3["Clinic"]
    B --> B4["Contact"]

    C --> C1["/treatments"]
    C --> C2["/treatments/[slug]"]

    D --> D1["/concerns"]
    D --> D2["/concerns/[slug]"]

    E --> E1["/blogs"]
    E --> E2["/blogs/[slug]"]

    F --> F1["Multi-step Booking"]
    F --> F2["Consultation Request"]

    C --> G["🧱 Reusable Components"]
    D --> G
    E --> G
    F --> G

    F2 --> H["⚙️ Server Action"]
    H --> I[("PostgreSQL")]
```

### 🗺️ Route Structure

The public application uses a combination of **static routes and dynamic routes**:

```text
/
├── /about
├── /clinic
├── /contact
├── /book-consultation
│
├── /treatments
│   └── /treatments/[slug]
│
├── /concerns
│   └── /concerns/[slug]
│
└── /blogs
    └── /blogs/[slug]
```

The `[slug]` routes allow multiple treatments, concerns, and articles to share the same page architecture while rendering different content.


### ⚡ Public-Side Engineering

| Area            | Implementation                                  |
| --------------- | ----------------------------------------------- |
| **Framework**   | Next.js App Router                              |
| **Routing**     | Static + dynamic `[slug]` routes                |
| **UI**          | Reusable React components                       |
| **Styling**     | Tailwind CSS                                    |
| **Animations**  | Framer Motion                                   |
| **Icons**       | Lucide React                                    |
| **Content**     | Structured data modules + database-backed blogs |
| **Booking**     | Multi-step client flow + Server Action          |
| **Persistence** | Prisma + PostgreSQL                             |

---

## 📅 Consultation Booking

The consultation system is the main **patient-to-clinic workflow** of the platform.

Instead of treating booking as a simple contact form, the website guides the patient through a structured four-step process, validates the request, persists it through a server-side action, and makes the submitted consultation available inside the admin dashboard.

### 🧭 Patient Booking Journey

```mermaid
flowchart LR
    A["01<br/>Your Concern"] --> B["02<br/>About You"]
    B --> C["03<br/>Preferred Visit"]
    C --> D["04<br/>Review & Request"]
    D --> E["✅ Consultation Request"]

    A -.-> A1["Select concern"]
    B -.-> B1["Name · Phone · Email"]
    C -.-> C1["Preferred date & time"]
    D -.-> D1["Review submitted details"]

    style A fill:#f8fafc,stroke:#94a3b8
    style B fill:#f8fafc,stroke:#94a3b8
    style C fill:#f8fafc,stroke:#94a3b8
    style D fill:#f8fafc,stroke:#94a3b8
    style E fill:#dcfce7,stroke:#22c55e
```

The booking configuration defines four dedicated stages:

```text
01  Your Concern
        ↓
02  About You
        ↓
03  Preferred Visit
        ↓
04  Review & Request
```

This keeps the patient flow focused while allowing each stage to handle a specific group of inputs.

### 🧩 Booking Component Structure

The booking experience is broken into dedicated components rather than being implemented as one large form.

```text
book-consultation/
│
├── BookingForm
│   ├── BookingProgress
│   ├── ConcernStep
│   ├── PersonalDetailsStep
│   ├── PreferredVisitStep
│   ├── BookingReview
│   ├── BookingSuccess
│   └── BookingError
│
└── Server Action
        │
        ▼
      Prisma
        │
        ▼
    PostgreSQL
```

This separation keeps the individual steps easier to maintain while allowing the overall booking flow to remain a single patient experience.

---

## 🧴 Treatments & Concerns

The public website uses a **data-driven page architecture** for treatments and patient concerns. Instead of building every page independently, shared page structures consume structured content and render the appropriate experience based on the requested slug.

This allows the platform to support a growing treatment and concern library without duplicating the underlying page implementation.

### 🗺️ Dynamic Page Architecture

```mermaid id="9k2m1p"
flowchart LR
    A["🌐 /treatments"] --> B["Select Treatment"]
    B --> C["/treatments/[slug]"]

    D["🌐 /concerns"] --> E["Select Concern"]
    E --> F["/concerns/[slug]"]

    C --> G["Resolve Content"]
    F --> G

    G --> H["Reusable Page Sections"]
    H --> I["Patient-facing Page"]

    H --> H1["Hero"]
    H --> H2["Overview"]
    H --> H3["Treatment Areas"]
    H --> H4["Who Is It For?"]
    H --> H5["What to Expect"]
    H --> H6["Related Content"]
    H --> H7["CTA"]
```

### 📦 Structured Content → Dynamic UI

The content is separated from the presentation layer.

```text id="m7g4xq"
data/
│
├── treatmentsDetails/
│   ├── dermal-fillers
│   ├── chemical-peel
│   ├── fractional-co2
│   ├── face-prp
│   └── ...
│
└── concernsDetails/
    ├── acne-acne-scars
    ├── hair-loss-thinning
    ├── pigmentation-melasma
    ├── psoriasis
    └── ...
             │
             ▼
       Dynamic Route
          [slug]
             │
             ▼
      Content Resolver
             │
             ▼
      Reusable Sections
             │
             ▼
       Final Page
```

### 🔗 Related Content

The architecture also allows individual pages to connect visitors with related treatments or concerns, creating a more connected browsing experience instead of treating every page as an isolated destination.

```mermaid id="c6v2rm"
graph TD
    A["🧴 Treatment"] --> B["Related Treatment"]
    A --> C["🔍 Related Concern"]

    C --> D["Recommended Treatment"]
    B --> E["Treatment Detail"]

    E --> F["📅 Book Consultation"]
    D --> F
```



> **One page architecture. Many treatments and concerns.**

---

## ✍️ Public Blog Experience

The blog system connects the **public website with the clinic's content layer**, allowing published dermatology articles to be discovered through a central listing and rendered through dynamic article pages.

The public side is intentionally focused on **content consumption**, while creation and management are handled later through the admin CMS.

### 🗺️ Blog Architecture

```mermaid
flowchart LR
    A["🗄️ Blog Content"] --> B["Published Articles"]
    B --> C["/blogs"]
    B --> D["/blogs/[slug]"]

    C --> E["Article Cards"]
    E --> D

    D --> F["Article Content"]
    F --> G["SEO Metadata"]
    F --> H["Related Content"]

    style A fill:#eff6ff,stroke:#3b82f6
    style C fill:#f8fafc,stroke:#94a3b8
    style D fill:#f8fafc,stroke:#94a3b8
```

### 🔗 Listing → Dynamic Article

The public blog has two primary routes:

```text
/blogs
   │
   ├── Article Card
   ├── Article Card
   ├── Article Card
   └── Article Card
          │
          ▼
    /blogs/[slug]
          │
          ├── Title
          ├── Excerpt
          ├── Featured Image
          ├── Article Content
          ├── Category
          └── SEO / Open Graph Metadata
```

The `[slug]` route allows each published article to have its own shareable URL while using the same underlying article-page architecture.

> **Admin creates and manages → Database stores → Public website presents**

### 🔎 Article Metadata

Each blog record supports more than just article content. The public experience can use structured metadata including:

* Article title and slug
* Excerpt
* Featured image and image alt text
* Category
* Publication status and date
* SEO title and description
* Canonical URL
* Open Graph metadata



> **The public blog is the presentation layer; the Admin CMS is the publishing layer.**

---

## 🔐 Admin Dashboard

The Admin Dashboard is the **internal operations layer** of Shine Clinic.

While the public website handles the patient experience, the admin application gives the clinic team a centralized interface to **manage consultation requests, maintain blog content, and control access to internal functionality**.

### 🧩 Admin Application Architecture

```mermaid id="r6j3qp"
graph TD
    A["🔐 Admin Dashboard"] --> B["📊 Dashboard"]
    A --> C["📅 Consultations"]
    A --> D["✍️ Blog CMS"]
    A --> E["🔑 Authentication"]

    C --> C1["View Requests"]
    C --> C2["Update Status"]
    C --> C3["Consultation Details"]

    D --> D1["Create Blog"]
    D --> D2["Edit Blog"]
    D --> D3["Draft / Publish"]
    D --> D4["SEO Metadata"]

    E --> E1["Admin Login"]
    E --> E2["Session Management"]
    E --> E3["Protected Routes"]

    C --> F[("PostgreSQL")]
    D --> F
    E --> F

    style A fill:#f8fafc,stroke:#94a3b8
    style F fill:#eff6ff,stroke:#3b82f6
```

### 🗂️ Admin Responsibilities

```text id="9z7q4k"
                    🔐 ADMIN DASHBOARD
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
    📅 Consultations   ✍️ Blog CMS    🔑 Authentication
          │                │                │
          ▼                ▼                ▼
    Patient Requests   Content        Secure Access
    Status Tracking    Publishing     Protected Routes
```


**Public Website**
→ collects patient requests and consumes published content.

**Admin Dashboard**
→ manages those requests and creates/publishes content.

**PostgreSQL**
→ acts as the shared persistence layer between both sides.

### 🧱 Admin Application Structure

```text id="x0j7pn"
clinic-admin/
│
├── app/
│   ├── login/
│   ├── (admin)/
│   │   ├── dashboard/
│   │   ├── blogs/
│   │   └── consultations/
│   └── logout/
│
├── components/
│   ├── blog/
│   ├── layout/
│   └── ui/
│
├── lib/
│   ├── auth.js
│   ├── prisma.js
│   └── markdownToHtml.js
│
└── prisma/
    ├── schema.prisma
    └── migrations/
```

The application is organized around **protected admin routes, feature-specific components, server-side actions, authentication utilities, and a shared Prisma data layer**.

### 🔜 Admin Workflows

The dashboard can now be understood through three focused areas:

* **📊 Consultation Management** — review and manage patient consultation requests.
* **✍️ Content Management** — create, edit, organize, and publish blog content.
* **🔑 Admin Authentication** — control access to the protected dashboard.

> **The public website handles the experience. The admin dashboard handles the operations.**

---

## 📊 Consultation Management

The Admin Dashboard turns submitted consultation requests into a manageable **clinic-side workflow**.

Every request created through the public booking system is persisted as a `Consultation` record and becomes available to administrators for review and status management.

### 🔄 From Patient Request to Admin Workflow

```mermaid
flowchart LR
    A["🌐 Patient Booking"] --> B["⚙️ Server Action"]
    B --> C[("🗄️ Consultation")]
    C --> D["🔐 Admin Dashboard"]

    D --> E["📋 Consultation List"]
    D --> F["👤 Consultation Details"]
    D --> G["🔄 Status Update"]

    G --> C

    style A fill:#f8fafc,stroke:#94a3b8
    style C fill:#eff6ff,stroke:#3b82f6
    style D fill:#f8fafc,stroke:#94a3b8
    style G fill:#dcfce7,stroke:#22c55e
```

### 📋 Consultation Management Flow

```text
🌐 Public Website
       │
       │ Patient submits request
       ▼
🗄️ Consultation Record
       │
       │ status = NEW
       ▼
🔐 Admin Dashboard
       │
       ├── View all requests
       │
       ├── Open consultation details
       │
       └── Update consultation status
                    │
                    ▼
              🗄️ Database
```

### 🔄 Status Management

Consultations use a defined status model:

```mermaid
stateDiagram-v2
    [*] --> NEW

    NEW --> CONTACTED
    CONTACTED --> CONFIRMED
    CONFIRMED --> COMPLETED

    NEW --> CANCELLED
    CONTACTED --> CANCELLED
    CONFIRMED --> CANCELLED
```

| Status      | Meaning                          |
| ----------- | -------------------------------- |
| `NEW`       | Newly submitted consultation     |
| `CONTACTED` | Clinic has contacted the patient |
| `CONFIRMED` | Consultation has been confirmed  |
| `COMPLETED` | Consultation workflow completed  |
| `CANCELLED` | Request cancelled                |



This separates **request discovery**, **detailed inspection**, and **status operations** while keeping the admin workflow focused.

### 🔗 Shared Workflow

The important architectural connection is:

> **The public website creates the consultation. The admin dashboard operates on the same persisted record.**

There is no separate consultation system on each side—the two applications interact with the same PostgreSQL-backed data model.

**Patient → Booking → Consultation → Admin → Status**

---

## ✍️ Content Management

The Content Management System gives the clinic team a centralized way to **create, edit, organize, and publish dermatology articles** without modifying the public website code.

The workflow connects the **Admin CMS → Rich Text Editor → Server Actions → PostgreSQL → Public Blog**.

### 📝 Content Publishing Pipeline

```mermaid id="f7m2qx"
flowchart LR
    A["🔐 Admin"] --> B["📝 Create / Edit"]
    B --> C["✍️ Tiptap Editor"]
    C --> D["⚙️ Server Action"]
    D --> E[("🗄️ PostgreSQL")]

    E --> F{"Publication Status"}

    F -->|DRAFT| G["📦 Draft"]
    F -->|PUBLISHED| H["🚀 Public Blog"]

    G --> B
    H --> I["/blogs"]
    H --> J["/blogs/[slug]"]

    style A fill:#f8fafc,stroke:#94a3b8
    style C fill:#f8fafc,stroke:#94a3b8
    style E fill:#eff6ff,stroke:#3b82f6
    style H fill:#dcfce7,stroke:#22c55e
```

### 🧩 Blog Management Workflow

The admin CMS separates the major content operations:

```text id="e6x2q1"
                    ✍️ Blog CMS
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
     Create           Edit          Manage
        │               │               │
        │               │        ┌──────┴──────┐
        │               │        │             │
        ▼               ▼      Category     Status
   Rich Content     Rich Content              │
        │               │                 Draft / Publish
        └───────────────┴─────────────────────┘
                        │
                        ▼
                 ⚙️ Server Action
                        │
                        ▼
                   PostgreSQL
```




### 🔄 Draft → Publish

```mermaid id="v7w2ka"
stateDiagram-v2
    [*] --> DRAFT

    DRAFT --> PUBLISHED: Publish
    PUBLISHED --> DRAFT: Edit / Unpublish

    PUBLISHED --> [*]
```

The `BlogStatus` enum keeps the publishing state explicit:

```text
DRAFT
  │
  │ Publish
  ▼
PUBLISHED
```

Only published content is intended to become part of the public blog experience.

---

## 🔑 Admin Authentication

The admin application uses a dedicated authentication layer to protect internal clinic operations.

Authentication is handled server-side using **bcrypt password verification, signed JWT sessions, HTTP-only cookies, and protected admin routes**.

### 🔐 Authentication Flow

```mermaid
sequenceDiagram
    actor Admin
    participant Login as Login Page
    participant Action as Login Server Action
    participant DB as PostgreSQL
    participant Auth as Auth Layer
    participant Route as Protected Route

    Admin->>Login: Enter email & password
    Login->>Action: Submit credentials
    Action->>DB: Find admin user
    DB-->>Action: User + password hash
    Action->>Action: bcrypt.compare()
    
    alt Credentials valid
        Action->>Auth: Create signed JWT
        Auth-->>Action: Session token
        Action-->>Admin: Set HTTP-only cookie
        Admin->>Route: Request admin page
        Route->>Auth: Verify session
        Auth-->>Route: Valid ADMIN session
        Route-->>Admin: Render protected page
    else Invalid credentials
        Action-->>Admin: Authentication error
    end
```

### 🛡️ Session Design

The session layer uses:

| Security Layer        | Implementation |
| --------------------- | -------------- |
| **Password Hashing**  | `bcryptjs`     |
| **Session Token**     | Signed JWT     |
| **Algorithm**         | HS256          |
| **Cookie**            | HTTP-only      |
| **Production Cookie** | Secure         |
| **SameSite**          | `lax`          |
| **Session Lifetime**  | 7 days         |
| **Cookie Path**       | `/`            |
| **Required Secret**   | `AUTH_SECRET`  |

The session payload contains the authenticated user's **ID, role, and email**, allowing protected routes to identify the current administrator.

### 🚧 Protected Route Flow

The admin application uses a protected layout to prevent unauthenticated access:

```mermaid
flowchart TD
    A["Request Admin Route"] --> B["Read Session Cookie"]
    B --> C{"Valid JWT?"}

    C -->|No| D["↩️ Redirect /login"]
    C -->|Yes| E{"Role = ADMIN?"}

    E -->|No| D
    E -->|Yes| F["🔐 Render Admin Route"]

    style D fill:#fee2e2,stroke:#ef4444
    style F fill:#dcfce7,stroke:#22c55e
```

---

## 🗄️ Data Model

Shine Clinic uses **PostgreSQL with Prisma ORM** as the shared persistence layer for both the public website and admin application.

The database is designed around four core entities:

* `User` — Admin identity and ownership
* `Category` — Blog classification
* `Blog` — CMS-managed content
* `Consultation` — Patient consultation requests

### 🧬 Entity Relationship Model

```mermaid
erDiagram
    USER ||--o{ BLOG : authors
    CATEGORY ||--o{ BLOG : categorizes

    USER {
        string id PK
        string name
        string email UK
        string passwordHash
        enum role
        datetime createdAt
        datetime updatedAt
    }

    CATEGORY {
        string id PK
        string name
        string slug UK
        datetime createdAt
        datetime updatedAt
    }

    BLOG {
        string id PK
        string title
        string slug UK
        string excerpt
        json content
        string featuredImage
        string imageAlt
        enum status
        datetime publishedAt
        string seoTitle
        string seoDescription
        string canonicalUrl
        string ogTitle
        string ogDescription
        string ogImage
        string authorId FK
        string categoryId FK
        datetime createdAt
        datetime updatedAt
    }

    CONSULTATION {
        string id PK
        string name
        string phone
        string email
        string concern
        date preferredDate
        string preferredTime
        string message
        enum status
        string source
        datetime createdAt
        datetime updatedAt
    }
```



### 📝 Blog Data Model

The `Blog` entity is designed to support the complete CMS → publishing pipeline.

| Field Group       | Purpose                                      |
| ----------------- | -------------------------------------------- |
| **Core Content**  | `title`, `slug`, `excerpt`, `content`        |
| **Media**         | `featuredImage`, `imageAlt`                  |
| **Publishing**    | `status`, `publishedAt`                      |
| **SEO**           | `seoTitle`, `seoDescription`, `canonicalUrl` |
| **Open Graph**    | `ogTitle`, `ogDescription`, `ogImage`        |
| **Relationships** | `authorId`, `categoryId`                     |
| **Audit**         | `createdAt`, `updatedAt`                     |

The article body is stored as structured **JSON**, allowing the admin editor to maintain rich content without reducing the article to a single plain-text field.

### 📅 Consultation Data Model

`Consultation` represents the complete lifecycle of a booking request submitted through the public website.

```text
Patient Input
     │
     ├── Personal Information
     │     ├── name
     │     ├── phone
     │     └── email
     │
     ├── Consultation Details
     │     └── concern
     │
     ├── Preferred Visit
     │     ├── preferredDate
     │     └── preferredTime
     │
     └── Request Metadata
           ├── message
           ├── source
           └── status
```

The record also maintains `createdAt` and `updatedAt` timestamps so the administrative workflow has persistent lifecycle information.


> **One database. Clear entities. Explicit relationships. Structured workflows.**

---

## 🧩 Project Structure

Shine Clinic is organized as two independent Next.js applications sharing the same PostgreSQL data layer:

```text
shine-clinic/
│
├── clinic-website/                  # 🌐 Public patient-facing application
│   │
│   ├── app/
│   │   ├── about/
│   │   ├── blogs/
│   │   │   └── [slug]/
│   │   ├── book-consultation/
│   │   ├── clinic/
│   │   ├── concerns/
│   │   │   └── [slug]/
│   │   ├── contact/
│   │   ├── treatments/
│   │   │   └── [slug]/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── about/
│   │   ├── blogs/
│   │   ├── booking/
│   │   ├── clinic/
│   │   ├── common/
│   │   ├── concerns/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── treatments/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── treatmentsDetails/
│   │   ├── concernsDetails/
│   │   ├── booking/
│   │   └── ...
│   │
│   ├── lib/
│   │   ├── blog.js
│   │   ├── content.js
│   │   ├── prisma.js
│   │   └── booking/
│   │
│   └── prisma/
│       └── schema.prisma
│
│
└── clinic-admin/                    # 🔐 Internal administration application
    │
    ├── app/
    │   ├── login/
    │   ├── (admin)/
    │   │   ├── dashboard/
    │   │   ├── blogs/
    │   │   └── consultations/
    │   └── logout/
    │
    ├── components/
    │   ├── blog/
    │   ├── layout/
    │   └── ui/
    │
    ├── lib/
    │   ├── auth.js
    │   ├── markdownToHtml.js
    │   ├── markdownToTiptap.js
    │   └── prisma.js
    │
    └── prisma/
        ├── schema.prisma
        ├── migrations/
        └── seed/
```

---

## ⚙️ Tech Stack

The project combines modern React/Next.js application architecture with relational data persistence, server-side mutations, authentication, and a structured CMS.

### Frontend

| Technology         | Role                                                        |
| ------------------ | ----------------------------------------------------------- |
| **Next.js 16**     | Application framework, routing and server-side capabilities |
| **React 19**       | Component-based UI architecture                             |
| **Tailwind CSS 4** | Utility-first styling                                       |
| **Framer Motion**  | UI transitions and interactive animations                   |
| **Lucide React**   | Consistent icon system                                      |
| **shadcn/ui**      | Reusable UI primitives                                      |
| **Embla Carousel** | Carousel-based interfaces                                   |

### Backend & Data

| Technology                    | Role                                            |
| ----------------------------- | ----------------------------------------------- |
| **Next.js Server Actions**    | Server-side mutations and application workflows |
| **Prisma 7**                  | ORM and database access layer                   |
| **PostgreSQL**                | Relational persistence                          |
| **pg**                        | PostgreSQL connectivity                         |
| **Prisma PostgreSQL Adapter** | Prisma database adapter                         |

### Admin & CMS

| Technology            | Role                        |
| --------------------- | --------------------------- |
| **Tiptap**            | Rich-text content editor    |
| **Tiptap StarterKit** | Core editor functionality   |
| **Tiptap Link**       | Hyperlink support           |
| **Tiptap Table**      | Structured table content    |
| **marked**            | Markdown-to-HTML processing |

### Authentication

| Technology            | Role                        |
| --------------------- | --------------------------- |
| **bcryptjs**          | Password hash verification  |
| **jose**              | Signed JWT session handling |
| **HTTP-only Cookies** | Session storage             |

### Engineering Model

```text
Next.js
   │
   ├── React UI
   ├── App Router
   ├── Dynamic Routes
   └── Server Actions
          │
          ▼
       Prisma
          │
          ▼
     PostgreSQL
```

The stack is intentionally centered around Next.js rather than introducing a separate Express backend, keeping application logic, routing, server actions, and data access within a cohesive full-stack architecture.

---


---

## 🔐 Environment Variables

Sensitive configuration is kept outside the source code through environment variables.

### Public Website

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

### Admin Application

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
AUTH_SECRET="your-long-random-secret"
```

### Configuration Flow

```text
.env.local
    │
    ├── DATABASE_URL
    │
    └── AUTH_SECRET
           │
           ▼
     Server Environment
           │
           ▼
 ┌──────────────────────┐
 │ Prisma / Auth Layer  │
 └──────────────────────┘
```

> Never commit `.env`, `.env.local`, database credentials, or authentication secrets to version control.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd shine-clinic
```

### 2. Setup the Public Website

```bash
cd clinic-website
npm install
```

Create the environment file:

```env
DATABASE_URL="your-postgresql-connection-string"
```

Generate the Prisma client:

```bash
npx prisma generate
```

Start the development server:

```bash
npm run dev
```

The public application will be available through the local Next.js development server.

### 3. Setup the Admin Application

Open another terminal:

```bash
cd clinic-admin
npm install
```

Create the environment file:

```env
DATABASE_URL="your-postgresql-connection-string"
AUTH_SECRET="your-random-secret"
```

Generate Prisma:

```bash
npx prisma generate
```

Apply the available database migrations when setting up the database:

```bash
npx prisma migrate deploy
```

Start the admin application:

```bash
npm run dev
```

### 4. Database Setup

The applications use PostgreSQL through Prisma.

```text
Environment Variables
        │
        ▼
    Prisma Client
        │
        ▼
    PostgreSQL
        │
        ├── User
        ├── Category
        ├── Blog
        └── Consultation
```

For local development, the database connection should point to a PostgreSQL instance accessible from both applications.

---

## 📈 Scalability & Production Considerations

The project is structured so that individual parts of the platform can evolve without requiring a complete architectural rewrite.

### Current Architectural Considerations

**1. Relational Data Model**

PostgreSQL provides structured relationships between users, categories, blogs, and consultations.

**2. Database Indexing**

Frequently queried fields such as consultation status, creation date, blog status, category, author, and publication date are indexed.

**3. Server-side Mutations**

Sensitive database mutations are performed through Next.js Server Actions rather than exposing database operations directly to the browser.

**4. Authentication Boundary**

Administrative functionality is isolated behind authenticated `ADMIN` sessions.

**5. Data-driven Content**

Treatment and concern pages are generated from reusable content structures instead of requiring a completely separate page implementation for every entry.

**6. Application Separation**

The public website and admin dashboard are separate applications, allowing their interfaces and deployment strategies to evolve independently.

### Future Scaling Path

```text
Current Architecture
        │
        ▼
   PostgreSQL
        │
        ├── Database Optimization
        ├── Connection Pooling
        ├── Caching
        └── Query Optimization
                │
                ▼
        Production Infrastructure
                │
                ├── CDN / Edge Caching
                ├── Object Storage
                ├── Monitoring
                └── Error Tracking
```

The architecture provides a foundation for adding additional operational requirements as traffic, content volume, and clinic workflows grow.

---


## 🧠 Engineering Highlights

Shine Clinic was designed around a few core engineering principles:

```text
                    SHINE CLINIC
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
  Reusability        Separation       Structured Data
       │                 │                 │
       ▼                 ▼                 ▼
Dynamic Pages       Public/Admin       Prisma Models
       │             Boundary              │
       ▼                 ▼                 ▼
Treatments          Authentication       PostgreSQL
Concerns            CMS                   │
Blogs               Operations            │
       └─────────────────┬─────────────────┘
                         ▼
                 Production-oriented
                  Full-stack System
```

### Key Implementation Patterns

* **Dynamic `[slug]` routes** for scalable treatment, concern, and blog pages
* **Reusable React components** instead of page-specific duplication
* **Server Actions** for server-side mutations
* **Prisma ORM** for structured database access
* **PostgreSQL** for relational persistence
* **JWT-based admin sessions** with HTTP-only cookies
* **bcrypt password verification**
* **Tiptap-powered CMS** for structured blog editing
* **Explicit workflow enums** for consultation and publishing states
* **Database indexes** for frequently accessed fields
* **Separated public and administrative applications**

> **The goal was not just to build a clinic website — it was to build the system behind one.**

---

## 👨‍💻 Author

**Nikhil Yadav**

Full-Stack Developer focused on building modern web applications with **React, Next.js, Node.js, PostgreSQL, Prisma, and AI-integrated technologies**.

```text
Build → Learn → Improve → Ship
```

### Connect

* 💼 LinkedIn — Add your profile
* 🐙 GitHub — Add your profile
* 🌐 Portfolio — Add your portfolio

---

## ⭐ Project

If you found the project useful or interesting, consider giving the repository a ⭐.

Built with **Next.js · React · Prisma · PostgreSQL · Tailwind CSS**



