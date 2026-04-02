import clientPromise from "@/lib/mongodb"

interface UrlRequestBody {
  url: string
  shorturl: string
}

export async function POST(request: Request): Promise<Response> {
  try {
    let body: UrlRequestBody
    try {
      body = await request.json()
    } catch {
      return Response.json(
        { success: false, error: true, message: "Invalid JSON body." },
        { status: 400 }
      )
    }

    const url = typeof body.url === "string" ? body.url.trim() : ""
    const shorturl =
      typeof body.shorturl === "string" ? body.shorturl.trim() : ""

    if (!url || !shorturl) {
      return Response.json(
        {
          success: false,
          error: true,
          message: "URL and short link text are required.",
        },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("nanolink")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shorturl })

    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "That short URL is already taken.",
      })
    }

    await collection.insertOne({
      url,
      shorturl,
    })

    return Response.json({
      success: true,
      error: false,
      message: "URL saved successfully.",
    })
  } catch (e) {
    console.error(e)
    return Response.json(
      {
        success: false,
        error: true,
        message:
          "Could not reach the database. Is MongoDB running and MONGODB_URI set?",
      },
      { status: 503 }
    )
  }
}
