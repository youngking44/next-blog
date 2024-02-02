import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Post.find();
    return new NextResponse(posts, { status: 200 });
  } catch (err) {
    return new NextResponse("Server error", { status: 500 });
  }
};
