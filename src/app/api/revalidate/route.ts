import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");

  if (token !== process.env.REVALIDATE_SECRET_KEY) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let paths: string[] | undefined;
  let tags: string[] | undefined;

  try {
    const body = await request.json();
    paths = body.paths;
    tags = body.tags;
  } catch {
    // No body or invalid JSON
  }

  if (!paths?.length && !tags?.length) {
    // Revalidate entire site if no specific paths/tags provided
    revalidatePath("/", "layout");
    return NextResponse.json({
      revalidated: true,
      message: "Full site revalidated",
    });
  }

  try {
    const revalidated: string[] = [];

    if (paths?.length) {
      for (const path of paths.filter((p) => p.startsWith("/"))) {
        revalidatePath(path);
        revalidated.push(path);
      }
    }

    if (tags?.length) {
      for (const tag of tags) {
        revalidateTag(tag);
        revalidated.push(tag);
      }
    }

    return NextResponse.json({
      revalidated: true,
      message: `Revalidated: ${revalidated.join(", ")}`,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
