import supabase from './config/supabaseClient';
import { getDateWithoutTime } from './utils/date';

export async function getTodosToday() {
  const res = await supabase
    .from('todo')
    .select(
      `id, created_at, title, description, due_date, priority, notes, done, project ( id, title)`
    )
    .eq('due_date', getDateWithoutTime(new Date()));

  if (res.error) {
    throw {
      message: res.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  if (res.data) {
    return res.data;
  }
}

export async function getTodosCustomProjects() {
  const res = await supabase.from('project').select().eq('custom', true);

  if (res.error) {
    throw {
      message: res.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  if (res.data) {
    return res.data;
  }
}

export async function getTodosDefaultProjects() {
  const res = await supabase.from('project').select().eq('custom', false);

  if (res.error) {
    throw {
      message: res.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  if (res.data) {
    return res.data;
  }
}

export async function getTodos() {
  return supabase.from('todo').select();
}
