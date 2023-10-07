export async function PUT({ request }) {
    const inputData = await request.json();
    console.log(inputData);
    return new Response ("Registered Successfully");
}