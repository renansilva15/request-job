export async function requestJob(args: unknown): Promise<any> {
  const argsObj = args as { url?: string };

  if (typeof argsObj.url === 'string') {
    const url = argsObj.url as string;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error when tryng to request: ${response.statusText}`);
    }

    return response.text();
  }
}
