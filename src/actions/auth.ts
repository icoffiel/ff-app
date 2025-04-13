'use server'

import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers';
import { redirect } from 'next/navigation'

export async function signInWithGoogle() {
  const origin = (await headers()).get("origin");
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/api/auth/callback`,
    },
  })

  if (error) {
    throw new Error(error.message)
  }

  if (data.url) {
    redirect(data.url)
  }
}

export async function signOut() {
  const supabase = await createClient()
  
  const { error } = await supabase.auth.signOut()

  if (error) {
    return { error: error.message }
  }

  redirect('/')
}

export async function getCurrentUser() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  return user
}

export async function isEmailAuthorized(email: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('email_addresses')
    .select('email')
    .eq('email', email)
    .single()

  if (error) {
    console.error('Error checking email authorization:', error)
    return false
  }

  return !!data
}

export async function requireAuth() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/')
  }

  // Check if the user's email is authorized
  const isAuthorized = await isEmailAuthorized(user.email!)
  
  if (!isAuthorized) {
    // If not authorized, sign them out and redirect to home
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/?error=unauthorized')
  }
  
  return user
} 