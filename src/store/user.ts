import { defineStore } from 'pinia'
import { ref } from 'vue'

// export const useUserStore = defineStore({
//     id: 'user',
//     state: () => {
//         return {
//             name: 'Jack'
//         }
//     },
//     getters: {
//       fullName: state => state.name + ' Jack'
//     },
//     actions: {
//         setName(name: string) {
//             this.name= name
//         }
//     },
//     persist: {
//         enabled: true,
//         strategies: [
//             {
//                 key: 'my_user',
//                 storage: localStorage
//             }
//         ]
//     }
// })

export const useUserStore = defineStore('user', ()=> {
    const name = ref<string>('Jack')
    const setName = (val: string) => {
        name.value = val
    }
    const fullName = () => {
        return name.value + ' Jack'
    }
    return {
        name,
        setName,
        fullName
    }
},{
    persist: {
        enabled: true,
        strategies: [{
            key: 'my_user',
            storage: localStorage
        }]
    }
})
