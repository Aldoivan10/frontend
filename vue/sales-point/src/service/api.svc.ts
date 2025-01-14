export class APIFetch {
    private readonly baseUrl: string

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl ?? ''
    }

    private fetchAPI<T>(url: string, options: RequestInit, timeout: number = 0) {
        return new Promise<Fetch.Response<T>>(async (resolve) => {
            try {
                const response = await fetch(`${this.baseUrl}${url}`, {
                    ...options,
                    signal: AbortSignal.timeout(timeout),
                })
                if (response.ok) {
                    const data = (await response.json()) as T
                    resolve({ ok: true, data })
                } else
                    resolve({
                        ok: false,
                        error: { type: 'FetchError', msg: await response.text() },
                    })
            } catch (error) {
                const err = error as Error
                resolve({ ok: false, error: { type: err.name, msg: err.message } })
            }
        })
    }

    private createOptions(method: Fetch.Method, body?: Fetch.Body) {
        const headers = new Headers({
            'Content-Type': 'application/json',
        })

        const options: RequestInit = {
            method,
            headers,
            body: JSON.stringify(body),
        }

        return options
    }

    public async get<T>(url: string, timeout?: number) {
        const options = this.createOptions('GET')
        return this.fetchAPI<T>(url, options, timeout)
    }

    public async post<T>(url: string, body?: Fetch.Body, timeout?: number) {
        const options = this.createOptions('POST', body)
        return this.fetchAPI<T>(url, options, timeout)
    }

    public async put<T>(url: string, body?: Fetch.Body, timeout?: number) {
        const options = this.createOptions('PUT', body)
        return this.fetchAPI<T>(url, options, timeout)
    }

    public async patch<T>(url: string, body?: Fetch.Body, timeout?: number) {
        const options = this.createOptions('PATCH', body)
        return this.fetchAPI<T>(url, options, timeout)
    }

    public async delete<T>(url: string, body?: Fetch.Body, timeout?: number) {
        const options = this.createOptions('DELETE', body)
        return this.fetchAPI<T>(url, options, timeout)
    }
}
