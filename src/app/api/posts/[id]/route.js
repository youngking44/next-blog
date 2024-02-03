import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  console.log("Request made with params id....", id);
  try {
    await connectDB();

    console.log("Connected to DB successfully...");

    const post = await Post.findById(id);

    if (!post) return new Response("Not Found", { status: 404 });

    console.log("Post found...", post);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log("My single post error", err);
    return new NextResponse("Server error", { status: 500 });
  }
};
