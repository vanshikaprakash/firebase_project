// src/contexts/AuthContext.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, User } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  isFirebaseEnabled: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Check if Firebase is configured
const isFirebaseEnabled = !!app;

let auth: any;
if (isFirebaseEnabled) {
  auth = getAuth(app);
}

const googleProvider = isFirebaseEnabled ? new GoogleAuthProvider() : null;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!isFirebaseEnabled) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    if (!isFirebaseEnabled || !googleProvider) {
      toast({ variant: 'destructive', title: 'Error', description: 'Firebase is not configured. Cannot sign in.' });
      return;
    }
    try {
      await signInWithPopup(auth, googleProvider);
      toast({ title: 'Success', description: 'You have signed in successfully.' });
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      toast({ variant: 'destructive', title: 'Sign-in Error', description: 'Could not sign in with Google. Please try again.' });
    }
  };

  const logout = async () => {
    if (!isFirebaseEnabled) return;
    try {
      await signOut(auth);
      toast({ title: 'Success', description: 'You have signed out.' });
    } catch (error) {
      console.error("Error signing out: ", error);
      toast({ variant: 'destructive', title: 'Sign-out Error', description: 'Could not sign out. Please try again.' });
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    logout,
    isFirebaseEnabled,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
