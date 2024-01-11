import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

const schema = z.object({
  roomName: z.string(),
  roomType: z.string(),
  roomPrice: z.number(),
  roomCapacity: z.number(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }
  const newRoomDetails = await prisma.roomDetail.create({
    data: {
      name: body.roomName,
      type: body.roomType,
      price: body.roomPrice,
      capacity: body.roomCapacity,
    },
  });

  return NextResponse.json(newRoomDetails, { status: 201 });
}

