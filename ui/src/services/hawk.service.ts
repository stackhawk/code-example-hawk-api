import { FetchHawkRequest, FetchHawkResponse, Hawk } from './hawk';

const BASE_URL = 'http://localhost:8000/api/';

export async function fetchHawks({
  filter,
  page,
  sort,
}: FetchHawkRequest): Promise<FetchHawkResponse> {
  const queryParams = new URLSearchParams({
    ...(filter && { filter }),
    ...(page && { pageSize: page.size, pageToken: page.token }),
    ...(sort && { sortDir: sort.direction, sortField: sort.field }),
  });
  const response = await fetch(`${BASE_URL}hawk/list?${queryParams}`, {
    method: 'GET',
  });
  return (await response.json()) as FetchHawkResponse;
}

export async function createHawk(hawk: Omit<Hawk, 'id'>): Promise<Hawk> {
  const response = await fetch(`${BASE_URL}hawk`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hawk),
  });
  return (await response.json()) as Hawk;
}

export async function fetchHawk(id: number): Promise<Hawk> {
  const response = await fetch(`${BASE_URL}hawk/${id}`, {
    method: 'GET',
  });
  return (await response.json()) as Hawk;
}

export async function updateHawk(id: number, hawk: Hawk): Promise<Hawk> {
  const response = await fetch(`${BASE_URL}hawk/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hawk),
  });
  return (await response.json()) as Hawk;
}
