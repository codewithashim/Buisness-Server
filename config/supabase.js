require('dotenv').config();
const gtsDb = require('@supabase/supabase-js') 

const options = {
  schema: 'public',
  headers: { 'app-name': 'gts-api-server' },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
}
const dbUrl = process.env.SUPABASE_URL;
const dbKey = process.env.SUPABASE_DB_KEY;
const supabase = gtsDb.createClient(dbUrl, dbKey, options)
module.exports = supabase;
