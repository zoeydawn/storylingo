import { writable, get } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';
import { browser } from '$app/environment';

type LoginMethod = 'guest' | 'google' | 'email' | null;

interface AuthState {
	isLoggedIn: boolean;
	loggedInMethod: LoginMethod;
	user?: any; // We can define a proper user type later
}

// Initialize with default logged-out state
export const authStore = writable<AuthState>({
	isLoggedIn: false,
	loggedInMethod: null
});

// Reset helper function
export const resetAuthStore = () => {
	authStore.set({ isLoggedIn: false, loggedInMethod: null, user: null });
};

// Set up listener for auth state changes only in browser
if (browser) {
    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session) {
            // Determine the login method from the session
            const provider = session.user?.app_metadata?.provider as LoginMethod;
            authStore.set({
                isLoggedIn: true,
                loggedInMethod: provider || 'email', // if provider is not available, default to 'email'
                user: session.user
            });
        } else if (event === 'SIGNED_OUT') {
            resetAuthStore();
        }
    });
}

// Login functions for different methods
export const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: window.location.origin
        }
    });
};

export const loginWithEmail = async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
            emailRedirectTo: window.location.origin
        }
    });
    if (error) {
        throw error;
    }
};

export const loginAsGuest = () => {
    authStore.set({
        isLoggedIn: true,
        loggedInMethod: 'guest'
    });
};

export const logout = async () => {
    const { loggedInMethod } = get(authStore);
    if (loggedInMethod !== 'guest') {
        await supabase.auth.signOut();
    }
    resetAuthStore();
};
