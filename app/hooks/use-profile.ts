'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

interface Profile {
  user_id: string;
  credits: number;
  tier: 'free' | 'pro';
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  created_at: string;
  updated_at: string;
}

export function useProfile() {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      if (!user) return;

      try {
        const response = await fetch('/api/profile');
        if (!response.ok) throw new Error('Failed to fetch profile');
        
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setIsLoading(false);
      }
    }

    if (isUserLoaded && user) {
      fetchProfile();
    } else if (isUserLoaded) {
      setIsLoading(false);
    }
  }, [user, isUserLoaded]);

  return {
    profile,
    isLoading,
    isUserLoaded
  };
} 