#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🏥 Healthcare Registration Form Setup');
console.log('=====================================\n');

// Check if .env.local exists
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local file...');
  const envContent = `# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
`;
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env.local file created');
} else {
  console.log('✅ .env.local file already exists');
}

console.log('\n📋 Next Steps:');
console.log('1. Set up your Supabase project at https://supabase.com');
console.log('2. Copy your project URL and keys to .env.local');
console.log('3. Run the SQL script in supabase-schema.sql in your Supabase SQL Editor');
console.log('4. Run "npm run dev" to start the development server');
console.log('\n🎉 Setup complete! Happy coding!');
