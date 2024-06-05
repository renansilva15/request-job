export async function scheduler(
  name: string,
  job: (args: unknown) => Promise<void>,
  args: unknown,
  interval: number = 1000,
): Promise<void> {
  try {
    console.log(
      `Job ${name} runned at ${new Date().toLocaleString()} with response: ${await job(args)}`,
    );

    setInterval(async () => {
      console.log(
        `Job ${name} runned at ${new Date().toLocaleString()} with response: ${await job(args)}`,
      );
    }, interval);
  } catch (error) {
    console.error('Error when trying to schedule:', error);
  }
}
