  import { createClient } from '@supabase/supabase-js'
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPERBASE_URL||"", process.env.NEXT_PUBLIC_SUPERBASE_KEY||"")
 supabase.channel('custom-all-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'skills' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
    export default supabase