import { writable } from 'svelte/store';

type LoginMethod = 'guest' | 'google' | 'email' | null;

interface AuthState {
	isLoggedIn: boolean;
	loggedInMethod: LoginMethod;
}

// Initialize with default logged-out state
export const authStore = writable<AuthState>({
	isLoggedIn: false,
	loggedInMethod: null
});

// Optional reset helper function
export const resetAuthStore = () => {
	authStore.set({ isLoggedIn: false, loggedInMethod: null });
};

export const loginAsGuest = () => {
	authStore.set({
		isLoggedIn: true,
		loggedInMethod: 'guest'
	});
};
