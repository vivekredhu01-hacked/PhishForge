import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

interface WaitlistEntry {
  email: string;
  timestamp: string;
  id: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const WAITLIST_FILE = path.join(DATA_DIR, 'waitlist.json');

// Ensure data directory exists
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

// Read existing waitlist entries
async function getWaitlistEntries(): Promise<WaitlistEntry[]> {
  try {
    await ensureDataDir();
    if (existsSync(WAITLIST_FILE)) {
      const fileContent = await readFile(WAITLIST_FILE, 'utf-8');
      return JSON.parse(fileContent);
    }
    return [];
  } catch (error) {
    console.error('Error reading waitlist:', error);
    return [];
  }
}

// Save waitlist entries
async function saveWaitlistEntries(entries: WaitlistEntry[]) {
  try {
    await ensureDataDir();
    await writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving waitlist:', error);
    throw error;
  }
}

// POST - Add email to waitlist
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Normalize email (lowercase, trim)
    const normalizedEmail = email.toLowerCase().trim();

    // Check if email already exists
    const entries = await getWaitlistEntries();
    const exists = entries.some(entry => entry.email === normalizedEmail);

    if (exists) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Add new entry
    const newEntry: WaitlistEntry = {
      email: normalizedEmail,
      timestamp: new Date().toISOString(),
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };

    entries.push(newEntry);
    await saveWaitlistEntries(entries);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully added to waitlist',
        id: newEntry.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET - Retrieve all waitlist entries (for admin access)
export async function GET(request: NextRequest) {
  try {
    // Optional: Add authentication here
    // const authHeader = request.headers.get('authorization');
    // if (authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const entries = await getWaitlistEntries();
    return NextResponse.json({
      success: true,
      count: entries.length,
      entries: entries,
    });
  } catch (error) {
    console.error('Error retrieving waitlist:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


