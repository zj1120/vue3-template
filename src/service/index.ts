import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElLoading } from 'element-plus'
// @ts-ignore
import qs from 'qs'

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_WEB_URL,
    timeout: 60 * 1000,
    responseType: 'json',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json'
    }
})

let loading: any = null
// 请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
        // @ts-ignore
        config.headers['Authorization'] = 'Bearer ' + token
    }
    // @ts-ignore
    if (config.loading) {
        loading = ElLoading.service()
    }
    // @ts-ignore
    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        config.data = qs.stringify(config.data)
    }
    return config
})
// 响应拦截器
service.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response.data
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)

interface ResType<T> {
    code: number,
    data?: T,
    message?: string,
    error?: string
}

interface Http {
    get<T>(url: string, params?: unknown, config?: object): Promise<ResType<T>>
    post<T>(url: string, params?: unknown, config?: object): Promise<ResType<T>>
    delete<T>(url: string, params?: unknown, config?: object): Promise<ResType<T>>
    put<T>(url: string, params?: unknown, config?: object): Promise<ResType<T>>
}

const http: Http = {
    get(url, params, config) {
        return new Promise((resolve, reject) => {
            service({ url, params, method: 'GET', ...config }).then((res: any) => {
                // @ts-ignore
                if (config.loading) {
                    loading.close()
                }
                resolve(res)
            }).catch(() => {
                // @ts-ignore
                if (config.loading) {
                    loading.close()
                }
                reject()
            })
        })
    },
    post(url, params, config) {
        return new Promise((resolve, reject) => {
            service({ url, params, method: 'POST', ...config }).then((res: any) => {
                // @ts-ignore
                if (config.loading) {
                    loading.close()
                }
                resolve(res)
            }).catch(() => {
                // @ts-ignore
                if (config.loading) {
                    loading.close()
                }
                reject()
            })
        })
    },
    delete(url, params, config) {
        return new Promise((resolve, reject) => {
            service({ url, params, method: 'DELETE', ...config }).then((res: any) => {
                // @ts-ignore
                if (config.loading) {
                    loading.close()
                }
                resolve(res)
            }).catch(() => {
                // @ts-ignore
                if (config.loading) {
                    loading.close()
                }
                reject()
            })
        })
    },
    put(url, params, config) {
        return new Promise((resolve, reject) => {
            service({ url, params, method: 'PUT', ...config }).then((res: any) => {
                // @ts-ignore
                if (config.loading) {
                    loading.close()
                }
                resolve(res)
            }).catch(() => {
                // @ts-ignore
                if (config.loading) {
                    loading.close()
                }
                reject()
            })
        })
    }
}
export default http
