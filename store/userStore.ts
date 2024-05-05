
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type userType = {
  user:{
    firstName: string
    lastName: string
    email: string
  }
}

export const useUserStore = create(
  persist(
    (set)=>({
      user:{
        firstName: '',
        lastName: '',
        email: '',
      },
      setUser: (userData:any) => set({ user: userData }),
      resetUser:() =>({  user:{ firstName: '', lastName: '', email: ''}})
    }),
    {
    name:'user-storage',
    }
  )
)