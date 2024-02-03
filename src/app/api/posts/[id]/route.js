import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDB();

    const post = await Post.findById(id);

    if (!post) return new Response("Not Found", { status: 404 });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Server error", { status: 500 });
  }
};
