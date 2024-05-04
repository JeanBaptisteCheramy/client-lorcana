import { create } from 'zustand'

type userType = {
  user:{
    firstName: string
    lastName: string
    email: string
  }
}

export const useUserStore = create<userType>((set)=>({
  user:{
    firstName: '',
    lastName: '',
    email: '',
  },
  setUser: (userData:any) => set({ user: userData }),
  resetUser:() =>({  user:{ firstName: '', lastName: '', email: ''}})
}))