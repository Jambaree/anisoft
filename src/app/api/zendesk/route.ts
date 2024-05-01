// src/app/api/zendesk/availabilities.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Example agent IDs - replace or populate this list as necessary.
const agentIds = [26167792055700, 26006137380116];

export async function GET(req: NextRequest) {
  const baseUrl =
    "https://anisoftgroupinc.zendesk.com/api/v2/agent_availabilities/";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Basic ${Buffer.from(
      process.env.ZENDESK_API_TOKEN || ""
    ).toString("base64")}`,
  };

  // Map each agent ID to a fetch request
  const fetchPromises = agentIds.map((agentId) =>
    fetch(baseUrl + agentId, { method: "GET", headers })
      .then((response) => response.json()) // Assuming response is always valid JSON
      .catch((error) => ({
        error: `Failed to fetch data for agent ${agentId}: ${error}`,
      }))
  );

  try {
    // Resolve all the fetch promises
    const results = await Promise.all(fetchPromises);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching agent availabilities:", error);
    return new NextResponse("Failed to fetch agent availabilities", {
      status: 500,
    });
  }
}
