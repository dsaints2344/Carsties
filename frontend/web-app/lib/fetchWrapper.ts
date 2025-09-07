import { auth } from "@/auth";

const baseUrl = "http://localhost:6001/";

const get = async (url: string) => {
    const requestOptions = {
        method: "GET",
        headers: await getheaders()
    };

    const response = await fetch(`${baseUrl}${url}`, requestOptions);

    return handleResponse(response);
       
}

const handleResponse = async (response: Response) => {
    const text = await response.text();
    const data = text && JSON.parse(text);
    if (response.ok) {
        return data || response.statusText;
    }
    else {
        const error = {
            status: response.status,
            message: response.statusText
        }

        return { error };
    }
}

const put = async (url: string, body: unknown) => {
    const requestOptions = {
        method: "PUT",
        headers: await getheaders(),
        body: JSON.stringify(body)
    };

    const response = await fetch(`${baseUrl}${url}`, requestOptions);

    return handleResponse(response);
       
}

const post = async (url: string, body: unknown) => {
    const requestOptions = {
        method: "POST",
        headers: await getheaders(),
        body: JSON.stringify(body)
    };

    const response = await fetch(`${baseUrl}${url}`, requestOptions);

    return handleResponse(response);
       
}

const del = async (url: string) => {
    const requestOptions = {
        method: "DELETE",
        headers: await getheaders()
    };

    const response = await fetch(`${baseUrl}${url}`, requestOptions);

    return handleResponse(response);
}

const getheaders = async (): Promise<Headers> => {
    const session = await auth();
    const headers = new Headers();
    headers.set('Content-type', 'application/json');
    
    if (session) {
        headers.set('Authorization', `Bearer ${session.accessToken}`);
    }

    return headers;

}

export const fetchWrapper = {
    get,
    put,
    post,
    del
};
