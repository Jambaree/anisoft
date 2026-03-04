import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET_KEY) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let paths: string[] | undefined;

  try {
    const body = await request.json();
    paths = body.paths;
  } catch {
    // No body or invalid JSON — revalidate everything
  }

  try {
    if (paths?.length) {
      for (const path of paths) {
        revalidatePath(path);
      }
    } else {
      // Revalidate the entire site
      revalidatePath("/", "layout");
    }

    return NextResponse.json({
      revalidated: true,
      message: paths?.length
        ? `Paths revalidated: ${paths.join(", ")}`
        : "Full site revalidated",
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message },
      { status: 500 }
    );
  }
}

// Also support POST for easier WordPress webhook integration
export { PUT as POST };
