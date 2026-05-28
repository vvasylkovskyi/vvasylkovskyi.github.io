type AgentApiResponse = {
  success: true;
  data: {
    status: string;
    response: string;
  };
  error: null;
};

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const response = await fetch('https://llm-api.iac-toolbox.com/v1/agent/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Source': 'viktor-portfolio',
      },
      body: JSON.stringify({ messages }),
    });
    const data: AgentApiResponse = await response.json();
    return Response.json({ message: data.data.response }, { status: 200 });
  } catch (error) {
    console.error('Error calling AI agent:', error);
    return Response.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
