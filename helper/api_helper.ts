export async function POST(url: string, dataToWrite: FormData) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToWrite),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }

    const data = await res.json();;
    
    return data;
  } catch (error) {
    throw error;
  }
}