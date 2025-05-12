import { NextResponse } from 'next/server';
import { supabase } from '../../supabaseClient';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { username, password } = await req.json();

  const { data: user, error } = await supabase
    .from('access')
    .select('*')
    .eq('username', username)
    .single();

  if (error || !user) {
    return NextResponse.json({ message: 'Benutzer nicht gefunden' }, { status: 401 });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return NextResponse.json({ message: 'Falsches Passwort' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Erfolgreich eingeloggt' }, { status: 200 });
}
