import { create } from 'zustand'

export const useDogStore = create(() => ({ paw: true, snout: true, fur: true }))