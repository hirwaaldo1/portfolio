  import { createClient } from '@supabase/supabase-js'
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPERBASE_URL||"", process.env.NEXT_PUBLIC_SUPERBASE_KEY||"")
  export default supabase