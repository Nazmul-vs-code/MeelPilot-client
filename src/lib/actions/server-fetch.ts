'use server'

import { headers } from "next/headers";
import { auth } from "../auth";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const serverFetch = async <T>(
    endpoint: string,
    method: HttpMethod,
    body?: T
) => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    console.log(token , ' token on server fetch')
    // const token = session?.session;

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: body ? JSON.stringify(body) : undefined,
    });


    return await response.json();
};