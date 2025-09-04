import { NextResponse } from "next/server";
import { capitalize } from "@zohair-abbasi/string-utils";

export async function GET() {
    const result = capitalize("hello world");
    return NextResponse.json({ message: result });
}
