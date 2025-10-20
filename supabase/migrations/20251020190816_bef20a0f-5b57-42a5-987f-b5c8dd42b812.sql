-- Create waitlist table for storing early access sign-ups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (sign up)
CREATE POLICY "Anyone can sign up for waitlist"
ON public.waitlist
FOR INSERT
TO anon
WITH CHECK (true);

-- Only authenticated users can view waitlist (for future admin dashboard)
CREATE POLICY "Authenticated users can view waitlist"
ON public.waitlist
FOR SELECT
TO authenticated
USING (true);

-- Add email validation constraint
ALTER TABLE public.waitlist
ADD CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Add index for faster email lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);

-- Add index for created_at for sorting
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);