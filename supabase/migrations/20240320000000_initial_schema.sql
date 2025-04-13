-- Create the email_addresses table
CREATE TABLE IF NOT EXISTS public.email_addresses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.email_addresses ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows everyone to read but no one to write
CREATE POLICY "Allow read access to all users" ON public.email_addresses
    FOR SELECT
    TO public
    USING (true);

-- Create a policy that prevents all write operations
CREATE POLICY "Prevent all write operations" ON public.email_addresses
    FOR ALL
    TO public
    USING (false)
    WITH CHECK (false);

-- Create an index on the email column for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_addresses_email ON public.email_addresses(email);

-- Add comment to the table
COMMENT ON TABLE public.email_addresses IS 'A read-only table for storing email addresses'; 