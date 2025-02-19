import { domains } from "@/config/domains";

const GET = () => {
    return new Response(JSON.stringify(domains), {
        headers: {
            "content-type": "application/json",
        },
        status: 200,
    });
}

export { GET };