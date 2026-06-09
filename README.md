# Healthcare Registration Form

A modern registration form built with Next.js, React, and Supabase, featuring a beautiful UI design with a healthcare professional theme.

## Features

- 🎨 Beautiful, responsive UI design
- 📱 Mobile-friendly interface
- 🔐 Secure user registration
- 🗄️ Supabase database integration
- ✅ Form validation
- 🚀 Next.js 15 with App Router

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Supabase account

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to your project dashboard
3. Navigate to Settings > API
4. Copy your Project URL and anon public key

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Database Setup

1. In your Supabase dashboard, go to the SQL Editor
2. Run the SQL script from `supabase-schema.sql` to create the users table and set up the necessary policies

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the registration form.

## Project Structure

```
src/
├── app/
│   ├── api/register/     # API endpoint for user registration
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   └── RegistrationForm.tsx  # Main registration form component
└── lib/
    └── supabase.ts       # Supabase client configuration
```

## API Endpoints

### POST /api/register

Registers a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "phone": "+1234567890"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }
}
```

## Database Schema

The `users` table includes:
- `id`: UUID primary key
- `name`: User's full name
- `email`: Unique email address
- `password_hash`: Hashed password (currently stored as plain text for demo)
- `phone`: Phone number
- `created_at`: Timestamp
- `updated_at`: Timestamp

## Security Notes

⚠️ **Important**: This is a demo application. In production, you should:

1. Hash passwords using bcrypt or similar
2. Implement proper authentication
3. Add rate limiting
4. Validate and sanitize all inputs
5. Use HTTPS
6. Implement proper error handling

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own applications!
