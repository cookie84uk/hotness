import { create } from 'zustand';

interface Profile {
  // Add your profile interface here
}

interface ProfileStore {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
}

export const useProfile = create<ProfileStore>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile })
})); 