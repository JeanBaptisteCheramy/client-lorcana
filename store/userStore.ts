
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface userType {
  user:{
    firstName: string
    lastName: string
    email: string
  },
  setUser: () => void,
  resetUSer: () => void
}

export const useUserStore = create<userType>()(
  persist(
    (set)=>({
      user:{
        firstName: '',
        lastName: '',
        email: '',
      },
      setUser: (userData:any) => set({ user: userData }),
      resetUser:() => set({  user:{ firstName: '', lastName: '', email: ''}})
    }),
    {
    name:'user-storage',
    }
  )
)