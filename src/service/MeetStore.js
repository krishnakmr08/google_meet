import { create } from 'zustand';
import { createJSONStorage } from 'zustand/middleware';
import { mmkvStorage } from './storage';

export const useLiveMeetStore = create()(
  (set, get) => ({
    sessionId: null,
    participants: [],
    chatMessages: [],
    micOn: false,
    videoOn: false,

    addSessionId: id => {
      set({ sessionId: id });
    },
    removeSessionId: () => {
      set({ sessionId: null });
    },

    addParticipant: participant => {
      const { participants } = get();

      if (!participants.find(p => p.userId === participant?.userId)) {
        set({ participants: [...participants, participant] });
      }
    },

    removePartcipant: participantId => {
      const { participants } = get();

      set({
        participants: participants.filter(p => p.userId !== participantId),
      });
    },

    updateParticipant: updatedParticipant => {
      const { participants } = get();

    },
  }),
  {
    name: 'live-meet-storage',
    storage: createJSONStorage(() => mmkvStorage),
  },
);
