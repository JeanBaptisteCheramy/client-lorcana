
export async function POST(url:string, dataToWrite:FormData) {
    "use server";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToWrite),
    });
    const data = await res.json();
    return Response.json(data);
  }