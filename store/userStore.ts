import { create } from 'zustand'

type userType = {
  user: {
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
  setUser: (firstName:string, lastName:string, email:string) => set({user:{firstName:firstName, lastName:lastName,email:email}})
}))