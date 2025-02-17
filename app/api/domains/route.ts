import { domains } from "@/config/domains"

export async function GET() {
    return new Response(JSON.stringify(domains));
}