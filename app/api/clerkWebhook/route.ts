import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'


export async function POST(request: Request) {

  const { type, data } = await request.json()

  if (type === 'user.created') {
    const { id, email } = data

    try {
      await prisma.user.create({
        data: {
          clerkId: id,
          email,
        },
      })

      return NextResponse.json({ message: 'User created successfully' })
    } catch (error) {
      console.error('Error creating user:', error)
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
  }

  return NextResponse.json({ message: 'Unhandled event type' }, { status: 400 })
}

export async function GET() {
  return Response.json({ message: 'Hello World!' })
}
  